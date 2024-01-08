// StoreListings.js
import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

const StoreListings = () => {
    return (
        <Container>
            <h2 style= {{ fontWeight: "bold", color: "green"}}>Choose your store in San Diego</h2>
            <Row
                style={{
                    borderBottom: "1px solid #E8E9EB",
                    display: "flex",
                    justifyContent: "space-evenly",
                }}
            >
                <Row>
                    <Col xs="auto">
                        <Image src="[IMG SRC]" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>ALDI</h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row>
                    <Col xs="auto">
                        <Image src="[IMG SRC]" roundedCircle />
                    </Col>
                    <Col>
                        <h5 style={{ fontWeight: "bold" }}>
                            Sprouts Farmers Market
                        </h5>
                        <p>Delivery * Pickup</p>
                    </Col>
                </Row>
                <Col sm="1"></Col>
                <Row>
                    <Col xs="auto">
                        <Image src="[IMG SRC]" roundedCircle />
                    </Col>
                    <Col md="6">
                        <h5 style={{ fontWeight: "bold" }}>Kroger</h5>
                        <p>Delivery</p>
                    </Col>
                </Row>
            </Row>
        </Container>
    );
};

export default StoreListings;
