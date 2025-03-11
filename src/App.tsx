import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Movie from "./Components/Movie";
import MovieDetail from "./Components/MovieDetail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Movie />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
