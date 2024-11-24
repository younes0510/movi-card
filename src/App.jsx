import React, { useState } from "react";
import MovieList from "./MovieList";
import Filter from "./Filter";

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "la casa de papel",
      description: "braquage",
      image: "https://static.fnac-static.com/multimedia/Images/FD/Comete/147721/CCP_IMG_ORIGINAL/1947893.jpg",
      rating: 4.2,
    },
    {
      title: "OBX",
      description: "aventure",
      image: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQauO7GPL0Q90st13nc-UFEm-vrhGtpOSej0bKXQrJv-u7xffQFp6ZMpCu9Km9zyHtF96c4-jWXe8lSFVJCAxPcwrbp4rQRVDIkdaw4mrnDJdwQZ2KpD_IqxaG2On1AjmIPZZLbYPchqL1yBRMoKT6-LUYoc.jpg?r=083",
      rating: 4.5,
    },
    {
      title: "vikings",
      description: "la guerre",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJm16tx_lrnFz6O8WSk99K-0dQAx08WS5IRiaPLypdvYDaJaKupcdhiankTmIPiERXX8Y&usqp=CAU",
      rating: 3.9,
    },
    {
      title: "game of thrones",
      description: "la guerre",
      image: "https://cap.img.pmdstatic.net/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fcap.2F2017.2F05.2F10.2F6b7b11a5-b337-4ba6-a65b-71697e7f5d92.2Ejpeg/1200x630/cr/wqkgVG91cyBkcm9pdHMgcsOpc2VydsOpcyAvIENBUElUQUw%3D/game-of-thrones-ce-que-cette-serie-culte-nous-apprend-sur-le-pouvoir-en-entreprise-960913.jpg",
      rating: 4.6,
    },
  ]);

  const [filter, setFilter] = useState({ title: "", rating: 0 });

  const addMovie = (movie) => {
    setMovies([...movies, movie]);
  };

  const filteredMovies = movies.filter(
    (movie) =>
      movie.title.toLowerCase().includes(filter.title.toLowerCase()) &&
      movie.rating >= filter.rating
  );

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <h1 className="text-3xl font-bold text-center text-black mb-10">
      Movie App
      </h1>
      <div className=" mx-auto px-4  ">
        <Filter filter={filter} setFilter={setFilter} />
        <MovieList movies={filteredMovies} addMovie={addMovie} />
      </div>
    </div>
  );
};

export default App;
