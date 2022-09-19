import React from "react";
import Ads from "../component/Ads";
import Cards from "../component/Card";
import listFilm from "../data/films.json";

function Series() {
  return (
    <div style={{ background: "black" }}>
      <Ads />
      <div style={{ background: "black", padding: "20px" }}>
        <div className="mx-4 gap-5">
          <p className="fs-6 fw-semibold text-white">TV Series</p>
          <div className="d-flex flex-wrap justify-content-center gap-4">
            {listFilm.map((data) => {
              return (
                <Cards
                  id={data.id}
                  title={data.title}
                  year={data.year}
                  url={data.url}
                  poster={data.poster}
                />
              );
            })}
            {listFilm.map((data) => {
              return (
                <Cards
                  id={data.id}
                  title={data.title}
                  year={data.year}
                  url={data.url}
                  poster={data.poster}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Series;
