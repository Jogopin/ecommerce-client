import React from "react";
import Star from "./Star";
import generateStarsArray from "../utils/generateStarsArray";



const RatingDisplay = ({rating=  0}) => {

  
  const starArr = generateStarsArray(rating)

  return (
    <div className="flex gap-0.5">
      {starArr.map((starValue, i) => (
        <Star key={i} starValue={starValue}/>
      ))}
      <span className="ml-2 font-semibold">{rating ? rating : "0 Reviews"}</span>
    </div>
  );
};

export default RatingDisplay;
