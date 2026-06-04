import Card from "./Card";
import { useEffect, useState } from "react";
import { getAllHouses } from "../../Service/HouseListing";

export default function HouseCard() {
  const [houses, setHouses] = useState([]);
   useEffect(() => {
    async function fetchHouses() {
      try {
        const response = await getAllHouses();
        setHouses(response.data.data);

      } catch (error) {
        console.log(error);
      }
    }
    fetchHouses();
  }, []);
  console.log(houses);

  return (
    <div className="flex justify-between w-screen h-auto flex-wrap gap-2 pl-15 pr-15">
      {houses.map((item) => (
        <Card
  key={item._id}
  id={item._id}
  title={item.Title}
  description={item.description}
  Photo={item.Image}
  price={item.Price}
  location={item.location}
/>
      ))}
    </div>
  );
}
