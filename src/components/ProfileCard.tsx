import "../css/ProfileCard.css";
import profileImage from "../assets/qq.png";

export default function BasicCard() {
  return (
    <div className="profile-card">
      <img src={profileImage} alt="Profile" className="profile-image" />
      <h2 className="profile-name">Jabol Master</h2>
      <p className="profile-title">Frontend Developer</p>
      <p className="profile-description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo
        possimus quod ipsa nobis quidem unde ullam aut illum, quis sit! Ullam
        qui ipsam quos dolorum illo. Distinctio dolorum tempore officia.
      </p>
      <button className="profile-button">View Profile</button>
    </div>
  );
}
