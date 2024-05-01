import React, { useEffect, useState } from "react";
import { restaurantList } from "../Components/Constants";
import { useParams } from "react-router-dom";

const useRestaurant = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    console.log("a");
    const data = restaurantList.find((restaurant) => restaurant.data.id === id);
    if (data) {
      setRestaurantData(data.data);
    } else {
      console.error(`Restaurant with id ${id} not found in the restaurantList`);
    }
  }, []);

  return restaurantData;
};

export default useRestaurant;
