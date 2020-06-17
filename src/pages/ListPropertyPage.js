import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import { Button, Container, Col, Row } from "react-bootstrap";
import axios from "axios"
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


import lconfig from "../config"
import { enter_auth_page } from "../store/action";
import { getToken } from "../store/localstorage/token";

function detailFormatter(cell) {
    return `<div class="row">
        <div class="col-md-3">
            <div style="border:1px solid black; width:50px; height:50px; border-radius: 5px;"></div>
        </div>
        <div class="col-md-9">
            <p class="margin0" style="font-weight:bold";>${cell.name}</p>
            <p class="margin0" >*****</p>
            <p class="text-muted">${cell.address}</p>
        </div>
    </div>`;
}

function renterFormatter(cell) {
    return `<div class="row">
        <div class="col">
            <p class="margin0" style="fontWeight:bold;">${cell.name}</p>
            <p class="text-muted">${cell.package}</p>
        </div>
    </div>`;
}

function stockFormatter(cell) {
    return `<div class="row">
        <div class="col">
            <p class="margin0" style="fontWeight:bold;">${cell}</p>
            <p class="text-muted">Barang</p>
        </div>
    </div>`;
}

function staffFormatter(cell) {
    return `<div class="row">
        <div class="col">
            <p class="margin0" style="fontWeight:bold;">${cell}</p>
            <p class="text-muted">Orang</p>
        </div>
    </div>`;
}

function actionFormatter() {
    return `<div class="row">
        <div class="col">
            <p><a href="#" class="text-decoration-none table-link">Ubah Data</a></p>
            <p><a href="#" class="text-decoration-none text-muted">Tambah Staff</a></p>
            <p><a href="#" class="text-decoration-none text-muted">Putus Kontrak</a></p>
            <p><a href="#" class="text-decoration-none text-muted">Hapus Gudang</a></p>
        </div>
    </div>`;
}

class ListPropertyPage extends Component {
    state = {
        properties: "",
        token: getToken(),
        properties: "",
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

        if (this.state.token === "") {
            return <Redirect to={lconfig.LOGIN_URL} />
        } else {
            return (
                <Container style={{ backgroundColor: "white" }}>
                    {this.getListProperty()}
                    <Row className="form-row" >
                        <Col md="10">
                            <h3 >Daftar Gudang</h3>
                        </Col>
                        <Col>
                            <Link to="/gudang/tambah">
                                <Button variant="primary" className="button-active" >
                                    Tambah Gudang
                            </Button>
                            </Link>
                        </Col>
                    </Row>
                    <Row>
                        <BootstrapTable
                            data={property}
                            selectRow={selectRowProp}
                            pagination={true}
                            options={options}
                            bordered={false}
                            tableHeaderClass='table-header'
                        >
                            <TableHeaderColumn
                                tdAttr={{ 'colSpan': 2 }}
                                colSpan="2"
                                dataField='detail'
                                dataFormat={detailFormatter}
                                isKey
                            >Nama Gudang</TableHeaderColumn>
                            <TableHeaderColumn dataField='renter' dataFormat={renterFormatter} >*Penyewa*</TableHeaderColumn>
                            <TableHeaderColumn dataField='stock' dataFormat={stockFormatter} dataSort={true} >*Stock*</TableHeaderColumn>
                            <TableHeaderColumn dataField='staff' dataFormat={staffFormatter} dataSort={true} >Jumlah Staff</TableHeaderColumn>
                            <TableHeaderColumn dataField='action' dataFormat={actionFormatter} >Action</TableHeaderColumn>
                        </BootstrapTable>
                    </Row>
                </Container >
            )
        }
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
