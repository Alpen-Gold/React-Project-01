import React from "react";

import "./App.css";
// ==============================

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logoImg from "./img/UI.desk (1).png";
import headerImage from "./img/header Image (2).png";
import freshImg from "./img/Group 4114.png";
import shefImg from "./img/Image & bg elements.png";
import specialImgCard from "./img/image (10).png";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function App() {
  return (
    <div>
      <div className="container-fluid">
        <Navbar expand="lg" className="bg-body-tertiary">
          <Navbar.Brand>
            <img src={logoImg} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className=" w-100 d-flex justify-content-center">
              <Nav className="">
                <Nav.Link className="menu_link">Home</Nav.Link>
                <Nav.Link className="menu_link">About</Nav.Link>
                <Nav.Link className="menu_link">Contact</Nav.Link>

                <Nav.Link className="menu_link">Testimonials</Nav.Link>
              </Nav>
            </div>

            <div className="d-flex align-items-center gap-3 bg-search">
              <AiOutlineSearch className="fs-4"></AiOutlineSearch>
              <AiOutlineShoppingCart className="fs-4"></AiOutlineShoppingCart>
              <button id="btn">Order Now</button>
            </div>
          </Navbar.Collapse>
        </Navbar>
      </div>

      <div className="container">
        <Row className="cards d-flex align-items-center justify-content-center">
          <Col
            lg={6}
            className="text-center text-lg-start mt-lg-0 mt-5"
            id="card-header-text"
          >
            <h1 className="display-3  m-0 p-0">
              Just{" "}
              <span className="green">
                Eat healthy <br />{" "}
              </span>{" "}
              food to live a healthier life
            </h1>
            <p className="fs-5 w-lg-75 text-secondary my-4">
              Enjoy a healthy life by eating healthy foods that have
              extraordinary flavors that make your life healthier for today and
              in the future
            </p>
            <div>
              <button className="" id="btn">
                Order Now
              </button>
            </div>
          </Col>

          <Col lg={6} className="d-none d-lg-inline" id="card-header-img">
            <img src={headerImage} alt="" className="w-100" />
          </Col>
        </Row>
        <Row className="cards d-flex align-items-center justify-content-center  mt-5 pt-5">
          <Col lg={6} className="" id="card-header-img">
            <img src={freshImg} alt="" className="w-100" />
          </Col>

          <Col
            lg={6}
            className="my-lg-0 my-5 py-lg-0 py-3 text-center text-lg-start"
            id="card-header-text"
          >
            <h1 className="display-5  m-0 p-0">Fresh Vegetables Every Day</h1>
            <p className="fs-5 w-lg-75 text-secondary my-4">
              Healthy life as informed declared we enjoy the margaret. Joy
              horrible moreover man feelings own shy. Request norland neither
              mistake for yet. Between the for morning assured country believe.
            </p>
            <div>
              <button className="" id="btn">
                Learn More
              </button>
            </div>
          </Col>
        </Row>
        <Row className="cards d-flex align-items-center justify-content-center flex-column-reverse flex-lg-row mt-5 ">
          <Col
            lg={6}
            className="my-lg-0 my-5 py-lg-0 py-3 text-center text-lg-start"
            id="card-header-text"
          >
            <h1 className="display-5  m-0 p-0">Cooked by the Best Chefs</h1>
            <p className="fs-5 w-lg-75 text-secondary my-4">
              Believing neglected so so allowance existence departure in. In
              design active temper be uneasy. Thirty for remove plenty regard
              you summer though. He preference connection astonished on of ye.{" "}
            </p>
            <div className="justify-content-lg-start justify-content-center  d-flex align-items-center gap-3">
              <input type="checkbox" className="inputChecbox" />

              <p className="p-0 m-0 fs-5 my-2 text-secondary">
                A guaranteed delicious meal
              </p>
            </div>

            <div className="justify-content-lg-start justify-content-center  d-flex align-items-center gap-3">
              <input type="checkbox" className="inputChecbox" />

              <p className="p-0 m-0 fs-5 my-2 text-secondary">
                A guaranteed delicious meal
              </p>
            </div>

            <div className="justify-content-lg-start justify-content-center  d-flex align-items-center gap-3">
              <input type="checkbox" className="inputChecbox" />

              <p className="p-0 m-0 fs-5 my-2 text-secondary">
                A guaranteed delicious meal
              </p>
            </div>
          </Col>

          <Col lg={6} className="" id="card-header-img">
            <img src={shefImg} alt="" className="w-100" />
          </Col>
        </Row>
        {/* ======================== */}
        <div>
          <div className="text-center w-100 my-5">
            <h1>Special Dishes for you</h1>
            <p className="fs-5 text-secondary ">
              Made with premium & 100% Organic ingredients
            </p>
          </div>

          <div className="cards mt-3 mb-5 d-flex align-items-center justify-content-center gap-3 flex-wrap">
            <div className=" text-center p-3">
              <div className=" p-3" id="cardSpecial">
                <div>
                  <img src={specialImgCard} alt="" />
                </div>

                <h4 className="my-4">Beef Salad</h4>

                <p>
                  A salad combined witha delicious cut of bacon and mixed with
                  tasty and fresh sesome oil.
                </p>
              </div>
            </div>
            <div className=" text-center p-3">
              <div className=" p-3" id="cardSpecial">
                <div>
                  <img src={specialImgCard} alt="" />
                </div>

                <h4 className="my-4">Nut Salad</h4>

                <p>
                  A salad combined witha delicious cut of bacon and mixed with
                  tasty and fresh sesome oil.
                </p>
              </div>
            </div>
            <div className=" text-center p-3">
              <div className=" p-3" id="cardSpecial">
                <div>
                  <img src={specialImgCard} alt="" />
                </div>

                <h4 className="my-4">Beef Salad</h4>

                <p>
                  A salad combined witha delicious cut of bacon and mixed with
                  tasty and fresh sesome oil.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mb-5 pb-5">
            <button id="btn" className="">
              View All
            </button>
          </div>
        </div>
        <div className="d-flex align-items-center justfy-content-center flex-column my-5">
          <h4>Subscribe to the Newsletter</h4>
          <p className="fs-5 text-secondary text-center">
            Enter your email below to get our daily offers and news
          </p>

          <div className=" d-flex align-items-center gap-4 my-4 pb-5">
            <input
              type="text"
              placeholder="Enter your email."
              id="emailInput"
            />

            <button id="btn">Get Started</button>
          </div>
        </div>
        <footer>
          <Row className="cards  my-5 pt-5">
            <Col md={3} sm={12}>
              <ul>
                <li className="fw-bold">UI.desk</li>
                <li className="w-75">
                  On formed merits hunted unable merely by mr whence or.{" "}
                </li>
              </ul>
            </Col>

            <Col md={2} sm={3} xs={6} className="my-3">
              <ul>
                <li className="fw-bold">Home</li>
                <li className="text-secondary fs-6">Company</li>
                <li className="text-secondary fs-6">News</li>
                <li className="text-secondary fs-6">Team</li>
              </ul>
            </Col>

            <Col md={2} sm={3} xs={6} className="my-3">
              <ul>
                <li className="fw-bold">Home</li>
                <li className="text-secondary fs-6">Company</li>
                <li className="text-secondary fs-6">News</li>
                <li className="text-secondary fs-6">Team</li>
              </ul>
            </Col>

            <Col md={2} sm={3} xs={6} className="my-3">
              <ul>
                <li className="fw-bold">Home</li>
                <li className="text-secondary fs-6">Company</li>
                <li className="text-secondary fs-6">News</li>
                <li className="text-secondary fs-6">Team</li>
              </ul>
            </Col>

            <Col md={2} sm={3} xs={6} className="my-3">
              <ul>
                <li className="fw-bold">Home</li>
                <li className="text-secondary fs-6">Company</li>
                <li className="text-secondary fs-6">News</li>
                <li className="text-secondary fs-6">Team</li>
              </ul>
            </Col>
          </Row>
        </footer>
      </div>

      <footer className="w-100 footer-end text-center text-white">
        © Copyright 2020 by ui.desk. All right reserved.
      </footer>
    </div>
  );
}

export default App;
