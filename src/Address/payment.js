import React from 'react'
import {Form,Row,Col,Button} from "react-bootstrap";
import Footer from "../Navbar/Footer";
import './Address.css'

export default function payment() {
    return (
        <div>
            <h1> Payment Information</h1>
            <div className="payment-gateway">
            <Row>
                <Col lg={12} md={12} xs={12}>
            <Form.Group controlId="formGridAddress1">
            <p>CARD NAME :</p>
            <Form.Control className="card-name" placeholder="Name Of the Card" />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
            <p>CARD NUMBER :</p>
            <Form.Control className="card-name" placeholder="Number Of the Card" />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
            <p>CVV NUMBER :</p>
            <Form.Control className="card-name" placeholder="CVV" />
            </Form.Group>

            <Form.Group controlId="formGridAddress1">
            <p>Expiry Date :</p>
            <Form.Control className="card-name" placeholder="Expiry Date" />
            </Form.Group>
            <Button variant="primary" size="lg" type="submit">Next</Button>
                </Col>
            </Row>
            </div>
            <Footer/>
        </div>
    )
}
