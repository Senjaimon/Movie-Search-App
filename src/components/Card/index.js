import React from 'react'
import styles from './styles.module.css'
export default function Card(props){
    return(
        <div className={styles.card}>
        <img className={styles.card_image}
            src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${props.poster_path}`}
            alt={props.title + ' poster'}
            />
            <div className={styles.card_content}>
                    <h3 className={styles.card_title}>{props.title}</h3>
                    <p><small>RELEASE DATE: {props.release_date}</small></p>
                    <p><small>RATING: {props.vote_average}</small></p>
                    <p className={styles.card_desc}>{props.overview}</p> 
            </div>
    </div>)
}