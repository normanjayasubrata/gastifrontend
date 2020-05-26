import React from 'react'
import {
  cubic3,
  liukan2,
  zigzag,
  lontong,
  triangle2,
} from "../../assets/images";
import { Container, Col, Row, Button } from "react-bootstrap";

const TenantPage = (props) => {
  const { isNotMobile } = props.windowSize;

  const divStyleFull = {
    backgroundImage: `url(${lontong}), url(${triangle2}), url(${zigzag}), url(${liukan2}), url(${cubic3})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "35.6rem 18.5rem, -8rem 0rem, 48rem 45rem, 70rem 13rem, 73.5rem 39.5rem",
    backgroundSize: "13%, 15%, 11%, 13%, 11%",

  }

  const divStyleMobile = {
    marginBottom: "4rem"
  }
  return (
    <div style={isNotMobile ? divStyleFull : divStyleMobile}>
      <Container>
        <Col style={{ paddingTop: "25%" }}>
          <Row>
            <h1 style={{ fontSize: "3.625rem", fontWeight: "bold" }}>Lorem ipsum dolor sit amet</h1>
          </Row>
          <Row style={{ marginTop: "4rem" }}>
            <Button style={{ fontSize: "1rem", backgroundColor: "#00C9A7", border: "none", width: "11.938rem", height: "3.125rem" }}>Lihat Selengkapnya</Button>
          </Row>
        </Col>
      </Container>
    </div>
  )
}

export default TenantPage;