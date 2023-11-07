import "../styles/App.css";
import "../styles/roster.css";
export default function Roster({ onAddfood, Addfood, time, filterItem }) {
  return (
    <div>
      <div className="roster">
        <h1>roster</h1>
      </div>
      <div className="food">
        <nav className="space">
          <span
            className={`btn ${
              time === "all" ? "btn-active" : "btn-non-active"
            }`}
            onClick={() => filterItem("all")}
          >
            All
          </span>
          <span className="line">|</span>
          <span
            className={`btn ${
              time === "break fast" ? "btn-active" : "btn-non-active"
            }`}
            onClick={() => filterItem("break fast")}
          >
            Breakfast
          </span>
          <span
            className={`btn ${
              time === "lunch" ? "btn-active" : "btn-non-active"
            }`}
            onClick={() => filterItem("lunch")}
          >
            Lunch
          </span>
          <span
            className={`btn ${
              time === "dinner" ? "btn-active" : "btn-non-active"
            }`}
            onClick={() => filterItem("dinner")}
          >
            Dinner
          </span>
        </nav>
        <span className="line">|</span>
        <span className="btn" onClick={onAddfood}>
          {Addfood ? "Close" : "Add food"}
        </span>
      </div>
    </div>
  );
}
