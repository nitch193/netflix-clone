import React, {useState, useEffect} from 'react'
import axios from "./axios";
import "./Row.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow}) {
    const  [movies,setmovies] = useState([]);
    const [trailerUrl, settrailerUrl] = useState("")

    //  A snippet of code which runs on an specific condition/variable
    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setmovies(request.data.results)
            return request;
        // "https://api.themoviedb.org/3/{fetchNetflixOrignals}",
        }
        fetchData();
    }, [fetchUrl]);
     //if [] is blank run once when row loads and don't run again if we pass any object in [] then it will run everytime when that object changes.
     const opts = {
         height: "390",
         width: "100%",
         playerVars:{
             autoplay :1,
         },
     };
     const handleClick = (movie) =>{
         if(trailerUrl){
             settrailerUrl('');
         } else {
             movieTrailer(movie?.name || "")
             .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search);
                settrailerUrl(urlParams.get('v'));
             }).catch(e => console.log(e))
         }

     }
     return (
        <div className="row">
           <h2>{ title }</h2>
           <div className="row_posters">

               {movies.map(movie =>(
                   <img key = {movie.id} 
                   onClick = {() => handleClick(movie)}
                        className = {`row_poster ${isLargeRow && "row_PosterLarge"}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.title}/>
               ))}
           </div>
           {/* container - Posters */}
               {trailerUrl && <YouTube videoId = {trailerUrl} opts  ={opts} /> }
        </div>
    )
}

export default Row
