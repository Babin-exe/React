import { useEffect, useState } from "react";
import SearchSection from "./SS";
import FoodCard from "./Foodcard";
import { restaurantList } from "../utils/constants.jsx";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);

  const [allRestaurants, setallRestaurants] = useState([]);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    const fetchData = async () => {
      const data = await restaurantList();
      setRestaurants(data);
      setallRestaurants(data);
    };

    fetchData();
  }, []);

  const handleTopRated = () => {
    const topRated = allRestaurants.filter((res) => res.info.avgRating >= 4.7);
    setRestaurants(topRated);
  };

  const handleShowAll = () => {
    setRestaurants(allRestaurants);
  };

  if (onlineStatus === false) {
    return (
      <h1>
        looks like you are offline i don't have any fancy stuff to show here
      </h1>
    );
  }
  return (
    <div>
      <div className="body">
        <SearchSection
          onTopRatedClick={handleTopRated}
          onShowAllClick={handleShowAll}
        />

        <div className="container">
          {restaurants.map((restaurant) => {
            const {
              key,
              id,
              name,
              cloudinaryImageId,
              cuisines,
              avgRating,
              deliveryTime,
              cost,
            } = restaurant?.data || {};

            return (
              <Link
                key={restaurant?.info?.id}
                to={"restaurants/" + parseInt(restaurant?.info?.id)}
              >
                <FoodCard
                  key={restaurant?.info?.id}
                  id={restaurant?.info?.id}
                  name={restaurant?.info?.name}
                  cloudinaryImageId={restaurant.info.cloudinaryImageId}
                  cuisines={restaurant?.info?.cuisines.join(", ")}
                  avgRating={restaurant?.info?.avgRating}
                  deliveryTime={restaurant?.info?.sla?.deliveryTime}
                  cost={restaurant?.info?.costForTwo}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
