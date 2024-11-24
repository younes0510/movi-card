import React from "react";

const Filter = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: name === "rating" ? parseFloat(value) : value });
  };

  return (
    <div className="text-black bg-slate-500 p-6 rounded-lg shadow-md mb-8 text-center w-[500px]">
      <h2 className="text-xl font-semibold mb-4">Filter Movies</h2>
      <div className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Filter by title"
          value={filter.title}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
        <input
          type="number"
          name="rating"
          placeholder="Minimum rating"
          value={filter.rating}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-lg"
          step="0.1"
          min="0"
          max="5"
        />
      </div>
    </div>
  );
};

export default Filter;
