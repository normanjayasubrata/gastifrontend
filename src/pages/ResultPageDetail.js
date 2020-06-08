import React, { Component } from "react";
import { Container, Image, Row, Col, Button, Card } from "react-bootstrap";
import "./ResultPage.css"
import {
  warehousePic,
  star,
  ico_pin_sm,
  profilePicture,
  ico_coldstorage
} from "../assets/images";

export class ResultPageDetail extends Component {
  state = {
    days: [ "Senin","Selasa","Rabu","Kamis","Jumat", "Sabtu", "Minggu" ],
    times: ["08:00 - 17:00","08:00 - 16:00","08:00 - 15:00","09:00 - 18:00","13:00 - 17:00", "-", "-"],
    features: [
      "Layanan Lain","Layanan Lain","Layanan Lain","Layanan Lain","Layanan Lain"
    ],
    deliveries: [
      {title: "Instant Courier", est: "(-+ 2jam)"},
      {title: "Same Day Delivery", est: "(-+ 6jam)"}

    ],
    packages: [
      {title: "Bronze", price: "1,000,000", tonnage: "5"},
      {title: "Silver", price: "2,000,000", tonnage: "5-40"},
      {title: "Gold", price: "3,000,000", tonnage: "40-80"},
      {title: "Platinum", price: "4,000,000", tonnage: ">80"}
    ],
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
        <Container style={{paddingTop: "2rem", paddingBottom: "5rem"}}>
          <Col>
            <Row>
              <div
                style={{
                  border: "solid #E4E4E4 1px",
                  backgroundColor: "white",
                  height: "11rem",
                  width: "70rem",
                  marginBottom: "2rem",
                  borderRadius: "0.5rem",
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
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col style={{ backgroundColor: "white", border: "solid #E4E4E4 1px", height: "12rem", borderRadius: "0.5rem", marginRight: "1.2rem", }} >
                <Row>
                  <Col>
                    <Image
                      src={profilePicture}
                      height="100px"
                      width="100px"
                      roundedCircle
                    />
                  </Col>
                  <Col>
                    <Row style={{ paddingTop: "1rem" }}>
                      <h2>norman</h2>
                    </Row>
                    <Row style={{ marginTop: "1rem" }}>
                      {this.generateStar(4).map(() => {
                        return (
                          <Image
                            src={star}
                            width="25px"
                            style={{ marginRight: "1rem" }}
                          />
                        );
                      })}
                    </Row>
                    <Row style={{ paddingTop: "1rem", paddingRight: "5rem" }}>
                      <h6 style={{ fontWeight: "normal", color: "#909090" }}>
                        {this.state.detail.address}
                      </h6>
                    </Row>
                  </Col>
                </Row>
              </Col>
              <Col style={{ backgroundColor: "white", border: "solid #E4E4E4 1px", height: "12rem", borderRadius: "0.5rem",padding: "1rem" }} >
                <Row style={{fontSize: "52px"}}>
                  <Col>
                    <h6>Hari pengiriman: </h6>
                  </Col>
                  <Col style={{marginLeft: "-10rem", marginRight: "1rem"}}>
                      {
                        this.state.days.map((day, index) => (
                          <Row key={index} className="justify-content-end">
                          <h6>{day}</h6>
                        </Row>
                        ))
                      }
                  </Col>
                  <Col>
                  {
                    this.state.times.map((time, index) => (
                      <Row key={index}>
                      <h6>{time}</h6>
                    </Row>
                    ))
                  }
                  </Col>
                  <Col style={{borderLeft: "solid #E4E4E4 1px", marginLeft: "-3rem",  height: "152px", paddingLeft: "3rem" }}>
                  {
                    this.state.deliveries.map((courier, index) => (
                      <Row key={index} style={{marginBottom: "1rem"}}>
                        <Col>
                          <Row>
                            <h6>{courier.title}</h6>
                          </Row>
                          <Row>
                          <h6>{courier.est}</h6>
                        </Row>
                        </Col>
                    </Row>
                    ))
                  }
                  </Col>
                </Row>
              </Col>
            </Row>

            <Row>
              <Col style={{ backgroundColor: "white", border: "solid #E4E4E4 1px",  height: "11rem", borderRadius: "0.5rem", marginTop: "1rem", marginBottom: "1rem", paddingLeft: "3.5rem"}} >
                  <Row style={{marginTop: "1rem"}}><h4>Layanan</h4></Row>
                  <Row style={{marginTop: "1rem"}}>
                  {
                    this.state.features.map((feature, index) => {
                       return (
                       <Col key={index}>
                        <Row>
                        <Image src={ico_coldstorage} style={{marginRight: "0.5rem"}} />
                        <h5>{feature}</h5>
                        </Row>
                       </Col>
                       )
                    })
                  }
                  </Row>
                  <Row style={{marginTop: "1rem"}}>
                  {
                    this.state.features.map((feature, index) => {
                       return (
                       <Col key={index}>
                        <Row>
                        <Image src={ico_coldstorage} style={{marginRight: "0.5rem"}} />
                        <h5>{feature}</h5>
                        </Row>
                       </Col>
                       )
                    })
                  }
                  </Row>
              </Col>
            </Row>
            <Row>
              <Col style={{paddingLeft: "3rem", marginTop: "1rem", marginBottom: "1rem"}}>
              <h4>Pilihan Paket</h4>
              </Col>
            </Row>
            <Row className="justify-content-between">
            {
              this.state.packages.map((paket, index) => (
                <Card key={index} style={{ width: '16rem', textAlign: "center" }}>
                <Card.Body>
                  <Card.Title>{paket.title}</Card.Title>
                  <Card.Text style={{fontWeight: "100", fontSize: "10px"}}>
                   Estimasi Harga
                  </Card.Text>
                  <Card.Text>
                  <span style={{fontWeight: "500", color: "#ED8A19"}}>~Rp {paket.price}</span>
                  /
                  <span style={{ fontSize: "10px"}}>{paket.tonnage} kg</span>
                 </Card.Text>
    
                  <Button style={{backgroundColor: "#00C9A7", border: "none"}}>Go somewhere</Button>
                </Card.Body>
              </Card>
              ))
            }
            </Row>
          </Col>
        </Container>
      </div>
    );
  }
}

export default ResultPageDetail;
