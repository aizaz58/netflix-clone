import React, { useState, useEffect } from "react";
import instance from "../utils/baseUrl";
import { requests } from "../utils/Requests";
import { useInView } from 'react-intersection-observer';
import { useStateContext } from "../context/stateProvider";

const Banner = () => {
const {setInView} =useStateContext()
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
    root:null,rootMargin:"-80px"
  });
  const [movie, setmovie] = useState([]);
  const truncate = (str, n) => {
    return str?.length > n ? `${str.substr(0, n - 1)} ...` : str;
  };
  useEffect(() => {
    const fetchMovie = async () => {
      const request = await instance.get(requests.fetchNetflixOriginals);
      setmovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    };
    fetchMovie();
  }, []);
  setInView(inView)

  return (

     <header ref={ref}
      className=" text-white md:h-[448px]  h-[100%] w-[100%] bg-cover bg-center bg-no-repeat  grid   gap-5 grid-rows-3"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
      width:"100%"
       
      }}
    >
      <div className="md:ml-7 flex flex-col gap-4   mt-20 px-6  row-start-1 row-end-3">
        <h1 className=" text-xl md:text-5xl font-extrabold ">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="flex gap-4">
          <button className="cursor-pointer b-none outline-none rounded-md text-xs bg-buttonBg px-6 md:px-8 font-bold py-2 hover:bg-btnHoverBg hover:text-black transition-all duration-500 ease-in-out inline-block text-white">
            Play
          </button>
          <button className="cursor-pointer b-none outline-none rounded-md text-xs font-bold bg-buttonBg py-2 hover:ring-white hover:ring-4  transition-all duration-500 ease-in-out inline-block px-5 md:px-8 text-white">
            My list
          </button>
        </div>
        <h1 className=" hidden md:block w-70 md:w-[45rem] max-w-[360px] h-20 text-sm">
          {truncate(movie?.overview, 150)}
        </h1>
      </div>
      <div className="h-[2rem] self-end row-start-3 row-end-4 md:h-[7.4rem] bg-gradient-to-b from-transparent via-gradientVia to-textColor" />
    </header>

  );
};

export default Banner;
