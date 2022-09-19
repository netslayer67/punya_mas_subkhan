import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cards from "../component/Card";
import listFilm from "../data/films.json";

function Listfilms() {
  return (
    <div style={{ background: "black" }}>
      <div className="px-5 py-5">
        <div className="mx-4 gap-5">
          <div className="d-flex flex row-cols-2 mb-3">
            <p className="fs-6 fw-semibold text-white">List Film</p>
            <Link
              to="/add-film"
              className="d-flex justify-content-end text-decoration-none">
              <Button variant="danger" size="sm" className="px-4 py-1 fw-bold">
                Add Film
              </Button>
            </Link>
          </div>
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

export default Listfilms;
