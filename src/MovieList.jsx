import React, { useState } from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies, addMovie }) => {
  const [newMovie, setNewMovie] = useState({
    title: "",
    description: "",
    image: "",
    rating: 0,
  });

  const handleChange = (e) => {
    setNewMovie({ ...newMovie, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addMovie({ ...newMovie, rating: parseFloat(newMovie.rating) });
    setNewMovie({ title: "", description: "", posterURL: "", rating: 0 });
  };

  return (
    <div>
      <div className="text-black bg-slate-500 p-6 rounded-lg shadow-md mb-8 text-center w-[500px]">
        <h2 className="text-xl font-semibold mb-4">Add New Movie</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newMovie.title}
            onChange={handleChange}
            className="w-full p-2 border border-black rounded-lg"
            required
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newMovie.description}
            onChange={handleChange}
            className="w-full p-2 border border-black rounded-lg"
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Poster URL"
            value={newMovie.image}
            onChange={handleChange}
            className="w-full p-2 border border-black rounded-lg"
            required
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating (0 - 5)"
            value={newMovie.rating}
            onChange={handleChange}
            className="w-full p-2 border border-black rounded-lg"
            step="0.1"
            min="0"
            max="5"
            required
          />
          <button
            type="submit"
            className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
          >
            Add Movie
          </button>
        </form>
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-4">Movie List</h2>
        <div className="grid grid-cols-3 gap-6">
          {movies.map((movie, index) => (
            <MovieCard key={index} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
