import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";

class SideBar extends Component {

         generateBurger = () => {
           let burgerIcon = [];
           for (let index = 0; index < 3; index++) {
             burgerIcon.push( <div key={index} ></div> );
           }
           return burgerIcon;
         };

         render() {
           return (
             <div className="sidebar">
               <Col>
               <Row className="justify-content-center">
               <Button className="sidebar-button" onClick={this.props.handleClick}> { this.generateBurger().map(burger => burger) } </Button> 
               </Row>
                <Row className="justify-content-center">
                  <div className="sidebar-profile">
                    <div></div>
                  </div>
               </Row>
               <Row className="justify-content-center">
                  <div className="sidebar-box"></div>
               </Row>
               <Row className="justify-content-center">
                  <div className="sidebar-box active-box"></div>
               </Row>
               </Col>
               
               </div>
           );
         }
       }

export default SideBar;
