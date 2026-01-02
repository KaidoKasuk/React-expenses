import profilePic from "./assets/profilePic.png";

function Card() {
  return (
    <div className="card">
      <img className="cardImg" src={profilePic} alt="profile picture" />
      <h2 className="card-title">Kaido Kasuk</h2>
      <p className="card-text">VOCO</p>
    </div>
  );
}

export default Card;
