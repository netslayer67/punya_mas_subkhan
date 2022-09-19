import React from "react";
import "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/detail-account.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Profile from "../assets/profile.jpg";
import { CgProfile } from "react-icons/cg";
import { FiMail } from "react-icons/fi";
import { RiVipFill } from "react-icons/ri";
import { TbGenderBigender } from "react-icons/tb";
import { BsFillTelephoneFill } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import Button from "react-bootstrap/Button";

function DetailAccount() {
  return (
    <div
      style={{ background: "black", height: "90.5vh" }}
      className="d-flex align-items-center justify-content-center">
      <div
        style={{
          background: "#1f1f1f",
          padding: "25px",
          borderRadius: "5px",
          width: "40rem",
        }}>
        <Row>
          <Col sm={6} style={{ marginTop: "-5px", paddingRight: "55px" }}>
            <>
              <h4 className="mb-5 text-white">Personal Info</h4>
            </>

            <div className="d-flex mb-3">
              <CgProfile className="CgProfile me-3" />
              <span style={{ marginTop: "-3px" }}>
                <p className="text-white" style={{ fontSize: "14px" }}>
                  Sony Ganteng
                </p>
                <p
                  className="text-muted"
                  style={{ marginTop: "-15px", fontSize: "12px" }}>
                  Full name
                </p>
              </span>
            </div>

            <div className="d-flex mb-3">
              <FiMail className="FiMail me-3" />
              <span style={{ marginTop: "-3px" }}>
                <p className="text-white" style={{ fontSize: "14px" }}>
                  SonGan@mail.com
                </p>
                <p
                  className="text-muted"
                  style={{ marginTop: "-15px", fontSize: "12px" }}>
                  Email
                </p>
              </span>
            </div>

            <div className="d-flex mb-3">
              <RiVipFill className="RiVipFill me-3" />
              <span style={{ marginTop: "-3px" }}>
                <p className="text-white" style={{ fontSize: "14px" }}>
                  Active
                </p>
                <p
                  className="text-muted"
                  style={{ marginTop: "-15px", fontSize: "12px" }}>
                  Status
                </p>
              </span>
            </div>

            <div className="d-flex mb-3">
              <TbGenderBigender className="TbGenderBigender me-3" />
              <span style={{ marginTop: "-3px" }}>
                <p className="text-white" style={{ fontSize: "14px" }}>
                  Male
                </p>
                <p
                  className="text-muted"
                  style={{ marginTop: "-15px", fontSize: "12px" }}>
                  Gender
                </p>
              </span>
            </div>

            <div className="d-flex mb-3">
              <BsFillTelephoneFill className="BsFillTelephoneFill me-3" />
              <span style={{ marginTop: "-3px" }}>
                <p className="text-white" style={{ fontSize: "14px" }}>
                  0811-1513-388
                </p>
                <p
                  className="text-muted"
                  style={{ marginTop: "-15px", fontSize: "12px" }}>
                  Mobile Phone
                </p>
              </span>
            </div>

            <div className="d-flex">
              <SiGooglemaps className="SiGooglemaps me-3" />
              <span style={{ marginTop: "-3px" }}>
                <p className="text-white" style={{ fontSize: "14px" }}>
                  0811-1513-388
                </p>
                <p
                  className="text-muted"
                  style={{ marginTop: "-15px", fontSize: "12px" }}>
                  Mobile Phone
                </p>
              </span>
            </div>
          </Col>
          <Col sm={6} style={{ paddingLeft: "55px" }}>
            <img
              src={Profile}
              alt="Profile"
              style={{
                width: "100%",
                height: "maxHeight",
                borderRadius: "5px",
              }}></img>
            <Button
              className="w-100 mt-3"
              style={{ background: "red", border: "none" }}>
              Change Photo Profile
            </Button>{" "}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default DetailAccount;
