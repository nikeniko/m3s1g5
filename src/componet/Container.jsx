import React from "react";
import Header from "./Header";
import MovieSection from "./MovieSection";

import Footer from "./Footer";

const Container = () => {
  return (
    <div className="bg_Netflix">
      <Header />
      <MovieSection movieTitle="Transformers" />
      <MovieSection movieTitle="Spider man" />
      <MovieSection movieTitle="Star wars" />
      <Footer />
    </div>
  );
};

export default Container;
