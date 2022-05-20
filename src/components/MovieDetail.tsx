import React from "react";
import styles from "./MovieDetail.module.css";

export interface MovieDetailTypes {
  id: number;
  medium_cover_image: string;
  large_cover_image: string;
  title: string;
  description_intro: string;
  genres: string[];
}

function MovieDetail({
  id,
  medium_cover_image,
  large_cover_image,
  title,
  description_intro,
  genres,
}: MovieDetailTypes) {
  return (
    <div>
      <div className={styles.backgroundPoster}>
        <img src={large_cover_image} alt={title} className={styles.poster} />
      </div>
      <div className={styles.backgroundPoster} />
      <div className={styles.mainContainer}>
        <div className={styles.mainComponent}>hello</div>
        <div className={styles.posterImage}>
          <img src={medium_cover_image} alt={title} className={styles.poster} />
        </div>
      </div>
    </div>
  );
}
export default MovieDetail;
