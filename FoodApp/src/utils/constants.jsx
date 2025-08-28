export const restaurantList = async () => {
  const data = await fetch(
    "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9628669&lng=77.57750899999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
  );

  // const data = await fetch("/restaurants.json");
  
  const json = await data.json();

  console.log(json);
  const restaurant =
    json?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];

  return restaurant;
};

export const MENU_API =
  "https://cors-anywhere.herokuapp.com/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=";
