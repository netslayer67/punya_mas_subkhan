import React from "react";
import { Container } from "react-bootstrap";
import { useParams } from "react-router-dom";
import DetailsDescription from "../component/DetailsDescription";
import film from "../data/films.json";

function Details() {
  const params = useParams();
  let number = params.id;
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "500px", backgroundColor: "#1F1F1F" }}>
        <iframe
          width="848"
          height="480"
          src={film[number - 1].url}
          title="The Witcher"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
      </div>
      <Container className="d-flex justify-content-center">
        <DetailsDescription
          title={film[number - 1].title}
          year={film[number - 1].year}
          poster={film[number - 1].poster}
        />
      </Container>
    </div>
  );
}

export default Details;
