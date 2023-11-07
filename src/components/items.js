import "../styles/App.css";
import "../styles/items.css";

export default function Items({ foods, onremove, imagelist, image }) {
  return (
    <div className="main">
      {foods.map((food) => (
        <Foods
          food={food}
          key={food.id}
          imagelist={imagelist}
          onremove={onremove}
          image={image}
        />
      ))}
    </div>
  );
}
function Foods({ food, onremove, imagelist, image }) {
  return (
    <div className="whole">
      <div className="main-roster">
        {/* {!imagelist.length ? (
        <img src={image} alt={food.name} key={food.name} />
      ) : (
        imagelist.map((url) => {
          return <img src={url} alt={food.name} />;
        })
      )} */}
        <img src={image} alt={food.name} key={food.name} />
        <div className="content">
          <h3>{food.name}</h3>
          <div className="links">
            <div className="remove" onClick={() => onremove(food.id)}>
              <h4>Remove</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
