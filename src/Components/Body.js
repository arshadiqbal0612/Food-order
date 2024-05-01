import { restaurantList } from "./Constants";
import RestaurantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import Profileclass from "./Profileclass";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

// function filterData(searchText, allRestaurants) {
//   const filterData = allRestaurants?.filter((restaurant) =>
//     restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return filterData;
// }

// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  useEffect(() => {
    console.log("then");
    setTimeout(() => {
      // setRestaurants(restaurantList);
      setAllRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    }, 1000);
    // getData();
  }, []);

  console.log("first render then useeffect called");

  //    async function getData(){
  //     const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.693782&lng=77.332074&collection=83631&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
  //     const json=data.json();
  //     //   setAllRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  //    }
  // async function getData() {

  //       const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.693782&lng=77.332074&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //       const json = await response.json();
  //     //   setAllRestaurants(json?.data?.cards[2]?.card?.card)
  //     //    console.log(json.data.cards[2].card.card.facetList.Array);
  //     //    setAllRestaurants(json?.data?.cards[12]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     //    setFilteredRestaurants(json?.data?.cards[12]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  //     // console.log();
  // }
  //  const flag=true;
  //  if(flag){
  //   return <h1>offline🔴🔴</h1>
  //  }
 const status=useOnline();

 if(status==false){
  return <h1>network lost</h1>
 }

  return allRestaurants?.length === 0 ? (
    console.log("a"),
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        ></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, allRestaurants);
            // update the state of restaurants list
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        {/* console.log("xxx"); */}
      </div>
      <div className="restaurant-list">
        {filteredRestaurants?.map((restaurant) => (
          <Link to={"/menu/" + restaurant?.data?.id} key={restaurant?.data?.id}>
            <RestaurantCard {...restaurant?.data} />
          </Link>
        ))}

        {/* RestaurantCard component is wrapped inside the Link component, so when you click on the card, you're essentially clicking on the link.

 */}
      </div>
    </>
  );
};

export default Body;
