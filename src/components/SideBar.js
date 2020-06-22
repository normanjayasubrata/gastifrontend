import React, { Component } from "react";
import { Button, Col, Row } from "react-bootstrap";

export class SideBar extends Component {
         state = {
           isMenuOpened: false,
         };

         generateBurger = () => {
           let burgerIcon = [];
           for (let index = 0; index < 3; index++) {
             burgerIcon.push(
               <div
               key={index}
                 style={{
                   width: "30px",
                   height: "4px",
                   backgroundColor: "black",
                   margin: "6px 0",
                 }}
               ></div>
             );
           }
           return burgerIcon;
         };

         render() {
           return (
             <div
               style={{
                 marginTop: "-0.2rem",
                 border: "solid #E4E4E4 1px",
                 height: "100%",
                 position: "absolute",
                 width: "4.563rem",
                 backgroundColor: "white",
                 padding: "0rem"
               }}
             >
               <Col>
               <Row className="justify-content-center">
               <Button onClick={this.props.handleClick}> { this.generateBurger().map(burger => burger) } </Button> 

               </Row>
               </Col>
               
               </div>
           );
         }
       }

export default SideBar;
