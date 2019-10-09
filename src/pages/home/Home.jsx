import React from "react";
import Category from "../../components/category";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Games from "../../components/games";

export default () => (
    <>
        <Container fluid>
            <Row>
                <Col md={2}>
                    <Category />
                </Col>
                <Col md={10}>
                    <Games />
                </Col>
            </Row>
        </Container>
    </>
);
