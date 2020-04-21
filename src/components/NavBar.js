import React, { Component } from "react";
import { Navbar, Nav, Col, Button } from "react-bootstrap";
import { connect } from 'react-redux'

import { gastiLogo } from "../assets/images";

export class NavBar extends Component {

    state = {
        windowWidth: 0,
        windowHeight: 0
    }

    updateDimensions = () => {
        this.setState({ windowWidth: window.innerWidth, windowHeight: window.innerHeight });
      };

    componentDidMount() {
        this.setState({windowWidth: window.innerWidth, windowHeight: window.innerHeight})
        window.addEventListener('resize', this.updateDimensions);
      }
      componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
      }
  render() {
      const {isNotMobile} = this.props.windowSize;
    let paddingLeftRight = isNotMobile ? "7.25rem" : "2rem";
    return (
      <div style={{ paddingBottom: "6rem" }}>
        <Navbar fixed="top" style={{backgroundColor: "white", borderBottom: "1px solid #E4E4E4", paddingRight: paddingLeftRight, paddingLeft: paddingLeftRight, paddingTop: "1rem", paddingBottom: "1rem"}} expand="lg">
          <Navbar.Brand href="/">
            <img
              src={gastiLogo}
              width="78"
              height="45"
              className="d-inline-block align-top"
              alt="Gasti's Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
              <Col>
                <Nav className="justify-content-end">
                  <Nav.Item>
                    <Nav.Link href="/login">
                      <Button style={{ color: "#909090" }} variant="link">
                        Masuk
                      </Button>
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/register">
                      <Button
                        style={{
                          backgroundColor: "#DF1C78",
                          border: "none",
                          width: "94px",
                          height: "42px",
                        }}
                      >
                        Daftar
                      </Button>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
          </Navbar.Collapse>
        </Navbar>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    windowSize: state.windowSizeReducer
})


export default connect(mapStateToProps)(NavBar);
