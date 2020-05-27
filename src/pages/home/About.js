import React from "react";
import { Container, Col, Row, Image } from "react-bootstrap";
import {
  onlinePlatformPic,
  sharingEcoPic,
  cubicPic,
  trianglePic,
  liukan
} from "../../assets/images";

const infos = [
  { caption: "UMKM di Indonesia", data: "69%" },
  { caption: "Total Gudang", data: "123" },
  { caption: "Pengguna Aktif Bulanan", data: "1 Juta" },
];


const About = (props) => {
  const { /* windowHeight,  */isNotMobile } = props.windowSize
  return (
    <div
      style={{
        backgroundImage: `url(${trianglePic})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "-13rem top",
        marginTop: isNotMobile ? "10rem" : "1rem"
        // height: isNotMobile ? `${windowHeight}px` : null

      }}
    >
      <Container>
        <Row xs={1} lg={3} style={{ marginLeft: isNotMobile ? "1rem" : "1rem" }}>
          {infos.map((info, index) => {
            return (
              <Col key={index} style={{ marginBottom: "3rem", marginRight: "-5rem" }}>
                <Row
                  style={{ color: "#DF1C78", fontSize: "7rem" }}
                  className="justify-content-center"
                >
                  <h1 style={{ fontWeight: "900" }}>{info.data}</h1>
                </Row>
                <Row
                  style={{ color: "#B4B4B4", fontSize: "1.25rem" }}
                  className="justify-content-center"
                >
                  <p>{info.caption}</p>
                </Row>
              </Col>
            );
          })}
        </Row>

        <Row style={{ marginTop: "6rem" }}>

          <Col style={{ marginLeft: isNotMobile ? "0rem" : "2rem" }}>
            <p style={{ color: "#B4B4B4", fontSize: "1.25rem" }}>Tentang kami</p>
          </Col>
        </Row>
        <Row>
          <Col style={{ backgroundImage: `url(${cubicPic})`, backgroundRepeat: "no-repeat", backgroundPosition: "right bottom", marginBottom: "3rem", marginLeft: isNotMobile ? "1rem" : "3rem" }} >
            <Row style={{ marginBottom: "1rem" }}>
              <h1 style={{ fontSize: "2.125rem", lineHeight: "3.25rem" }}>
                Lorem ipsum dolor sit amet Consectetur adipiscing elit, sed do
              </h1>
            </Row>
            <Row style={{ paddingRight: "4rem" }}>
              <p style={{ color: "#B4B4B4", fontSize: "1.25rem" }}>
                Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea
              </p>
            </Row>
          </Col>
          <Col style={{ marginLeft: isNotMobile ? "6rem" : "4rem", marginBottom: "3rem" }}>
            <Row>
              <Image src={onlinePlatformPic} />
            </Row>
            <Row style={{ marginTop: "1.5rem" }}>
              <h1 style={{ fontSize: "1.375rem" }}>Online Platform</h1>
            </Row>
            <Row style={{ paddingRight: "6rem" }}>
              <p style={{ color: "#B4B4B4" }}>
                Platform online yang menjembatani pebisnis yang ingin menyewa
                gudang di mana saja, kapan saja, dengan biaya yang terjangkau.
              </p>
            </Row>
          </Col>
          <Col style={{ marginLeft: isNotMobile ? "-2rem" : "4rem", paddingRight: "3rem" }}>
            <Row>
              <Image src={sharingEcoPic} />
            </Row>
            <Row style={{ marginTop: "1.5rem" }}>
              <h1 style={{ fontSize: "1.375rem" }}>Sharing Economy</h1>
            </Row>
            <Row style={{ backgroundImage: `url(${liukan})`, backgroundSize: "50%", backgroundRepeat: "no-repeat", backgroundPosition: "50% -2.75rem", paddingRight: "6rem" }}>
              <p style={{ color: "#B4B4B4" }}>
                Membentuk <i>sharing economy</i> bagi pemilik gudang dalam
                mengoptimalkan pemanfaatan ruang yang tersedia secara efektif.
              </p>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
