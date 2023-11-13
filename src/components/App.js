import "../styles/App.css";
import Weeks from "./weeks";
import Name from "./name";
import Roster from "./roster";
import Items from "./items";
import Form from "./Form";
import logo from "../images/logo.png";
import { useState } from "react";

export default function App() {
  const [Addfood, setAddfood] = useState(false);
  const [foods, setfoods] = useState([]);
  const [allfood, setallfood] = useState([]);
  const [time, settime] = useState("break fast");
  const [image, setimage] = useState(logo);
  const [imagelist, setimagelist] = useState([]);
  const [day, setday] = useState("sun");
  function handleaddform() {
    setAddfood((show) => !show);
  }
  function handleaddfood(food) {
    setfoods((foods) => [...foods, food]);
    setallfood((foods) => [...foods, food]);
    setAddfood(false);
  }
  function handleremove(id) {
    setfoods((foodList) => foodList.filter((food) => food.id !== id));
    setallfood((foodList) => foodList.filter((food) => food.id !== id))
  }
  function filterItem(selectedTime) {
    settime(selectedTime);
    if (selectedTime === "all") {
      setfoods(allfood);
    } else {
      const uniqueFood = allfood.filter((food) => {
        return food.time === selectedTime && food.day === day;
      });
      setfoods(uniqueFood);
    }
  }
  function filterDay(selectedDay) {
    setday(selectedDay);
    const uniqueFood = allfood.filter((food) => {
      return food.time === time && food.day === selectedDay;
    });
    setfoods(uniqueFood);
  }
  return (
    <div className="main-body">
      <div className="nav">
        <div>
          <Weeks day={day} onfilterDay={filterDay} onsetday={setday} />
        </div>
        <div className="name-nav">
          <Name />
        </div>
      </div>
      <Roster
        onAddfood={handleaddform}
        Addfood={Addfood}
        time={time}
        filterItem={filterItem}
        onsetallfood={setallfood}
      />
      {Addfood && (
        <Form
          onaddfoodlist={handleaddfood}
          time={time}
          ontime={settime}
          image={image}
          onsetimage={setimage}
          onsetimagelist={setimagelist}
          day={day}
          onsetday={setday}
        />
      )}
      {foods.length > 0 && (
        <Items
          onremove={handleremove}
          image={image}
          imagelist={imagelist}
          foods={foods}
        />
      )}
    </div>
  );
}
