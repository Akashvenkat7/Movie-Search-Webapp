import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="movie/:id" element={<MovieDetails />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);