import React from "react";
import { Modal, Button, Form, CloseButton } from "react-bootstrap";

function LoginForm({ login, closeLogin, openRegister, setValidlogin }) {
  //handle to registe
  const gotoRegister = () => {
    closeLogin();
    openRegister();
  };

  //handle conditional login
  const validLogin = () => {
    setValidlogin(true);
  };

  return (
    <Modal show={login} onHide={closeLogin} animation={true} centered size="sm">
      <div className="text-white rounded" style={{ background: "#141414" }}>
        <Modal.Header className="border-0" style={{ marginBottom: "-10px" }}>
          <Modal.Title className="fs-5 fw-semibold">Login</Modal.Title>
          <CloseButton variant="white" onClick={closeLogin} />
        </Modal.Header>
        <Modal.Body className="mx-2">
          <Form>
            <Form.Group className="mb-3">
              <Form.Control
                type="email"
                placeholder="Email"
                className="bg-dark text-white"
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control
                type="password"
                placeholder="Password"
                className="bg-dark text-white"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer
          className="flex justify-content-center border-0"
          style={{ marginTop: "-25px" }}>
          <Button
            className="fw-bold"
            style={{ width: "250px" }}
            variant="danger"
            onClick={validLogin}>
            Login
          </Button>
          <p style={{ fontSize: "12px" }} className="text-muted">
            Already have an account ? Klik{" "}
            <a
              onClick={gotoRegister}
              style={{
                textDecoration: "none",
                color: "gray",
                cursor: "pointer",
              }}
              className="fw-semibold">
              Here
            </a>
          </p>
        </Modal.Footer>
      </div>
    </Modal>
  );
}

export default LoginForm;
