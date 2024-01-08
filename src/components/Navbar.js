// Navbar.js
import React from "react";
import '../index.css'
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

const CustomNavbar = () => {
    return (
        <>
            <Navbar bg="light" expand="lg">
                {/* Toggle bar on the left */}
                <Navbar.Toggle aria-controls="basic-navbar-nav" />

                {/* Instacart Logo */}
                <Navbar.Brand href="#">
                    <img
                        src="https://1000logos.net/wp-content/uploads/2023/04/Instacart-Logo.jpg"
                        alt="Instacart Logo"
                        height="100"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>

                <form class="d-flex" role="search">
                    <input style={{width: '20em', position:'relative', top: '.25px', left: '.10px'   }}   
                        class="form-control"
                        type="search"
                        placeholder="Search for products and stores"
                        aria-label="Search"
                    />
                    <button class="btn btn-outline-success" type="submit">
                        Search
                    </button>
                </form>

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* Navigation Links */}
                    <Nav className="ml-auto">
                            <Nav.Link href="departments">Departments</Nav.Link>
                            <Nav.Link href="shop">More ways to shop</Nav.Link>
                            <Nav.Link href="help">Help</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

                <button type="button" class="btn btn-link" style={{fontSize:'20px', textDecoration: 'none', color:'black' }}>
                    Log in
                </button>
                <button type="button" class="btn btn-success" style={{marginRight:'20px'}}>
                    Sign up
                </button>
            </Navbar>

            <div class="card text-bg-light">
                <img
                    src="https://www.shutterstock.com/image-photo/banner-healthy-nutritious-vegetables-fruits-600nw-2067910313.jpg"
                    class="card-img"
                    alt="..."
                />
                <div class="card-img-overlay">
                    <h1 class="card-title">Order groceries for</h1>
                    <h1>delivery or pickup today</h1>
                    <p class="card-text">
                        Whatever you want from stores, brought right to your
                        door.{" "}
                    </p>
                </div>
            </div>
        </>
    );
};

export default CustomNavbar;
