import React from 'react';
import style from './movie.module.css'


const Movie = (props) => {
    return(
        <div className={style.card}>
            <img src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.image}`} 
            alt={props.title + 'poster'} className={style.cardImage}/>
            <div className={style.cardInfo}>
                <h2 className={style.cardTitle}>{props.title}</h2>
                <p className={style.cardDesc}>{props.overview}</p>
                <p className={style.cardPopularity}>Popularity: {props.popularity}</p>
                <p className={style.cardRelease}>Release date: {props.release}</p>
                <p className={style.cardRating}>Rating: {props.rating}</p>
            </div>
        </div>
    )
}

export default Movie;

