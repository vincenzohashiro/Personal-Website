import "../css/ProfileCard.css";
import profileImage from "../assets/qq.png";

export default function BasicCard() {
  return (
    <div className="container mt-5">
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
      <div className="card text-center">
        <div className="card-header">
          <ul className="nav nav-tabs card-header-tabs">
            <li className="nav-item">
              <a className="nav-link active" aria-current="true" href="#">
                Active
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true">
                Disabled
              </a>
            </li>
          </ul>
        </div>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
