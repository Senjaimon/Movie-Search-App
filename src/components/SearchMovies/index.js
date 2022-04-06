import React from 'react'
import styles from './styles.module.css'
import Card from '../Card/index'
export default function SearchMovies(){
    const [query,setQuery]=React.useState('');
    const [movies,setMovies]=React.useState([]);
    function getMovie(e){
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=6690ea3f7711f134017e08086400f699&language=en-US&query=${query}&page=1&include_adult=false`).then(res=>res.json()).then(data=>setMovies(data.results));
    }
    function searchType(e){
        const {value}=e.target;
        setQuery(value);
    }
    const movieList=movies.filter(movie=>movie.overview && movie.release_date && movie.poster_path).map(movie => (
        <Card key={movie.id} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} vote_average={movie.vote_average} overview={movie.overview}/>
    ))
      return(
        <div>
            <form className={styles.form} onSubmit={getMovie}>
                <label className={styles.label} htmlFor='query'>
                    Movie Name
                    </label>
                    <input className={styles.query} type='text' placeholder='i.e., Sherlock Holmes' name='query' value={query} onChange={searchType}/>
                
                <button className={styles.button}>Search</button>
            </form>
            <div className={styles.card_list}>
                    {movieList}
            </div>
        </div>)
}