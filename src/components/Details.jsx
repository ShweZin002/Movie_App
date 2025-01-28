import React, { useEffect } from 'react'
import { Card } from "flowbite-react";
import { useNavigate, useParams } from 'react-router';
import { api, api_key } from '../api';
import { useDispatch, useSelector } from 'react-redux';
import { removeSelectedMovie, selectedMovie } from '../redux/action/movie';
import { Spinner } from "flowbite-react";
const Details = () => {
  
  const dispatch=useDispatch();
  const {movieId}=useParams();
  const movieDetail=async ()=>{
    const res=await api.get(`/movie/${movieId}?api_key=${api_key}`)
    dispatch(selectedMovie(res.data))
  }

  useEffect(()=>{
    if(movieId){
      movieDetail();
    }
    return ()=>dispatch(removeSelectedMovie({}))
  },[])

  let movie=useSelector((state)=>state.movies.movie)


  const navigate=useNavigate();
  return (
    <div className='flex flex-col justify-center items-center pb-7'>
      <div className="lg:w-[900px] md:w-[600px] w-[400px] mb-2 mt-2">
        <span className=' float-left ' onClick={()=>{navigate('/')}}><i className="fa-solid fa-arrow-left me-2 drop-shadow-xl"></i><span className='drop-shadow-xl font-bold'>Back</span></span>
      </div>
     {JSON.stringify(movie) =="{}" ?(
      <div className="text-center">
        <h1>
        <Spinner aria-label="Extra large spinner example" size="xl" />
        </h1>
      </div>
     )
     :(
       <div className=" lg:w-[900px] md:w-[600px] w-[400px] shadow-2xl">
       <Card
             className=""
              imgAlt="Meaningful alt text for an image that is not purely decorative"
             imgSrc={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
           >
             <h5 className="text-xl pt-0 font-bold tracking-tight text-gray-900 dark:text-white">
               <p>{movie.title}</p>
             </h5>
             <p className="font-normal text-sm text-gray-700 dark:text-gray-400">
               {movie.overview}
             </p>
             <div className="mt-3">
                 <span className='bg-black text-white p-3 rounded-xl'><i className="fa-solid fa-star me-2"></i>{movie.vote_average}</span>
                 <span className='ms-3 bg-black text-white p-3 rounded-xl'><i className="fa-solid fa-calendar me-2"></i>{movie.release_date}</span>
                 <span className='ms-3 bg-black text-white p-3 rounded-xl'><i className="fa-solid fa-users me-2"></i>{movie.vote_count}</span>
             </div>
           </Card>
       </div>
     )}
    </div>
  )
}

export default Details
