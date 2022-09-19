import React from "react";
import Ads from "../component/Ads";
import Cards from "../component/Card";
import { BsFillArrowRightCircleFill as Arrow } from "react-icons/bs";
import { Link } from "react-router-dom";
import listFilm from "../data/films.json";

function Homepages() {
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
            <Link
              to="/series"
              className="text-decoration-none d-flex flex-column h-full justify-content-center gap-2">
              <div className="text-white">
                <Arrow />
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>See More</p>
              </div>
            </Link>
          </div>
          <p className="fs-6 fw-semibold text-white mt-5">Movies</p>
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
            <Link
              to="/movies"
              className="text-decoration-none d-flex flex-column h-full justify-content-center gap-2">
              <div className="text-white">
                <Arrow />
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>See More</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Homepages;
