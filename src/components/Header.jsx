import React, { useRef } from 'react';
import { Navbar} from "flowbite-react";
import { Link } from 'react-router-dom';
import { api, api_key } from '../api';
import { useDispatch } from 'react-redux';
import { fetchMovies } from '../redux/action/movie';
const Header = () => {
  const movieName=useRef('');
  const dispatch=useDispatch()
  const searchMovie=async ()=>{
    if(movieName.current.value !==""){
      const res=await api.get(`/search/movie?query=${movieName.current.value}&api_key=${api_key}`)
      dispatch(fetchMovies(res.data.results))
    }else{
      const res=await api.get(`/movie/now_playing?api_key=${api_key}`);
    dispatch(fetchMovies(res.data.results))
    }
   
  }
  return (
    <div className=''>
      <Navbar fluid >
      <Navbar.Brand >
        <Link to='/'>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Dora Movie Channel</span>
        </Link>
      </Navbar.Brand>
      <div className="flex md:order-2 ">
        <form action="" className=' flex items-center justify-center'>
          <input type="text"  className=' shadow-xl rounded'  placeholder='Search...' ref={movieName}/>
          <button className='bg-slate-300 ms-1 me-3 text-black p-2 px-4 rounded-lg' type='button' onClick={()=>searchMovie()}><i className="fa-solid fa-magnifying-glass"></i></button>
        </form>
      </div>
      
    </Navbar>
    </div>
  )
}

export default Header
