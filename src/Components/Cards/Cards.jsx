import React from "react";

const Cards = ({ data }) => {
  const { popularity, rating, description, category, image } = data;
  return (
    <div className="card bg-base-100  shadow-xl">
      <figure>
        <img
        className="h-[200px] w-full px-4 mx-3 rounded-xl"
          src={image}
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
