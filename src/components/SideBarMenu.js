import React, { Component } from 'react'
import { Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class SideBarMenu extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="sidebar open">
               <Col>
               <Row className="justify-content-start">
               <Button variant="outline-dark" className="sidebar-button-close" onClick={this.props.handleClick}> X </Button> 
               </Row>
                <Row className="justify-content-start">
                    <Col>
                        <Row>
                            <p className="font-weight-300">Nama Usaha</p>
                        </Row>
                        <Row>
                            <p style={{color: "#B4B4B4", fontSize: "12px", marginTop: "-1rem"}}>Rating</p>
                        </Row>
                    </Col>
               </Row>
               <Row className="justify-content-start">
                  <div className="sidebar-box"><p>Beranda</p></div>
               </Row>
               <Row className="justify-content-start">
                  <div className="sidebar-box"><p>Transaksi</p></div>
               </Row>
               <Row className="justify-content-start">
                  <div onClick={() => console.log("coba")} className="sidebar-box active-box"><p>WMS</p></div>
               </Row>

               <Row className="justify-content-start">
                  <div className="sidebar-box submenu"><p>Daftar Gudang</p></div>
               </Row>

               <Row className="justify-content-start">
                  
               </Row>
               </Col>
               
               </div>
        )
    }
}

export default SideBarMenu
