import React from "react";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";

const Movies = () => {  
  let moviess=[];
  moviess=useSelector((state)=>state.movies.movies);
  
  return (
    <div className="container mx-auto mt-6">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-2">
       {
        moviess.length>0 ?moviess.map(movie=><MovieCard movie={movie} key={movie.id}/>): <h1>There is no movie</h1>
       }
      </div>
    </div>
  );
};

export default Movies;
