const APIKEY="cfdc262c73e40ff24e063348494697ee"

export const requests={
    fetchtrending:`/trending/all/week?api_key=${APIKEY}`,
    fetchNetflixOriginals:`/discover/movie?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=37`,
    fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentries:`/discover/movie?api_key=${APIKEY}&with_genres=99`,

}