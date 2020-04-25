import React from "react";
import {
  Button,
  InputGroup,
  FormControl,
  Container,
  Col,
  Row,
} from "react-bootstrap";

import { petaIndo } from "../../assets/images";

const Search = props => {
    
    const {windowHeight, isNotMobile} = props.windowSize;
    const desktopStyle = {
      backgroundImage: `url(${petaIndo})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: isNotMobile ? "center 40%": "center 60%",
      backgroundSize: "100%",
      textAlign: "center",
      paddingLeft: "12rem",
      paddingRight: "12rem",
      height: `${windowHeight}px`,
    }

    const mobileStyle = {
        textAlign: "center",
        height: `${windowHeight * 0.5}px`,
    }

  return (
    <div
      className="container"
      style={isNotMobile ? desktopStyle : mobileStyle}
    >
      <h1 style={{ fontSize: isNotMobile ?  "3.625rem" : "2rem", marginBottom: isNotMobile ? "8rem" : "4rem" , marginTop: isNotMobile ? "4rem" : "2rem"}}>
        Lorem ipsum dolor sit amet
      </h1>

      <Container>
        <Col>
          <Row className="justify-content-center">
            <InputGroup size="lg" style={{ width: "34rem" }}>
              <FormControl
                style={{ fontSize: isNotMobile ? "1rem" : "0.5rem" }}
                placeholder="Tulis nama kota, contoh: Jakarta, Bandung, dll."
                aria-label="Tulis nama kota, contoh: Jakarta, Bandung, dll."
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append>
                <Button
                  style={{
                    fontSize: isNotMobile ? "1rem" : "0.62rem",
                    backgroundColor: "#00C9A7",
                    border: "none",
                    paddingLeft: "1.625rem",
                    paddingRight: "1.625rem",
                  }}
                >
                  Cari Gudang
                </Button>
              </InputGroup.Append>
            </InputGroup>
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Search;
