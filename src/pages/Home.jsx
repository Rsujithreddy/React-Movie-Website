import "../css/Home.css"
import MovieCard from "../components/MovieCard";
import { useState,useEffect} from "react";
import { searchMovies,getPopularMovies } from "../services/api";

function Home(){
    const[searchQuery,setSearchQuery]=useState(" ");
    const [movies,setMovies]=useState([]);
    const[error,setError]=useState(null);
    const[loading,setLoading]=useState(true);

    useEffect(()=>{
        const loadPopularMovies=async()=>{
            try{
                const popularMovies=await getPopularMovies();
                setMovies(popularMovies);
            }catch(err){
                console.log(err);
                setError("Failed to load movies.....")
            }
            finally{
                  setLoading(false)
            }
        }
        loadPopularMovies()
    },[])
 
   const handlesearch=(e)=>{
         e.preventDefault()
    }
    
    return(
       <div className="home">
        <form onSubmit={handlesearch} className="submit-form">
            <input type="text" placeholder="search for movies..." className="search-input" value={searchQuery} onChange={(e)=>setSearchQuery(e.target.value)}/>
            <button type="submit" className="search-button">Search</button>
        </form>
        {loading?(<div className="loading">Loading</div>):
        (<div className="movies-grid">
            {movies.map((movie)=> <MovieCard movie={movie} key={movie.id }/>)}
        </div>)}
       </div>
    )
}
export default Home