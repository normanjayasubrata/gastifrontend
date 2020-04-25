import React from "react";
import { Image, Container, Col, Row } from "react-bootstrap";
import { /* mediaBackground, */ warehousePic, cubic2, triangle2 } from "../../assets/images";

const MediaPage = (props) => {
    const { windowHeight, isNotMobile } = props.windowSize;
  const desktopStyle = {
    backgroundImage: `url(${cubic2}), url(${triangle2})`,
    backgroundRepeat: "no-repeat",
      backgroundPosition: "50rem 31rem, 68.5rem 4rem",
    backgroundSize: "13%, 15%",
    height: `${windowHeight}px`,
    marginTop: "5rem"
  };
  const desktopView = (
    <Container
    >
      <Col
      >
          <Row className="justify-content-center">
          <div >
          <Image
          src={warehousePic}
          style= {isNotMobile ? {marginLeft: "-10.5rem", marginTop: "8rem", border: "solid white 0.6rem"} : { border: "solid white 0.6rem"}}
          width={isNotMobile ? "900px" : "100%"}
          height={isNotMobile ? "500px" : null}
          // style={{border: "solid white 0.5rem"}}
        />
          </div>
          </Row>
      </Col>
    </Container>
  )

  const mobileStyle= {
    // backgroundColor: "#DCDCDC",
    // width: windowWidth,
    // margin: "4rem"
    height: `${windowHeight * 0.3}px`,
    paddingTop: "4rem"
    // marginLeft: "3rem"
    // padding: "4rem"
  }

  const mobileView = (
    <div>
    <Container>
    <Col>
    <Row>
    <Image
    src={warehousePic}
    width="100%"
    // height={isNotMobile ? "500px" : null}
    style={{border: "solid #DCDCDC 0.5rem"}}
  />
    </Row>
    </Col>
   </Container>
    </div>
  )
  return (
    <div
    style={
      isNotMobile ? desktopStyle : mobileStyle
    }
    >
   
    {
      isNotMobile ? desktopView : mobileView
    }
    </div>
  );
};

export default MediaPage;
