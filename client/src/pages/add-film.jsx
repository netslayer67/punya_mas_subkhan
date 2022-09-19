import React from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/add-film.css";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { IoMdAttach } from "react-icons/io";
import { AiOutlinePlus } from "react-icons/ai";
import { BsFillCaretDownFill } from "react-icons/bs";

function AddFilm() {
  return (
    <div style={{ background: "black" }}>
      <Form className="container pt-5">
        <h5 className="text-white fw-bold py-5">Add Film</h5>
        <Row className="mb-3">
          <Col sm={9}>
            <Form.Control
              placeholder="title"
              style={{ background: "#343434" }}
            />
          </Col>
          <Col sm={3}>
            <>
              <label
                htmlFor="thumbnail"
                className="px-3 py-1 attachFile"
                style={{ background: "#343434", border: "1px solid white" }}>
                Attach Thumbnail
                <IoMdAttach
                  className="ms-2"
                  style={{ color: "red", fontSize: "22px" }}
                />
              </label>
              <input id="thumbnail" type="file" hidden></input>
            </>
          </Col>
        </Row>

        <Form.Control
          placeholder="Year"
          style={{ background: "#343434" }}
          className="mb-3"
        />

        <Dropdown className="mb-3">
          <Dropdown.Toggle
            id="dropdown-basic"
            className="d-flex justify-content-between text-muted">
            Category
            <BsFillCaretDownFill
              className="pt-1 fs-3"
              style={{ background: "transparent" }}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu style={{ width: "100%", textAlign: "center" }}>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Drama</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Commedy</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Romance</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Fight</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Form.Control
          as="textarea"
          placeholder="Leave a comment here"
          style={{
            height: "100px",
            background: "#343434",
            resize: "none",
            marginBottom: "55px",
          }}
        />

        <Row className="mb-3">
          <Col sm={9}>
            <Form.Control
              placeholder="title Episode"
              style={{ background: "#343434" }}
            />
          </Col>
          <Col sm={3}>
            <>
              <label
                htmlFor="thumbnail"
                className="px-3 py-1 attachFile"
                style={{ background: "#343434", border: "1px solid white" }}>
                Attach Thumbnail
                <IoMdAttach
                  className="ms-2"
                  style={{ color: "red", fontSize: "22px" }}
                />
              </label>
              <input id="thumbnail" type="file" hidden></input>
            </>
          </Col>
        </Row>

        <Form.Control
          placeholder="Link Film "
          style={{ background: "#343434" }}
          className="mb-3"
        />

        <>
          <Button
            type="submit"
            className="w-100 mt-2 mb-4"
            style={{ background: "#343434", border: "1px solid white" }}>
            <AiOutlinePlus style={{ color: "brown" }} />
          </Button>
        </>

        <div className="d-flex justify-content-end">
          <Button
            type="submit"
            className="py-1 px-5"
            style={{
              // border: "none",
              background: "red",
              border: "1px solid red",
            }}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default AddFilm;
