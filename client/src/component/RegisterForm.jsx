/* eslint-disable */
import React, { useState, useContext } from "react";
import { Modal, Button, Form, CloseButton, Alert } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { useMutation } from "react-query";
import { API } from "../config/api";
import {UserContext} from '../context/userContext'
function RegisterForm({ register, closeRegister, openLogin }) {
  const gotoLogin = () => {
    closeRegister();
    openLogin();
  };

  const api = API();

  const [state, dispatch] = useContext(UserContext);

  const [form, setForm] = useState({
    fullname: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    address: "",
  });
  const { fullname, email, password, gender, phone, address } = form;

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      // Configuration Content-type
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      // Data body
      const body = JSON.stringify(form);

      // Insert data user to database
      const response = await API.post("/register", body, config);

       // if (response.data.data.code == 200) {
      //   // Send data to useContext
      //   dispatch({
      //     type: " SUCCESS",
      //     payload: response.data.data,
      //   });
      //   // Status check
      //   if (response.data.data.status === "user") {
      //     Navigate("/")
      //   }

      //   const alert = (
      //     <Alert variant="success" className="py-1">
      //       Register success
      //     </Alert>
      //   );
      //   setMessage(alert);
      // } else {
      //   const alert = (
      //     <Alert variant="danger" className="py-1">
      //       Register failed
      //     </Alert>
      //   );
      //   console.log("else")

      //   setMessage(alert);
      // }
      
      // Handling response here
    } catch (error) {
      const alert = (
        <Alert variant="danger" className="py-1">
          Failed
        </Alert>
      );
      setMessage(alert);
      console.log(error);
    }
  });

  return (
    <Modal
      show={register}
      onHide={closeRegister}
      animation={true}
      centered
      size="sm"
    >
      <div className="text-white rounded" style={{ background: "#141414" }}>
        <Modal.Header className="border-0" style={{ marginBottom: "-10px" }}>
          <Modal.Title className="fs-5 fw-semibold">Register</Modal.Title>
          <CloseButton variant="white" onClick={closeRegister} />
        </Modal.Header>
        <Modal.Body className="mx-2">
          <form onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                className="bg-dark text-white"
                value={email}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                className="bg-dark text-white"
                value={password}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Fullname"
                className="bg-dark text-white"
                value={fullname}
                onchange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Gender"
                className="bg-dark text-white"
                value={gender}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="tel"
                placeholder="Phone"
                className="bg-dark text-white"
                value={phone}
                onChange={handleChange}

              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="text"
                placeholder="Address"
                className="bg-dark text-white"
                value={address}
                onChange={handleChange}
              />
            </Form.Group>
          </form>
        </Modal.Body>
        <Modal.Footer
          className="flex justify-content-center border-0"
          style={{ marginTop: "-25px" }}
        >
          <Button
            size="md"
            className="px-4 py-2 fw-bold bg-white text-danger"
            style={{ width: "250px" }}
            type="submit"
          >
            Register
          </Button>
          <p style={{ fontSize: "12px" }} className="text-muted">
            Don't have an account ? Klik{" "}
            <a
              onClick={gotoLogin}
              style={{
                textDecoration: "none",
                color: "gray",
                cursor: "pointer",
              }}
              className="fw-semibold"
            >
              Here
            </a>
          </p>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default RegisterForm;
