

const IMG_URL = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";


const FoodCard = ({
  id,
  name,
  cloudinaryImageId,
  cuisines,
  avgRating,
  deliveryTime,
  cost,
}) => {
  return (
    <div className="FoodCard">
      <div className="menu-photo">
        <img className="cardimg" src={IMG_URL + cloudinaryImageId} alt={name} />
      </div>
      <h1>{name}</h1>
      <p>{cuisines}</p>
      <p>{avgRating + "  stars"}</p>
      <p>{deliveryTime + " Minutes"}</p>
      <p>{cost}</p>


    </div>
  );
};
export default FoodCard;

