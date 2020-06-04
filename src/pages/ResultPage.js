import React, { Component } from "react";
import { connect } from 'react-redux'
// import axios from "axios";
import {Image, Dropdown, Col, Row, Form } from "react-bootstrap";

import { star } from "../assets/images";

import CardResult from "../components/CardResult";

export class ResultPage extends Component {
  state = {
    buttonSelceted : "Rekomendasi",
    propertyResult: [
      {
        property_id: 1,
        property_name: "Property_1",
        address: "Jalan Jakarta, No. 1, Kebayoran, Jakarta",
        latitude: -6.217893,
        longitude: 106.804556,
        property_size: "SMALL",
        photos: ["URL1", "URL2", "URL3", "URL4"],
      },
      {
        property_id: 2,
        property_name: "Property_2",
        address: "Jalan Jakarta, No. 1, Kebayoran, Jakarta",
        latitude: -6.217893,
        longitude: 106.804556,
        property_size: "MEDIUM",
        photos: ["URL1", "URL2", "URL3", "URL4"],
      },
      {
        property_id: 3,
        property_name: "Property_3",
        address: "Jalan Jakarta, No. 1, Kebayoran, Jakarta",
        latitude: -6.217893,
        longitude: 106.804556,
        property_size: "LARGE",
        photos: ["URL1", "URL2", "URL3", "URL4"],
      },
    ],
  };

  // componentDidMount() {
  //     axios.get("https://private-b8e5e1-gasti.apiary-mock.com/v1/property/seach?locationID=&facilityID=&areaID=&rating=&priceMin=&priceMax=&page=&perPage=%27")
  //     .then(res => {
  //         console.log(res.data)

  //         console.log(JSON.parse(`${res.data}`))
  //         this.setState({propertyResult: res.data})
  //     })
  //     .catch(error => console.log(error))
  // }

  generateStar = (totalStar) => {
    let starArray = [];
    for (let index = 0; index < totalStar; index++) {
      starArray.push("star");
    }
    return starArray;
  };

  setSortMethod = (method) => {
    this.setState({buttonSelceted: method})
  }

  render() {
    // const {windowWidth} = this.props.pageSize
    return (
      <div style={{ backgroundColor: "#F8F9FA"}}>
        <Row style={{paddingLeft: "8.25rem", paddingRight: "9.25rem"}}>
          <Col>
            <Row style={{ paddingTop: "1rem" }}>
              <div style={{textAlign: "center", paddingTop: "20%", width: "24rem", height: "14.875rem", backgroundColor: "white", borderRadius: "1rem", border: "1px solid #E4E4E4", }} >
                <h1>Maps</h1>
              </div>
            </Row>
            <Row style={{margin: "1rem"}}>
              <h3>Filter</h3>
            </Row>
            <Row style={{width: "24rem", backgroundColor: "white", borderRadius: "1rem", border: "1px solid #E4E4E4", padding: "2rem"}}>
            <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Lokasi</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          
            <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Fasilitas</Form.Label>
              <Form.Check type="checkbox" label="Ruang Pendingin" />
              <Form.Check type="checkbox" label="Rak" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Area</Form.Label>
              <Form.Check type="checkbox" label="Tebet" />
              <Form.Check type="checkbox" label="Kalibata" />
              <Form.Check type="checkbox" label="Cilandak" />
              <Form.Check type="checkbox" label="Cijantung" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
            <Form.Label>Peringkat</Form.Label>
              <Form.Check type="checkbox" label= {this.generateStar(1).map(() => <Image src={star} width="15px" style={{ marginRight: "0.3rem" }} />)} />
              <Form.Check type="checkbox" label= {this.generateStar(2).map(() => <Image src={star} width="15px" style={{ marginRight: "0.3rem" }} />)} />
              <Form.Check type="checkbox" label= {this.generateStar(3).map(() => <Image src={star} width="15px" style={{ marginRight: "0.3rem" }} />)} />
              <Form.Check type="checkbox" label= {this.generateStar(4).map(() => <Image src={star} width="15px" style={{ marginRight: "0.3rem" }} />)} />
              <Form.Check type="checkbox" label= {this.generateStar(5).map(() => <Image src={star} width="15px" style={{ marginRight: "0.3rem" }} />)} />
            </Form.Group>

            <Form.Group controlId="formBasicRange">
            <Form.Label>Rentang Harga</Form.Label>
            <Form.Control type="range" />
          </Form.Group>
          </Form>
          </Row>
          </Col>
          <Col>
            <Row className="justify-content-start align-items-center" style={{padding: '1rem'}}>
               <h6 style={{color: "#909090", marginRight: "1rem"}}>Urutkan berdasarkan: </h6>
              <Dropdown>
              <Dropdown.Toggle variant="outline-dark" id="dropdown-basic">
                {this.state.buttonSelceted}
              </Dropdown.Toggle>
            
              <Dropdown.Menu>
                <Dropdown.Item onClick={() => {this.setSortMethod("Rekomendasi")}}>Rekomendasi</Dropdown.Item>
                <Dropdown.Item onClick={() => {this.setSortMethod("Harga Tertinggi")}}>Harga Tertinggi</Dropdown.Item>
                <Dropdown.Item onClick={() => {this.setSortMethod("Harga Terendah")}}>Harga Terendah</Dropdown.Item>
                <Dropdown.Item onClick={() => {this.setSortMethod("Peringkat Tertinggi")}}>Peringkat Tertinggi</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            </Row>
            <Row>
              {this.state.propertyResult.map((propResults) => {
                return <CardResult key={propResults.property_id} />;
              })}
            </Row>
          </Col>
        </Row>
    </div>
    );
  }
}

const mapStateToProps = (state) => ({
  pageSize: state.windowSizeReducer,
})


export default connect(mapStateToProps, null)(ResultPage);


/* 
 
*/