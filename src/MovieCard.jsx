import React from "react";

const MovieCard = ({ movie }) => {
  const { title, description, image, rating } = movie;

  return (
    <div className="bg-black p-4 rounded-lg shadow-md">
      <img
        src={image}
        alt={title}
        className="w-full h-64 object-cover rounded-lg mb-4"
      />
      <h3 className=" text-red-700 text-2xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-red-600 mb-2">{description}</p>
      <p className="text-sm text-red-600  font-semibold">Rating: {rating} / 5</p>
    </div>
  );
};

export default MovieCard;
