import "../styles/App.css";
import "../styles/weeks.css";
export default function Weeks({ onsetday, day, onfilterDay }) {
  return (
    <div className="hidden">
      <div className="nav-week" onChange={(e) => onsetday(e.target.value)}>
        <span
          className={`circle ${
            day === "sun" ? "clickedcircle" : "onclickedcircle"
          }`}
          onClick={() => {
            onfilterDay("sun");
          }}
        >
          Sun
        </span>
        <span
          className={`circle ${
            day === "mon" ? "clickedcircle" : "onclickedcircle"
          }`}
          onClick={() => {
            onfilterDay("mon");
          }}
        >
          Mon
        </span>
        <span
          className={`circle ${
            day === "tus" ? "clickedcircle" : "onclickedcircle"
          }`}
          onClick={() => {
            onfilterDay("tus");
          }}
        >
          Tus
        </span>
        <span
          className={`circle ${
            day === "wen" ? "clickedcircle" : "onclickedcircle"
          }`}
          onClick={() => {
            onfilterDay("wen");
          }}
        >
          Wed
        </span>
        <span
          className={`circle ${
            day === "thu" ? "clickedcircle" : "onclickedcircle"
          }`}
          onClick={() => {
            onfilterDay("thu");
          }}
        >
          Ths
        </span>
        <span
          className={`circle ${
            day === "fri" ? "clickedcircle" : "onclickedcircle"
          }`}
          onClick={() => {
            onfilterDay("fri");
          }}
        >
          Fri
        </span>
        <span
          className={`circle ${
            day === "sat" ? "clickedcircle" : "onclickedcircle"
          }`}
          onClick={() => {
            onfilterDay("sat");
          }}
        >
          Sat
        </span>
      </div>
    </div>
  );
}
