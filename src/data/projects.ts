import abBarberLounge from "../assets/projects/ab-barberlounge.png";
import haarekspertenWebsite from "../assets/projects/haareksperten-website.png";
import haarekspertenDashboard from "../assets/projects/haareksperten-kpi-dashboard.png";
import zelvariaShot from "../assets/projects/zelvaria.png";

export interface Project {
  title: string;
  url?: string;
  category: string;
  description: string;
  tags: string[];
  screenshot?: string;
}

export interface FeaturedProject extends Project {
  role: string;
  highlights: string[];
  integrations: string[];
}

export const featuredProject: FeaturedProject = {
  title: "Zelvaria",
  category: "Full-Stack MMORPG Community Platform",
  description:
    "Zelvaria combines an immersive public-facing web experience with the systems that run a real community behind it: a database-backed application, payment processing, and integrations with Discord, VPS infrastructure, and game-host services.",
  role: "Designed and developed independently: frontend, backend, database, payments, community integration, and infrastructure connections.",
  highlights: [
    "Full-stack web application with a database-backed backend",
    "Supabase and PostgreSQL for data and application state",
    "Player registration pipeline with Minecraft account linking",
    "PayMongo payment integration",
    "Discord community integration",
    "VPS and game-host infrastructure integration",
    "Responsive, custom-designed frontend and UI/UX",
  ],
  integrations: ["PayMongo", "Discord", "VPS", "Game Host", "Supabase"],
  tags: ["Full-Stack", "Payments", "Integrations"],
  screenshot: zelvariaShot,
};

export const projects: Project[] = [
  {
    title: "Håreksperten",
    url: "https://haareksperten.com/",
    category: "Business Website + Consultation",
    description:
      "Website for a Danish hair-transplantation business serving customers seeking treatment in Istanbul. It brings service information, treatment education, pricing, results, testimonials, and a structured consultation journey into one customer-facing platform.",
    tags: ["Business Website", "International", "Consultation Flow", "CRM System", "Automated Lead Handler"],
    screenshot: haarekspertenWebsite,
  },
  {
    title: "Håreksperten KPI Dashboard",
    url: "https://vincenzohashiro.github.io/New-KPI-Dasbhoard/",
    category: "KPI & Revenue Dashboard",
    description:
      "A live KPI and revenue dashboard that consolidates lead, sales, and aftercare data from Monday.com alongside Meta Ads and Google Ads performance into a single funnel and revenue view.",
    tags: ["Dashboard", "Analytics", "Integrations"],
    screenshot: haarekspertenDashboard,
  },
  {
    title: "A&B Barber Lounge 2",
    url: "https://ab-barberlounge2.dk/",
    category: "Business Website + Booking",
    description:
      "Business website and booking experience for a barbershop, giving customers an online presence and a direct path to book appointments.",
    tags: ["Business Website", "Booking"],
    screenshot: abBarberLounge,
  },
  {
    title: "Cruzader TKD",
    url: "https://vincenzohashiro.github.io/Cruzader-TKD/",
    category: "Local Business Website",
    description: "Business website for a local Taekwondo school.",
    tags: ["Business Website"],
  },
  {
    title: "Arma",
    url: "https://arma-ph.net",
    category: "Website",
    description: "Website project for Arma.",
    tags: ["Website"],
  },
  {
    title: "Clothing Line",
    url: "https://joballmaster.github.io/Website-Portfolio/index.html",
    category: "Brand Website",
    description: "Showcase website for a clothing line.",
    tags: ["Website", "E-Commerce"],
  },
];
