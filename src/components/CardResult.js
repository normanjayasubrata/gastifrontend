import React, { Component } from "react";
import { Image, Row, Col, Button } from "react-bootstrap";
import { warehousePic, star, ico_pin_sm, ico_shelf, ico_coldstorage } from "../assets/images";
import { Link } from "react-router-dom";

export class CardResult extends Component {

  checkFacility = (facility) => {
    switch (facility) {
      case "ico_shelf":
        return ico_shelf
      case "ico_coldstorage":
        return ico_coldstorage
      default:
        break;
    }
  }

  generateStar = (totalStar) => {
    let starArray = [];
    for (let index = 0; index < totalStar; index++) {
      starArray.push("star");
    }
    return starArray;
  };

  render() {

    let facility = ["ico_shelf", "ico_coldstorage"]

    return (
      <div
        style={{
          backgroundImage: `url(${warehousePic})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "22rem 17rem",
          backgroundColor: "white",
          height: "17rem",
          width: "70rem",
          marginBottom: "2rem",
          borderRadius: "1rem",
        }}
      >
        <Col className="align-content-around flex-wrap" style={{ marginLeft: "25rem", width: "48rem", height: "17rem" }}>
          <Row style={{ paddingTop: "1rem" }}>
            <Link to="/searchresult/detail">
              <h2>norman</h2>
            </Link>
          </Row>
          <Row style={{ marginTop: "1rem" }}>
            <Col>
              {this.generateStar(4).map(() => {
                return (
                  <Image
                    src={star}
                    width="25px"
                    style={{ marginRight: "1rem" }}
                  />
                );
              })}
            </Col>
            <Col style={{ marginRight: "-17rem" }}>
              <h6 style={{ fontWeight: "normal", color: "#909090", textDecoration: "line-through" }}>{`~Rp 1,000.000`}</h6>
            </Col>
          </Row>
          <Row style={{ paddingTop: "1rem", paddingRight: "5rem" }}>
            <Col style={{ marginLeft: "-1rem" }}>
              <Row style={{ paddingTop: "0.5rem" }}>
                <Image height="100%" src={ico_pin_sm} />
                <h6 style={{ fontWeight: "normal", color: "#909090" }}>
                  Tebet, Jakarta Sealtan
            </h6>
              </Row>
            </Col>
            <Col>
              <Button variant="link" style={{ fontWeight: "bold", color: "green" }}>Lihat Peta</Button>
            </Col>
            <Col>
              <Row className="align-items-end">
                <h4 style={{ color: "#ED8A19" }}>{`~Rp 1,000.000`}</h4>
                <h6 style={{ fontWeight: "normal" }}>{`/5kg`}</h6>
              </Row>
            </Col>
          </Row>
          <Row style={{ borderBottom: "solid #E4E4E4 1px", marginLeft: "-3.9rem", width: "48rem", paddingBottom: "2rem" }}></Row>
          <Row style={{ paddingTop: "1rem" }}>
            {
              facility.map((fac, index) => {
                return (
                  <Image
                    key={index}
                    src={this.checkFacility(fac)}
                    width="40px"
                    height="40px"
                    style={{ marginRight: "1rem" }}
                  />
                );
              })
            }
          </Row>
        </Col>
      </div>
    );
  }
}

export default CardResult;
