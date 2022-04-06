import React from 'react'
import styles from './styles.module.css'
import Card from '../Card/index'
export default function SearchMovies(){
    const [query,setQuery]=React.useState('');
    const [movies,setMovies]=React.useState([]);
    const [response,setResponse]=React.useState(true);
    function getMovie(e){
        e.preventDefault();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=6690ea3f7711f134017e08086400f699&language=en-US&query=${query}&page=1&include_adult=false`).then(res=> res.json()).then(data=>{
            if(data.results.length){
                setResponse(true);
                setMovies(data.results);
            }
            else{
                setResponse(false);
            }
        });
    }
    function searchType(e){
        const {value}=e.target;
        setQuery(value);
    }
    const movieList=movies.filter(movie=>movie.overview && movie.release_date && movie.poster_path).map(movie => (
        <Card key={movie.id} poster_path={movie.poster_path} title={movie.title} release_date={movie.release_date} vote_average={movie.vote_average} overview={movie.overview}/>
    ))

    const message=(e)=>{
        if(query===''){
            e.target.setCustomValidity('Type a movie name to search');
        }
        else{
            e.target.setCustomValidity('');
        }
        return true;
    };
      return(
      <div>
            <form className={styles.form} onSubmit={getMovie}>
                <label className={styles.label} htmlFor='query'>
                    Movie Name
                    </label>
                    <input className={styles.query} type='text' placeholder='i.e., Sherlock Holmes' name='query' value={query} onChange={searchType} required onInvalid={message} onInput={message}/>
                
                <button className={styles.button}>Search</button>
            </form>
            {response && <div className={styles.card_list}>
                    {movieList}
            </div>}
            {!response && <p className={styles.result}>No Such Movie Found !</p>}
        </div>
        
        )
}