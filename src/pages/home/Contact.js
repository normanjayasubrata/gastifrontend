import React from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import { gastiLogo } from "../../assets/images";

const infos = [
    {title: "", value: "Jl. Lorem ipsum dolor sit amet"},
    {title: "", value: "Consectetur adipiscing elit"},
    {title: "Phone : ", value: " 123456789"},
    {title: "Email : ", value: " gasti@gasti.com"}
]

const Contact = props => {
    const {windowWidth, windowHeight, isNotMobile} = props.windowSize;


    const desktopView = (
      <Row>
      <Col>
        <iframe
        title="main office"
          width={windowWidth * 0.8}
          height={windowHeight - 80}
          // style={{paddingBottom: "5rem"}}
          src="https://maps.google.com/maps?ll=-6.224585500000001,106.8109673&q=Sudirman Central Busines District&t=&z=14&ie=UTF8&iwloc=&output=embed"
          // frameborder="0"
          // scrolling="no"
          // marginheight="0"
          // marginwidth="0"
        ></iframe>
      </Col>
      <Col style={{paddingRight: "5rem", paddingTop: "4rem"}}>
        <Row className="justify-content-end">
          <Image src={gastiLogo} />
        </Row>
        <Row className="justify-content-end" style={{marginTop: "4rem", marginBottom: "3rem"}}>
          <h1>Kontak Kami</h1>
        </Row>
        {
            infos.map((info, index) => {
                return (
                  <Row className="justify-content-end" style={{fontSize: "1rem"}}>
                  <p style={{color: "#DF1C78", fontWeight: "bold", marginRight: "1rem"}}>{info.title}</p>
                  <p>{info.value}</p>
                </Row>
                )
            })
        }
      </Col>
    </Row>
    )

    const mobileView = (

     <Container>
     <Row>
       <iframe
       title="main office"
       width="100%"
       height={windowHeight * 0.5}
         src="https://maps.google.com/maps?ll=-6.224585500000001,106.8109673&q=Sudirman Central Busines District&t=&z=14&ie=UTF8&iwloc=&output=embed"
       ></iframe>
     
     <Col style={{ paddingTop: "4rem"}}>
       <Row className="justify-content-center">
         <Image src={gastiLogo} />
       </Row>
       <Row className="justify-content-center" style={{marginTop: "4rem", marginBottom: "3rem"}}>
         <h1>Kontak Kami</h1>
       </Row>
       {
            infos.map((info, index) => {
               return (
                 <Row className="justify-content-center" style={{fontSize: "1rem"}}>
                 <p style={{color: "#DF1C78", fontWeight: "bold"}}>{info.title}</p>
                 <p>{info.value}</p>
               </Row>
               )
           })
          }
     </Col>
   </Row>
     </Container>
    )

  return (
    <div>
     { isNotMobile ? desktopView : mobileView }
    </div>
  );
};

export default Contact;

// <style>.mapouter{position:relative;text-align:right;height:500px;width:600px;}.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}</style>
