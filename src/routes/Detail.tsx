import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import MovieDetail, { MovieDetailTypes } from "../components/MovieDetail";

function Detail() {
  const { id } = useParams();

  const [movie, setMovie] = useState<MovieDetailTypes>({
    id: 0,
    medium_cover_image: "",
    large_cover_image: "",
    title: "",
    description_intro: "",
    genres: [],
  });

  const getmovieInfo = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json.data.movie.large_cover_image);
    setMovie(json.data.movie);
  };

  useEffect(() => {
    getmovieInfo();
  }, []);

  console.log(movie);

  return (
    <div>
      <MovieDetail
        key={movie.id}
        id={movie.id}
        medium_cover_image={movie.medium_cover_image}
        large_cover_image={movie.large_cover_image}
        title={movie.title}
        description_intro={movie.description_intro}
        genres={movie.genres}
      />
    </div>
  );
}

export default Detail;
