import React from "react";
import { Link } from "react-router-dom";
import styles from "./Movie.module.css";

export interface movieTypes {
  id: number;
  medium_cover_image: string;
  title: string;
  year: number;
  summary: string;
  genres: string[];
}

function Movie({
  id,
  medium_cover_image,
  title,
  year,
  summary,
  genres,
}: movieTypes) {
  return (
    <Link to={`/movie/${id}`} className={styles.link}>
      <div className={styles.movie}>
        <img
          src={medium_cover_image}
          alt={title}
          className={styles.movie__img}
        />
        <div>
          <h2 className={styles.movie__title}>{title}</h2>
          <h3 className={styles.movie__year}>{year}</h3>
          <p>
            {summary.length > 200 ? `${summary.slice(0, 200)}...` : summary}
          </p>
          <ul className={styles.movie__genres}>
            {genres && genres.map((g: string) => <li key={g}>{g}</li>)}
          </ul>
        </div>
      </div>
    </Link>
  );
}

export default Movie;
