import React, { Component } from "react";
import { Container, Image, Row, Col, Button } from "react-bootstrap";
import { warehousePic, star, ico_pin_sm } from "../assets/images";

export class ResultPageDetail extends Component {
  state = {
    detail: {
      property_id: 1,
      property_name: "Property1",
      phone: "+62812123456789",
      address: "Jalan Jakarta, No. 1, Kebayoran, Jakarta",
      province: "jakarta",
      city: "jakarta selatan",
      district: "kebayoran lama",
      sub_district: "selong",
      zipcode: 12190,
      latitude: -6.217893,
      longitude: 106.804556,
      property_size: 1,
      photos: ["URL1", "URL2", "URL3", "URL4"],
      property_rules: [
        {
          operational_hour_start: "08:00",
          operational_hour_end: "17:00",
          operational_day: ["day", "day", "day", "day", "day"],
          holiday: "2019-01-01T10:00:00Z",
        },
      ],
    },
  };

  generateStar = (totalStar) => {
    let starArray = [];
    for (let index = 0; index < totalStar; index++) {
      starArray.push("star");
    }
    return starArray;
  };

  render() {
    return (
      <div style={{ backgroundColor: "#F8F9FA", paddingTop: "2rem" }}>
        <Container>
          <Col>
            <Row>
              <div
                style={{
                  border: "solid #E4E4E4 1px",
                  backgroundColor: "white",
                  height: "11rem",
                  width: "70rem",
                  marginBottom: "2rem",
                  borderRadius: "1rem",
                }}
              >
                <Col
                  className="align-content-around flex-wrap"
                  style={{
                    paddingLeft: "5rem",
                    width: "48rem",
                    height: "17rem",
                  }}
                >
                  <Row style={{ paddingTop: "1rem" }}>
                    <h2>norman</h2>
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
                  </Row>
                  <Row style={{ paddingTop: "1rem", paddingRight: "5rem" }}>
                    <Col>
                      <Row style={{ paddingTop: "0.5rem" }}>
                        <Image height="100%" src={ico_pin_sm} />
                        <h6 style={{ fontWeight: "normal", color: "#909090" }}>
                          {this.state.detail.address}
                        </h6>
                      </Row>
                    </Col>
                    <Col style={{ marginRight: "-77px" }}>
                      <Button
                        variant="link"
                        style={{ fontWeight: "bold", color: "green" }}
                      >
                        Lihat Peta
                      </Button>
                    </Col>
                  </Row>
                </Col>
              </div>
            </Row>
            <Row>
              <Col>
                <Row
                  style={{
                    backgroundColor: "blue",
                    width: "44.875rem",
                    height: "22.875rem",
                  }}
                >
                  <Image
                    src={warehousePic}
                    width="718px"
                    height="366px"
                    rounded
                  />
                </Row>
              </Col>
              <Col style={{ marginLeft: "1.125rem" }}>
                <Row
                  style={{
                    backgroundColor: "red",
                    width: "10.875rem",
                    height: "10.875rem",
                  }}
                >
                  <Image
                    src={warehousePic}
                    width="174px"
                    height="174px"
                    rounded
                  />
                </Row>

                <Row
                  style={{
                    backgroundColor: "green",
                    width: "10.875em",
                    height: "10.875em",
                    marginTop: "1.125rem",
                  }}
                >
                  <Image
                    src={warehousePic}
                    width="174px"
                    height="174px"
                    rounded
                  />
                </Row>
              </Col>
              <Col style={{ marginLeft: "1.125rem" }}>
                <Row
                  style={{
                    backgroundColor: "red",
                    width: "10.875rem",
                    height: "10.875rem",
                  }}
                >
                  <Image
                    src={warehousePic}
                    width="174px"
                    height="174px"
                    rounded
                  />
                </Row>

                <Row
                  style={{
                    backgroundColor: "green",
                    width: "10.875rem",
                    height: "10.875rem",
                    marginTop: "1.125rem",
                  }}
                >
                  <Image
                    src={warehousePic}
                    width="174px"
                    height="174px"
                    rounded
                  />
                </Row>
              </Col>
            </Row>
            <Row style={{ marginTop: "2rem", marginBottom: "2rem"}}>
                  <Col style={{backgroundColor: "white", border: "solid #E4E4E4 1px", height: "11rem", borderRadius: "1rem"}}>
                  
                  </Col>
                  <Col style={{backgroundColor: "white", border: "solid #E4E4E4 1px", height: "11rem", borderRadius: "1rem"}}>
                  
                  </Col>
            </Row>

            <Row>
            <Col style={{backgroundColor: "white", border: "solid #E4E4E4 1px", width : "34.875rem", height: "11rem", borderRadius: "1rem", marginTop: "2rem", marginBottom: "2rem"}}>
            
            </Col>
      </Row>
          </Col>
        </Container>
      </div>
    );
  }
}

export default ResultPageDetail;
