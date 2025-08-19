import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setresInfo] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    FetchMenu();
  }, []);

  const FetchMenu = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setresInfo(json);
  };

  if (!resInfo) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwo } = resInfo.info || {};

  const auh =
    resInfo?.data?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]
      ?.card?.card.itemCards || [];


  return (
    <>
      <div>
        <h1>{name}</h1>
        <h3>{costForTwo}</h3>
        <ul>
          <li>{cuisines?.join(",")}</li>
        </ul>
        <h2>Menu</h2>
        <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>



          {auh.map((take) => (
            <li key={take.card.info.id}>
          
              {take.card.info.name} - Rs{" "}
              {take.card.info.price / 100 || take.card.info.defaultPrice / 100}
            </li>
          ))}
        </ul>
      </div>
    </>



  );
};
export default RestaurantMenu;
