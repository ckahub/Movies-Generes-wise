import React from "react";
import "./styles.css";
import { useState } from "react";

const moviesDB = {
  thriller: [
    { name: "RACE", rating: "4/5" },
    { name: "DON", rating: "5/5" },
    { name: "Parasite", rating: "5/5" }
  ],

  comedy: [
    {
      name: "HERA PHERI",
      rating: "5/5"
    },
    {
      name: "HOUSEFUL",
      rating: "3/5"
    },
    { name: "SINGH IS KING", rating: "4/5" }
  ],
  romance: [
    {
      name: "LOVE AAJKAL",
      rating: "5/5"
    },
    {
      name: "SALAM NAMASTE",
      rating: "4/5"
    }
  ],
  Action: [
    {
      name: "WANTED",
      rating: "5/5"
    },
    {
      name: "KHILADI 420",
      rating: "3/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("romance");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Movies </h1>
      <p style={{ fontSize: "smaller" }}>
        {" "}
        Checkout my favorite movies. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(moviesDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#2b8fd1",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid white",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesDB[selectedGenre].map((movies) => (
            <li
              key={movies.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {movies.name} </div>
              <div style={{ fontSize: "smaller" }}> {movies.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
