import star from "../images/Star 1.png";
export default function Cards() {
  return (
    <div className="cards-holder">
      <div className="card-item">
        <div className="img1"></div>

        <div className="icon-name">
          <img src={star} alt="a" width="14" height="14"></img>

          <p>
            <span>5.0</span> (6) . USA
          </p>
        </div>

        <div className="card-body">
          <p>Life lessons with Katie Zaferes</p>
          <p>
            <strong>From $136</strong> / person
          </p>
        </div>
      </div>
    </div>
  );
}
