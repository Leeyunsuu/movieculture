import React from "react";

export interface MovieDetailTypes {
  key: number;
  id: number;
  medium_cover_image: string;
  title: string;
  description_intro: string;
  genres: string[];
}

function MovieDetail({
  key,
  id,
  medium_cover_image,
  title,
  description_intro,
  genres,
}: MovieDetailTypes) {
  return (
    <div>
      <h3>{key}</h3>
      <h3>{id}</h3>
      <img src={medium_cover_image} alt={title} />
      <h3>{title}</h3>
      <h3>{description_intro}</h3>
      <ul>{genres && genres.map((g: string) => <li key={g}>{g}</li>)}</ul>
    </div>
  );
}
export default MovieDetail;
