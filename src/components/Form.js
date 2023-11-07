import { useState, useEffect } from "react";
import "../styles/App.css";
import "../styles/form.css";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
export default function Form({
  onaddfoodlist,
  time,
  ontime,
  image,
  onsetimage,
  onsetimagelist,
  day,
}) {
  const [name, setname] = useState("");
  const imageListRef = ref(storage, "image/");
  function handleSubmitform(e) {
    e.preventDefault();
    if (!name || !time) return;
    const id = crypto.randomUUID();
    const newFoodlist = {
      name,
      id,
      time,
      day,
    };
    onaddfoodlist(newFoodlist);
    console.log(newFoodlist);
    const imageRef = ref(storage, `images/${image.name + v4()}`);
    uploadBytes(imageRef, image).then((snapsot) => {
      getDownloadURL(snapsot.ref).then((url) => {
        onsetimagelist((prev) => [...prev, url]);
      });
    });
    setname("");
  }
  useEffect(() => {
    listAll(imageListRef).then((response) => {
      response.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          onsetimagelist((prev) => [...prev, url]);
        });
      });
    });
  });
  return (
    <div className="center">
      <form className="form" onSubmit={handleSubmitform}>
        <label className="title">Food name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        {/* <label className="title">Image URL :</label>
        <input
          type="file"
          accept=".jpg, .png, .jpeg, .gif"
          onChange={(e) => onsetimage(e.target.value)}
        /> */}
        <label className="title">Day Time :</label>
        <select value={time} onChange={(e) => ontime(e.target.value)}>
          <option value="break fast">Break fast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        <span className="cover">
          <button className="btn-n">Add</button>
        </span>
      </form>
    </div>
  );
}
