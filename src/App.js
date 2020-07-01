import React, {useState} from "react";
import './App.css';
import Movie from "./Movie";


export default function App(){
    
  //states- input query, movies
  const [query, setQuery] = useState('');
  //create the state for movies, and update that state appropriate
  const [movies, setMovies] = useState([]);



  const searchMovies = async (e) => {
      e.preventDefault();
              
      const url = `https://api.themoviedb.org/3/search/movie?api_key=5dcf7f28a88be0edc01bbbde06f024ab&language=en-US&query=${query}&page=1&include_adult=false`;
      
      try {
          const res = await fetch(url);
          const data  = await res.json();
          console.log(data.results);
          setMovies(data.results);
      }catch(err){
          console.error(err);
      }
      setQuery('');
  }

  const onClick = (e) => {
    if(query===''){
      e.preventDefault()
      alert('Please type a movie name')
        
    }
  }
  
  return (
    <div className="container">
      <h1 className="title">React Movie Search</h1>

      <form className="form" onSubmit={searchMovies}>
        <input className="input" type="text" name="query"
        placeholder="i.e. Jurassic Park"
        value={query} onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" onClick={onClick} type="submit">Search</button>
      </form>
      <div className="card-list">
        {movies.filter(movie => movie.poster_path).map(movie =>(
          <Movie 
                key={movie.id}
                title={movie.title} 
                overview={movie.overview} 
                popularity={movie.popularity}
                rating={movie.vote_average}
                release={movie.release_date}
                image={movie.poster_path}
          />
        ))}
      </div>

    </div>
  )
}