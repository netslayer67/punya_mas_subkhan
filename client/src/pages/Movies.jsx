import React from "react";
import Ads from "../component/Ads";
import Cards from "../component/Card";
import listFilm from "../data/films.json";

function Movies() {
  return (
    <div style={{ background: "black" }}>
      <Ads />
      <div style={{ background: "black", padding: "20px" }}>
        <div className="mx-4 gap-5">
          <p className="fs-6 fw-semibold text-white">Movies</p>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {listFilm.map((data, i) => {
              return (
                <Cards
                  id={data.id}
                  title={data.title}
                  year={data.year}
                  url={data.url}
                  poster={data.poster}
                  key={i}
                />
              );
            })}
            {listFilm.map((data, i) => {
              return (
                <Cards
                  id={data.id}
                  title={data.title}
                  year={data.year}
                  url={data.url}
                  poster={data.poster}
                  key={i}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movies;
