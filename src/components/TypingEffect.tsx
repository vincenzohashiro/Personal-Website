import React, { useEffect, useMemo, useRef, useState } from "react";

interface TypingEffectProps {
  normalText: string;
  matrixText: string;
  totalCycleDuration?: number; // full cycle: type N → delete N → type M → delete M
  showCursor?: boolean;
  // Optional font classes to visually differentiate Normal/Matrix
  normalClassName?: string;
  matrixClassName?: string;
  // Optional callback if you want to observe transitions
  onPhaseChange?: (phase: Phase) => void;
}

type Phase =
  | "typingNormal"
  | "deletingNormal"
  | "typingMatrix"
  | "deletingMatrix";

export default function TypingEffect({
  normalText,
  matrixText,
  totalCycleDuration = 8000,
  showCursor = true,
  normalClassName,
  matrixClassName,
  onPhaseChange,
}: TypingEffectProps) {
  const [displayText, setDisplayText] = useState("");
  const [phase, setPhase] = useState<Phase>("typingNormal");
  const [blink, setBlink] = useState(true);

  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // Precompute codepoint arrays (Unicode-safe)
  const normalArr = useMemo(() => Array.from(normalText), [normalText]);
  const matrixArr = useMemo(() => Array.from(matrixText), [matrixText]);

  // 4 phases: each gets an equal slice of totalCycleDuration
  const phaseDuration = totalCycleDuration / 4;

  // Compute per-character delay for the current phase
  const delayForPhase = (p: Phase) => {
    const n = Math.max(1, normalArr.length);
    const m = Math.max(1, matrixArr.length);
    switch (p) {
      case "typingNormal":
      case "deletingNormal":
        return phaseDuration / n;
      case "typingMatrix":
      case "deletingMatrix":
        return phaseDuration / m;
    }
  };

  // Cursor blink (purely visual)
  useEffect(() => {
    if (!showCursor) return;
    const id = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(id);
  }, [showCursor]);

  // Ensure timers are cleared
  const clearTick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  // Helper: delete last codepoint
  const chop = (s: string) => {
    const arr = Array.from(s);
    arr.pop();
    return arr.join("");
  };

  // Main engine: rebuild interval on phase or text changes
  useEffect(() => {
    clearTick();
    onPhaseChange?.(phase);

    const delay = delayForPhase(phase);
    if (!delay || !isFinite(delay)) return;

    intervalRef.current = setInterval(() => {
      const len = Array.from(displayText).length;

      switch (phase) {
        case "typingNormal": {
          if (len < normalArr.length) {
            setDisplayText((prev) => prev + normalArr[len]);
          } else {
            // Verified fully typed
            clearTick();
            setPhase("deletingNormal");
          }
          break;
        }
        case "deletingNormal": {
          if (len > 0) {
            setDisplayText((prev) => chop(prev));
          } else {
            // Verified fully deleted
            clearTick();
            setPhase("typingMatrix");
          }
          break;
        }
        case "typingMatrix": {
          if (len < matrixArr.length) {
            setDisplayText((prev) => prev + matrixArr[len]);
          } else {
            // Verified fully typed
            clearTick();
            setPhase("deletingMatrix");
          }
          break;
        }
        case "deletingMatrix": {
          if (len > 0) {
            setDisplayText((prev) => chop(prev));
          } else {
            // Verified fully deleted → loop
            clearTick();
            setPhase("typingNormal");
          }
          break;
        }
      }
    }, delay);

    return clearTick;
  }, [phase, normalArr, matrixArr, displayText, totalCycleDuration]);

  // Reset cleanly if the inputs change
  useEffect(() => {
    setDisplayText("");
    setPhase("typingNormal");
  }, [normalText, matrixText]);

  // Apply font class by current side (normal/matrix)
  const isNormalSide = phase === "typingNormal" || phase === "deletingNormal";
  const activeClass = isNormalSide
    ? normalClassName ?? ""
    : matrixClassName ?? "";

  return (
    <span aria-live="polite" aria-atomic="true" className={activeClass}>
      {displayText}
      {showCursor && <span style={{ opacity: blink ? 1 : 0 }}>|</span>}
    </span>
  );
}
