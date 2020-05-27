import React from "react";
import { Container, Col, Row, Card, Button, Image } from "react-bootstrap";
import {
  cubic3,
  liukan2,
  zigzag,
  lontong,
  triangle2,
  sewagudangPic,
  strateguyPic,
} from "../../assets/images";

const infos = [
  {
    id: 1,
    title: "Jadi Mitra Usaha",
    caption: "Lorem ipsum dolor sit amet Consectetur adipiscing elit, sed do",
    button: "Daftarkan Barang",
    image: strateguyPic,
  },
  {
    id: 2,
    title: "Jadi Mitra Gudang",
    caption: "Lorem ipsum dolor sit amet Consectetur adipiscing elit, sed do",
    button: "Lihat Selengkapnya",
    image: sewagudangPic,
  },
];

const accounts = [
  { id: 1, name: "USAHA" },
  { id: 2, name: "GUDANG" }
]

const Services = (props) => {

  const { windowHeight, isNotMobile } = props.windowSize;

  const divStyleFull = {
    backgroundImage: `url(${lontong}), url(${triangle2}), url(${zigzag}), url(${liukan2}), url(${cubic3})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "35.6rem 18.5rem, -8rem 0rem, 48rem 45rem, 70rem 13rem, 73.5rem 39.5rem",
    backgroundSize: "13%, 15%, 11%, 13%, 11%",
    backgroundColor: "#DCDCDC",
    height: "auto",
  }

  const divStyleMobile = {
    backgroundColor: "#DCDCDC",
    marginTop: "4rem"
  }

  const activeStyle = {
    fontSize: "1rem",
    backgroundColor: "#00C9A7",
    border: "none",
    color: "white",
    width: "10.875rem",
    height: "3.125rem",
    marginTop: "1rem",
  };

  const inactiveStyle = {
    fontSize: "1rem",
    borderColor: "#00C9A7",
    color: "#00C9A7",
    width: "10.875rem",
    height: "3.125rem",
    marginTop: "1rem",
  };

  return (
    <div style={isNotMobile ? divStyleFull : divStyleMobile}>
      <Container>
        <Col style={{ marginLeft: isNotMobile ? "-6rem" : "0rem", paddingTop: "7rem" }}>
          <Row className="justify-content-center" style={{ color: "#B4B4B4", fontSize: "1.25rem", fontWeight: "700" }}><p>Layanan</p></Row>
          <Row className="justify-content-center" style={{ fontSize: "2.125rem", paddingLeft: isNotMobile ? "18rem" : "2.5rem", paddingRight: isNotMobile ? "15rem" : "2.5rem" }}><h1 style={{ lineHeight: "3.5rem" }}>Lorem ipsum dolor sit amet Consectetur adipiscing elit</h1></Row>
          <Row className="justify-content-center" style={{ textAlign: "center", marginTop: "3rem" }}>
            {infos.map((info, index) => {
              return (
                <Card key={index} style={{ width: "28.875rem", height: "28.125rem", margin: "1rem", border: "solid #B4B4B4 2px" }}>
                  <Row className="justify-content-center">
                    <Image src={info.image} width="78px" height="78px" style={{ marginTop: isNotMobile ? "4rem" : "2rem" }} />

                  </Row>
                  <Card.Body>
                    <Card.Title style={{ fontSize: "2.125rem", marginTop: "1rem" }}>{info.title}</Card.Title>
                    <Card.Text style={{ color: "#B4B4B4", fontSize: "1.25rem", marginTop: "1rem" }}>{info.caption}</Card.Text>
                    <Button onClick={() => props.setAccountType({ accountType: accounts[index] })} variant="outline-primary" style={(props.accountType.id - 1) === index ? activeStyle : inactiveStyle} >{info.button}</Button>
                  </Card.Body>
                </Card>
              )
            })}
          </Row>
        </Col>
      </Container>
    </div>
  );
};

export default Services;
