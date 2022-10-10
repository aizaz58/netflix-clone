import React from 'react'
import Banner from './Banner'
import "./homeScreen.css"
import NavBar from './NavBar'
import Row from './Row'
import { requests } from "../utils/Requests";
const HomeScreen = () => {
  return (
    <div className=''>
        <NavBar/>
        <Banner/>

        <Row title="NetFlix Original's" isLargeRow={true} fetchURL={requests.fetchNetflixOriginals}/>
        <Row title="Trending Now" fetchURL={requests.fetchtrending}/>
        <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
        <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
        <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchURL={requests.fetchDocumentries}/>
    </div>
  )
}

export default HomeScreen