import House1 from "../../assets/House1.jpg";
import House2 from "../../assets/House2.jpg";
import House3 from "../../assets/House3.jpg";
import House4 from "../../assets/House4.jpg";
import House5 from "../../assets/House5.jpg";
import House6 from "../../assets/House6.jpg";
import House7 from "../../assets/House7.jpg";
import House8 from "../../assets/House8.jpg";
import House9 from "../../assets/House9.jpg";
import Card from "./Card";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export default function HouseCard() {
  const [cardData] = useState([
    {
      id:uuidv4(),
      title: "Modern Loft Downtown",
      description: "₹1,200 / night",
      image: House1,
    },
    {
      id:uuidv4(),
      title: "Luxury Beach Villa",
      description: "₹1,500 / night",
      image: House2,
    },
    {
      id:uuidv4(),
      title: "Cozy Mountain Cabin",
      description: "₹1,800 / night",
      image: House3,
    },
    {
      id:uuidv4(),
      title: "Elegant City Apartment",
      description: "₹2,000 / night",
      image: House4,
    },
    {
      id:uuidv4(),
      title: "Lakeview Cottage",
      description: "₹2,200 / night",
      image: House5,
    },
    {
      id:uuidv4(),
      title: "Premium Penthouse",
      description: "₹2,500 / night",
      image: House6,
    },
    {
      id:uuidv4(),
      title: "Heritage Haveli",
      description: "₹2,800 / night",
      image: House7,
    },
    {
      id:uuidv4(),
      title: "Riverside Retreat",
      description: "₹3,000 / night",
      image: House8,
    },
    {
     
     id:uuidv4(),
      title: "Garden View Bungalow",
      description: "₹3,500 / night",
      image: House9,
    },
  ]);
  return (
    <div className="flex justify-between w-screen h-auto flex-wrap gap-2 pl-15 pr-15">
      {cardData.map((item) => (
        <Card
          key={item.id}
          id={item.id}
          title={item.title}
          description={item.description}
          Photo={item.image}
        />
      ))}
    </div>
  );
}
