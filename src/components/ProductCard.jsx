import React from "react";
import { addCartIcon } from "../assets/icons";
import { Link } from "react-router-dom";
import { useCart } from "../hooks/useCart";

const ProductCard = ({product}) => {
  const {addToCart} = useCart()
  
  return (
    <div className="flex flex-col items-center ">
      <Link
      to={`/store/${product._id}`}
        // key={product._id}
        className="flex aspect-square items-center justify-center rounded-lg bg-zinc-300 duration-300 ease-in-out hover:scale-105 hover:drop-shadow-2xl"
      >
        <img className="h-full" src={product.images[0]} />     
      </Link>
      <div className="flex w-full items-center justify-between text-zinc-800">
        <button onClick={()=>{addToCart(product)}} className="ease-in h-12 w-12 md:h-8 md:w-8 duration-200 hover:scale-125">
          <img src={addCartIcon} />
        </button>
        <div className="text-right">
          <h3 className="text-lg font-semibold ">{product.name}</h3>
          <p className=" text-xl font-bold">{product.price}€</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
