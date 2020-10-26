// index.js

import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

ReactDOM.render(
    <>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>, document.getElementById("root"))

// App.js

import React from "react";
import { Redirect, Route, Switch } from "react-router-dom"
import Navbar from "./Navbar";
import Home from "./Home";
import Service from "./Service";
import About from "./About";
import Contact from "./Contact";
import Footer from "./Footer"

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </>
  );
};

export default App;

// Navbar.js

import React from "react";
import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <>
            <div className='container-fluid nav_bg'>
                <div className='row'>
                    <div className='col-10 mx-auto'>
                        <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
                            <NavLink className="navbar-brand" exact activeClassName='menu_active' to="/">Retail system</NavLink>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" exact activeClassName='menu_active' to="/">Home <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact activeClassName='menu_active' to="/about">About</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact activeClassName='menu_active' to="/service">Services</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" exact activeClassName='menu_active' to="/contact">Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;

// Common.js

import React from 'react';
import { NavLink } from 'react-router-dom';


const Common = (props) => {
    return (
        <>
            <section id='header' className="d-flex mt-5 align-items-center">
                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex  justify-content-center flex-column">
                                    <h1>{props.name} <strong className="brand-name"> Retail System </strong></h1>
                                    <h2 className="my-3"> We are giving our best to all of our customers</h2>
                                    <NavLink to={props.visit} className='btn-get-started my-3'> {props.btname} </NavLink>
                                </div>
                                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                                    <img src={props.imgsrc} alt="kiran wakchaure" className="img-fluid-animated" width="70%" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
};

export default Common;

// Home.js

import React from 'react';
import web from '../src/Images/image.jpg'
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Grow Your Business with" imgsrc={web} visit="/service" btname="Get Satrted" />
        </>
    );
};

export default Home;

// About.js

import React from "react";
import { NavLink } from "react-router-dom";
import web from '../src/Images/image.jpg';
import Common from "./Common"

const About = () => {
    return (
        <>
            <h1 className="text-center mt-2"> Welcome</h1>
            <Common name="Welcome to About page" imgsrc={web} visit="/contact" btname="Contact Now" />
        </>
    );
};

export default About;

// Service.js

import React from 'react';
import Cards from "./Cards"
import SData from "./SData"

const Service = () => {
    return (
        <>
            <div className="mt-2">
                <h1 className="text-center"> Our Services </h1>
                <div className='container-fluid mb-5'>
                    <div className='row'>
                        <div className='col-10 mx-auto'>
                            <div className="row gy-2">
                                {SData.map((val, ind) => {
                                    return <Cards key={ind} imgsrc={val.imgsrc} title={val.title} />
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Service;

// Sdata.js

import egg from "../src/Images/0.jpg"
import strawberry from "../src/Images/1.jpg"
import ladyfinger from "../src/Images/2.jpg"
import greenapple from "../src/Images/3.jpg"
import cashow from "../src/Images/4.jpg"
import grannate from "../src/Images/5.jpg"
import oil from "../src/Images/6.jpg"
import supari from "../src/Images/7.jpg"
import straeberryBlack from "../src/Images/8.jpg"
import orange from "../src/Images/9.jpg"

const SData = [
    {
        imgsrc: egg,
        title: "Brown Egg",
    },
    {
        imgsrc: strawberry,
        title: "Strawberry",
    },
    {
        imgsrc: ladyfinger,
        title: "LadyFinger",
    },
    {
        imgsrc: greenapple,
        title: "Green Apple",
    },
    {
        imgsrc: cashow,
        title: "Cashow Nut",
    },
    {
        imgsrc: grannate,
        title: "Pome Grannate",
    },
    {
        imgsrc: oil,
        title: "Olive Oil",
    },
    {
        imgsrc: supari,
        title: "Supari",
    },
    {
        imgsrc: straeberryBlack,
        title: "Black Strawberry",
    },
    {
        imgsrc: orange,
        title: "Orange",
    },
]

export default SData;

// Contact.js

import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  })

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })

  }

  const formSubmit = (event) => {
    event.preventDefault();
    alert(`my full name is ${data.fullname}. my mobile numberis ${data.phone},also my mail Id is ${data.email} and msf to you ${data.msg}
      }`)
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="row">
        <div className="col-md-5 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="fullname"
                placeholder="Enter your name"
                value={data.fullname}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Mobile Number</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="phone"
                placeholder="Enter your Mobile Number"
                value={data.phone}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                placeholder="Enter your Email"
                value={data.email}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Massage</label>
              <textarea
                type="text"
                className="form-control"
                rows="3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="msg"
                value={data.msg}
                onChange={inputEvent}>

              </textarea>
            </div>
            <div className="col-10">
              <button type="submit" className="btn btn-outline-primary mb-3">Submit Form</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;

// Contact.js

import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  })

  const inputEvent = (event) => {
    const { name, value } = event.target;

    setData((preValue) => {
      return {
        ...preValue,
        [name]: value,
      }
    })

  }

  const formSubmit = (event) => {
    event.preventDefault();
    alert(`my full name is ${data.fullname}. my mobile numberis ${data.phone},also my mail Id is ${data.email} and msf to you ${data.msg}
      }`)
  }

  return (
    <>
      <div className="container my-5">
        <h1 className="text-center"> Contact Us </h1>
      </div>
      <div className="row">
        <div className="col-md-5 col-10 mx-auto">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="fullname"
                placeholder="Enter your name"
                value={data.fullname}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Mobile Number</label>
              <input
                type="number"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="phone"
                placeholder="Enter your Mobile Number"
                value={data.phone}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                placeholder="Enter your Email"
                value={data.email}
                onChange={inputEvent}
              />
            </div>
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">Massage</label>
              <textarea
                type="text"
                className="form-control"
                rows="3"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="msg"
                value={data.msg}
                onChange={inputEvent}>

              </textarea>
            </div>
            <div className="col-10">
              <button type="submit" className="btn btn-outline-primary mb-3">Submit Form</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;

// Footer.js

import React from "react";

const newDate = new Date().getFullYear();

const Footer = () => {
    return (
        <>
        <div className = "w-100 text-center bg-light">
            <p> @{newDate} retail system. All Rights reserved | Terms and Condition </p>
        </div>
        </>
    );
};

export default Footer;