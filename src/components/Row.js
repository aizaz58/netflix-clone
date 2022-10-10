import React, { useEffect, useState } from 'react'
import instance from '../utils/baseUrl'
import {motion} from "framer-motion"
const Row = ({title,fetchURL,isLargeRow=false}) => {
  const [movies, setmovies] = useState([])
const baseUrl="https://image.tmdb.org/t/p/original/"
  useEffect(() => {
    const fetchData=async()=>{
      const request=await instance.get(fetchURL)
    
      setmovies(request.data.results)
    }
    fetchData()
  }, [fetchURL])
  console.log(movies)
  return (
    <div className='  text-white ml-5 my-5'>
      <h2 className='mb-3'>{title}</h2>
      <div className='flex items-center'>
<div className='bg-red-500  z-[50] rounded-full w-10 h-5 left-4'></div>
      <div className='  relative flex gap-3 overflow-x-scroll scrollbar-none'>
      
      {movies.map((movie)=>(
         ((isLargeRow&& movie.poster_path) ||(!isLargeRow&& movie.backdrop_path))&& (
          <motion.img whileHover={{scale:1.09}} className={`w-[130px] object-contain ${isLargeRow && "h-30"} h-25`}  key={movie.id} src={`${baseUrl}${isLargeRow?( movie.poster_path):movie.backdrop_path}`} alt={movie.name}/>
        )
        
      ))}
      </div>
      </div>
    </div>
  )
}

export default Row