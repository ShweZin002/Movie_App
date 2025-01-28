/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import Movies from './Movies'
import { api, api_key } from '../api'
import { useDispatch } from 'react-redux'
import {fetchMovies} from '../redux/action/movie';
const Home = () => {

  const dispatch=useDispatch();

  const getApiData=async ()=>{
    const res=await api.get(`/movie/now_playing?api_key=${api_key}`);
    dispatch(fetchMovies(res.data.results))
  }
  useEffect(()=>{
    getApiData()
  },[])
  return (
    <div className='px-4 py-6'>
      <Movies/>
    </div>
  )
}

export default Home
