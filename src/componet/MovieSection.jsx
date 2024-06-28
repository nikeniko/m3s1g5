import React, { useState, useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
    slidesToSlide: 1, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
    slidesToSlide: 1, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 2,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const MovieSection = ({ movieTitle }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=56f22a68&s=${movieTitle}`
      );
      const data = await response.json();

      const shuffledMovies = shuffleArray(data.Search);

      const first8Movies = shuffledMovies.slice(0, 8);
      setMovies(first8Movies);
    };

    fetchMovies();
  }, [movieTitle]);

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  return (
    <div className="container-fluid px-4 bg_Netflix">
      <h4 className="text-white">{movieTitle}</h4>
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {movies.map((movie) => (
          <div key={movie.imdbID} className="col mb-2 text-center px-1">
            <img className="img-fluid" src={movie.Poster} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default MovieSection;
