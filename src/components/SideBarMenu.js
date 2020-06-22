import React, { Component } from 'react'
import { Button, Col, Row } from "react-bootstrap";

class SideBarMenu extends Component {
    render() {
        return (
            <div className="sidebar">
               <Col>
               <Row className="justify-content-center">
               <Button variant="outline-dark" className="sidebar-button-close" onClick={this.props.handleClick}> X </Button> 
               </Row>
                <Row className="justify-content-center">
                    <Col>
                        <Row>
                            <h4>Nama Usaha</h4>
                            <p>Rating</p>
                        </Row>
                    </Col>
               </Row>
               <Row className="justify-content-center">
                  <div className="sidebar-box"></div>
               </Row>
               <Row className="justify-content-center">
                  <div className="sidebar-box active-box"></div>
               </Row>
               </Col>
               
               </div>
        )
    }
}

export default SideBarMenu
