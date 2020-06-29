import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import { Button, Container, Col, Row, DropdownButton, Dropdown } from "react-bootstrap";
import axios from "axios"
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

import BreadCrumps from "../components/BreadCrumps";
import StarRatingRender from '../components/StarRatingRender'

import lconfig from "../config"
import { enter_auth_page } from "../store/action";
import { getToken } from "../store/localstorage/token";



class ListPropertyPage extends Component {
    state = {
        // properties: "",
        token: getToken(),
        properties: [],
        tableSortSelected: "Terbaru",
        tableFilterSelected: "Semua Gudang",
        breadcrumps: ["Dashboard", "Daftar Gudang"]
    }

    // componentDidMount() {
    //     axios.get("https://private-12204a-gasti.apiary-mock.com/v1/property")
    //     .then(res => {
    //         console.log(res.data.properties)
    //         this.setState({properties: res.data.properties})
    //     })
    //     .catch(error => console.log(error))
    // }

    detailFormatter = (cell) => {
        return (<div className="row">
        <div className="col-md-3">
            <div style={{border:"1px solid black", width:"50px", height:"50px", borderRadius: "5px"}}></div>
        </div>
        <div className="col-md-9">
            <p className="margin0" style={{fontWeight: "bold"}}>{cell.name}</p>
            <StarRatingRender stars={4} style={{marginTop: "0.5rem", marginBottom: "0.5rem", marginLeft: "0rem"}} />
            <p className="location">{cell.address}</p>
        </div>
    </div>);
    }

    actionFormatter = () => {
        return (
        <Row>
            <Col style={{fontSize: "14px"}}>
                <p><a href="#" style={{color: "#00C9A7"}}>Ubah Data</a></p>
                <p><a href="#" className="text-decoration-none text-muted">Tambah Staff</a></p>
                <p><a href="#" className="text-decoration-none text-muted">Putus Kontrak</a></p>
                <p><a href="#" className="text-decoration-none text-muted">Hapus Gudang</a></p>
            </Col>
        </Row>
        )
    }

     renterFormatter = (cell) => {
        return (<Row>
            <Col>
                <p class="margin0" style="fontWeight:bold;">${cell.name}</p>
                <p class="text-muted">${cell.package}</p>
            </Col>
        </Row>);
    }
    
     stockFormatter = (cell) => {
        return (<Row>
            <Col>
                <p class="margin0" style="fontWeight:bold;">${cell}</p>
                <p class="text-muted">Barang</p>
            </Col>
        </Row>);
    }
    
     staffFormatter = (cell) => {
        return (<Row>
            <Col>
                <p class="margin0" style="fontWeight:bold;">${cell}</p>
                <p class="text-muted">Orang</p>
            </Col>
        </Row>);
    }
    


    getListProperty() {
        if (this.state.properties != "") {
            return
        }

        const config = {
            headers: {
                'Authorization': this.state.token
            }
        }

        let url = lconfig.API_BASE_URL + '/v1/property'
        // let url = 'http://private-anon-c8b8f56438-gasti.apiary-mock.comShow/v1/property'
        let self = this
        axios.get(url, config)
            .then(function (response) {
                let properties = response.data.properties
                self.setState({
                    properties: properties
                })
            })
            .catch(function (error) {
                alert(error.response.data.error.toString())
            });
    }

    renderShowsTotal(start, to, total) {
        return (
            <p className="text-muted">
                Menampilkan {start} - {to} dari {total}&nbsp;&nbsp;
            </p>
        );
    }

    render() {
        let property = Object.entries(this.state.properties).map(([key, value]) => {
            return ({
                detail: {
                    picture: "",
                    name: value.property_name,
                    rating: "",
                    address: value.address
                },
                renter: {
                    name: "John Doe 1",
                    package: "Bronze"
                },
                stock: 1,
                staff: value.staff
            });
        })

        const options = {
            page: 1,
            sizePerPage: 5,
            pageStartIndex: 1,
            paginationSize: 3,
            prePage: 'Sebelumnya',
            nextPage: 'Selanjutnya',
            firstPage: 'Pertama',
            lastPage: 'Terakhir',
            paginationShowsTotal: this.renderShowsTotal,
            paginationPosition: 'bottom',
            hideSizePerPage: true,
            withFirstAndLast: false
        };

        const selectRowProp = {
            mode: 'checkbox'
        };

        // if (this.state.token === "") {
        //     return <Redirect to={lconfig.LOGIN_URL} />
        // } else {
            return (
                <div className="page">
                <Container>
                {this.getListProperty()}
                <Row>
                <BreadCrumps breadcrumbs={this.state.breadcrumps} style={{marginLeft: "0rem"}} />
              </Row>
                <Row className="align-items-center page-row">
                <Col>
                  <h1 className="page-title" style={{marginLeft: "-1rem"}}>Daftar Gudang</h1>
                </Col>
                <Col>
                  <Row className="justify-content-end">
                    <Link to="/gudang/tambah">
                      <Button className="button-green"> + Tambah Gudang</Button>
                    </Link>
                  </Row>
                </Col>
              </Row>
                <Row>
                    <Col className="table-box">
                        <Row className="table-filter justify-content-between">
                        <Row className="table-filter-button">
                        <p>Filter</p>
                        <Dropdown style={{padding: "0"}}>
                        <Dropdown.Toggle className="button-filter-white"  id="dropdown-basic">
                          {this.state.tableFilterSelected}
                        </Dropdown.Toggle>
                      
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Semua Gudang</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                        </Row>
                        <Row className="table-filter-button">
                        <p>Urutkan</p>
                        <Dropdown style={{padding: "0"}}>
                        <Dropdown.Toggle className="button-filter-white"  id="dropdown-basic">
                          {this.state.tableSortSelected}
                        </Dropdown.Toggle>
                      
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Terbaru</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                        </Row>
                      
                        </Row>
                        <Row>
                        <BootstrapTable
                        tableHeaderClass="table-header"
                        tableStyle={ { border: 'none' } }
                        data={property}
                        selectRow={selectRowProp}
                        pagination={true}
                        options={options}
                        bordered={false}
                    >
                        <TableHeaderColumn
                            tdAttr={{ 'colSpan': 2 }}
                            colSpan="2"
                            dataField='detail'
                            dataFormat={this.detailFormatter}
                            isKey
                        >Nama Gudang</TableHeaderColumn>
                        <TableHeaderColumn dataField='renter' dataFormat={this.renterFormatter} >Penyewa</TableHeaderColumn>
                        <TableHeaderColumn dataField='stock' dataFormat={this.stockFormatter} dataSort={true} >Stock</TableHeaderColumn>
                        <TableHeaderColumn dataField='staff' dataFormat={this.staffFormatter} dataSort={true} >Jumlah Staff</TableHeaderColumn>
                        <TableHeaderColumn dataField='action' dataFormat={this.actionFormatter} >Action</TableHeaderColumn>
                    </BootstrapTable>
                        </Row>
                    </Col>
                </Row>
                    </Container >
                </div>
            )
        //  }
    }
}

const mapStateToProps = state => ({
    ...state.windowSizeReducer,
    accountType: state.accountReducer.accountType
})

const mapDispatchToProps = dispatch => ({
    enterAuthPage: () => dispatch(enter_auth_page())
})


export default connect(mapStateToProps, mapDispatchToProps)(ListPropertyPage)
