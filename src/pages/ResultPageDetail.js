import React, { Component } from "react";
import { Container, Image, Row, Col, Button, Card, Breadcrumb } from "react-bootstrap";
import axios from 'axios'
import { Link } from "react-router-dom";
import "./ResultPage.css"
import {
  warehousePic,
  star,
  ico_pin_sm,
  profilePicture,
  ico_blank_feature,
  verified
} from "../assets/images";
import StarRatingRender from '../components/StarRatingRender'


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
    detail: {},
    ownerName: "Norman",
    isVerified: true,
    breadcrumbs: ["Gudang", "Jakarta", "Jakarta Selatan", "Tebet"]
  };

  componentDidMount() {
    axios.get("http://private-anon-447e6fa740-gasti.apiary-mock.com/v1/property/2")
    .then(res => {
      console.log(res.data)
      this.setState({detail: res.data})
    })
  }
  
  render() {
    return (
      <div style={{ backgroundColor: "#F8F9FA", paddingTop: "2rem" }}>
        <Container style={{ paddingBottom: "5rem"}}>
          <Col>
            <Row style={{marginBottom: "1.5rem"}}>
              {
                this.state.breadcrumbs.map((breadcrumb, index) => {
                  if (index === this.state.breadcrumbs.length - 1) {
                    return (
                      <div key={index}>
                      <span style={{marginRight: "0.5rem", color: "#909090", fontSize: "14px"}}>{breadcrumb}</span>
                      </div>
                    )
                  } else {
                    return (
                      <div key={index}>
                      <span style={{marginRight: "0.5rem", color: "#909090", fontSize: "14px"}}>{breadcrumb}</span>
                      <span style={{marginRight: "0.5rem", color: "#909090", fontSize: "14px"}}>/</span>
                      </div>
                     )
                  }
               
                })
              }

            </Row>
            <Row style={{ border: "solid #E4E4E4 1px", backgroundColor: "white", height: "8.688rem", width: "70rem", marginBottom: "2rem", borderRadius: "0.5rem", padding: "1.5rem"}} >
                <Col className="align-content-around flex-wrap" style={{ paddingLeft: "2rem", width: "48rem", height: "17rem", }} >
                  <Row>
                    <h2 style={{fontSize: "24px"}}>{this.state.detail.property_name}</h2>
                  </Row>
                  <Row>
                    <Col>
                      <StarRatingRender stars={4} review={{value:12, word:"Ulasan"}} />
                    </Col>
                  </Row>
                  <Row className="align-items-start" style={{ paddingRight: "5rem" }}>
                        <Image height="100%" src={ico_pin_sm} />
                        <h6 style={{ fontWeight: "normal", color: "#909090", fontSize: "14px" }}>
                          {this.state.detail.address}
                        </h6>
                      <Link to="#" style={{ fontWeight: "normal", color: "#00C9A7", fontSize: "14px", marginLeft: "1.5rem" }} > Lihat Peta </Link>
                  </Row>
                </Col>
            </Row>
            <Row>
              <Col>
                <Row style={{ backgroundColor: "blue", width: "44.875rem", height: "22.875rem", }} >
                  <Image src={warehousePic} width="718px" height="366px" rounded />
                </Row>
              </Col>
              <Col style={{ marginLeft: "1.125rem" }}>
                <Row style={{ backgroundColor: "red", width: "10.875rem", height: "10.875rem", }} >
                  <Image src={warehousePic} width="174px" height="174px" rounded />
                </Row>

                <Row style={{ backgroundColor: "green", width: "10.875em", height: "10.875em", marginTop: "1.125rem", }} >
                  <Image src={warehousePic} width="174px" height="174px" rounded />
                </Row>
              </Col>
              <Col style={{ marginLeft: "1.125rem" }}>
                <Row style={{ backgroundColor: "red", width: "10.875rem", height: "10.875rem", }} >
                  <Image src={warehousePic} width="174px" height="174px" rounded />
                </Row>

                <Row style={{ backgroundColor: "green", width: "10.875rem", height: "10.875rem", marginTop: "1.125rem", }} >
                  <Image src={warehousePic} width="174px" height="174px" rounded />
                </Row>
              </Col>
            </Row>
            <Row style={{ marginTop: "1rem", marginBottom: "1rem" }}>
              <Col style={{ backgroundColor: "white", border: "solid #E4E4E4 1px", height: "12rem", borderRadius: "0.5rem", marginRight: "1.2rem", }} >
                <Row className="justify-content-end" style={{padding: "3rem"}}>
                  <Col>
                    <Image src={profilePicture} height="100px" width="100px" roundedCircle />
                  </Col>
                  <Col style={{marginLeft: "-8rem", marginTop: "-1rem"}}>
                    <Row style={{ paddingTop: "1rem" }}>
                      <h2 style={{fontSize: "16px"}}>{`Gudang ini dimiliki oleh ${this.state.ownerName}`}</h2>
                      {this.state.isVerified ? <Image style={{marginLeft: "0.2rem", marginTop: "0.1rem"}} width={16} height={16} src={verified} /> : null}
                    </Row>
                    <Row style={{ marginTop: "0.5rem" }}>
                      <StarRatingRender stars={5} review={{value:10, word:"Rating"}} style={{marginBottom: "-1.2rem", marginLeft: "0.2rem"}} />
                    </Row>
                    <Row style={{ paddingTop: "1rem" }}>
                      <h6 style={{ fontWeight: "normal", color: "#909090", fontSize: "14px" }}>
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
                        <Image src={ico_blank_feature} style={{marginRight: "0.5rem"}} />
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
                        <Image src={ico_blank_feature} style={{marginRight: "0.5rem"}} />
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
    
                  <Button style={{backgroundColor: "#00C9A7", border: "none", fontSize: "14px", fontWeight: "lighter", width: "100%", padding: "0.65rem"}}>Request Sewa Gudang</Button>
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
