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
    }
    
    return (
      <div className="container">
        <h1 className="title">React Movie Search</h1>

        <form className="form" onSubmit={searchMovies}>
          <label className="label" htmlFor="query">Movie Name</label>
          <input className="input" type="text" name="query"
          placeholder="i.e. Jurassic Park"
          value={query} onChange={(e) => setQuery(e.target.value)}
          />
          <button className="button" type="submit">Search</button>
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



// import React, {useState, useEffect} from 'react';
// import './App.css';
// import Movie from './Movie';

// function App() {

//   const api_key = "cb4bc4065ce1f33e7515cac87985654f";

//   const [movies, setMovies] = useState([]);
//   const [search, setSearch] = useState('');
//   const [query, setQuery] = useState('');


//   useEffect(() => {
//     getMovies();
//   }, [query]);

//   const getMovies = async () => {
//     const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${query}&page=1&include_adult=false`);
//     const data = await response.json();
//     setMovies(data.results)
//     console.log(data.results);
//   }

//   const updateSearch = e => {
//     setSearch(e.target.value);
//   }

//   const getSearch = e => {
//     e.preventDefault();
//     setQuery(search);
//     setSearch('');
//   }
//   return (
//     <div className="App">
//       <div className="container">
//         <h1 className="title">React Movie Search</h1>
//             <form className="form" onSubmit={getSearch}>
//                 <label htmlFor="query" className="label">Movie name</label>
//                 <input className="input" type="text" name="query" 
//                 placeholder="i.e. Star Wars" onChange={updateSearch} value={search}/>
//                 <button className="button" type="submit">Search</button>
//             </form>
//       </div>
//       <div className="movies">
//         {movies.map(movie =>(
//           <Movie key={movie.title}
//                   title={movie.title} 
//                   overview={movie.overview} 
//                   popularity={movie.popularity}
//                   image={movie.poster_path}
//                   />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default App;