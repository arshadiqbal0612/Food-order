import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import Shimmer2 from "./Shimmer2";
import useRestaurant from "../utils/useRestaurant";
import { IMG_CDN_URL } from "./Constants";

const ResturantMenu = () => {
  // const [restaurantData, setRestaurantData] = useState(null);
  const {id} = useParams();
  // custom made  hook
  // hook is function at the end which wrap some logic ad return some value

  const restaurantData=useRestaurant(id);
  console.log("mid");

  return !restaurantData?(
     <Shimmer2/>
  ): (
    console.log("c"),
    (
      <div className="card">
        <h2>{restaurantData?.city}</h2>
        <h3>{restaurantData?.costForTwo}</h3>
        <img
          className="restaurant-img"
          src={IMG_CDN_URL + restaurantData?.cloudinaryImageId}
          alt={restaurantData?.name}
        />
        {/* whenever you will add eventlistner you need to remove /cache */}
      </div>
    )
  );
};

export default ResturantMenu;
