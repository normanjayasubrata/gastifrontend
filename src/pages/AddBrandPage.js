import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from 'axios';

import "../assets/index.css"
import lconfig from "../config"
import { getToken } from "../store/localstorage/token";

export class AddBrandPage extends Component {
    state = {
        form: {
            brandName: "",
            address: "",
            email: "",
            bank: "BCA",
            bankAccount: ""
        },
        isAllValidated: false,
        token: getToken(),
        banks: "",
        needGetBank: true
    };

    getBank() {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            }
        }

        let url = lconfig.API_BASE_URL + '/v1/master-data/bank'
        let self = this
        if (this.state.needGetBank) {
            axios.get(url, config)
                .then(function (response) {
                    self.setState({
                        banks: response.data.data,
                        needGetBank: false
                    })
                })
                .catch(function (error) {
                    if (error.response != undefined) {
                        alert(error.response.data.error)
                    } else {
                        alert("Get Bank (" + error + ")")
                    }
                });
        }
    }

    renderBank() {
        if (this.state.banks != "") {
            const banks = this.state.banks.map(
                (bank) =>
                    <option value={bank.bank_id}>{bank.bank_name} ({bank.bank_id})</option>
            );

            return (
                <Form.Control as="select" onChange={this.onChangeHandler} name="bank" >
                    {banks}
                </Form.Control>
            );
        } else {
            return (
                <Form.Control disabled as="select" onChange={this.onChangeHandler} name="bank" >
                    <option value="">Bank Not Found</option>
                </Form.Control>
            )
        }
    }

    onChangeHandler = (event) => {
        const { value, name } = event.target;

        this.setState((state) => {
            this.state.form = {
                ...state.form,
                [name]: value,
            }
        });

        setTimeout(() => {
            this.validateAll();
        }, 100);
    };

    validateAll = () => {
        let validBrandName = this.state.form.brandName.trim() !== "";
        let validAddress = this.state.form.address.trim() !== "";
        let validEmail = this.state.form.email.trim() !== "";
        let validBank = this.state.form.bank.trim() !== "";
        let validBankAccount = this.state.form.bankAccount.trim() !== "";

        if (validBrandName &&
            validAddress &&
            validEmail &&
            validBank &&
            validBankAccount
        ) {
            this.setState({ isAllValidated: true });
        } else {
            this.setState({ isAllValidated: false });
        }
    }

    onSimpanHandler = (event) => {
        event.preventDefault();

        let data = JSON.stringify({
            brand_name: this.state.form.brandName,
            address: this.state.form.address,
            email: this.state.form.email,
            bank_id: this.state.form.bank,
            bank_account: this.state.form.bankAccount,
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            }
        }

        let url = lconfig.API_BASE_URL + '/v1/brand'
        axios.post(url, data, config)
            .then(function (response) {
                // Add something here
                // console.log("response : " + JSON.stringify(response.data));
            })
            .catch(function (error) {
                if (error.response != undefined) {
                    alert(error.response.data.error)
                } else {
                    alert("Simpan Button (" + error + ")")
                }
            });
    }

    render() {
        if (this.state.token === "") {
            return <Redirect to={lconfig.LOGIN_URL} />
        } else {
            return (
                <Container style={{ backgroundColor: "white" }}>
                    {this.getBank()}
                    <Row className="form-row" >
                        <h1 className="font-weight-300" >Tambah Brand</h1>
                    </Row>
                    <Row className="form-row" >
                        <p className="border-black">
                            Sebelum menambahkan brand, pastikan brand tersebut sudah sesuai dengan syarat ketentuan Gasti.
                            Semua brand yang melanggar syarat dan ketentuan akan di non-aktifkan oleh tim kami.
                    </p>
                    </Row>
                    <Form>
                        <Row>
                            <Col>
                                <Container>
                                    <Row className="form-row">
                                        <p className="h3" >Informasi Brand</p>
                                    </Row>
                                    <Row className="form-row">
                                        <Form.Group as={Row} controlId="formBrandName" className="width100">
                                            <Form.Label column md="3">Nama Brand</Form.Label>
                                            <Col md={9}>
                                                <Form.Control onChange={this.onChangeHandler} name="brandName" />
                                            </Col>
                                        </Form.Group>
                                    </Row>
                                    <Row className="form-row">
                                        <Form.Group as={Row} controlId="formAddress" className="width100">
                                            <Form.Label column md="3">Alamat</Form.Label>
                                            <Col md={9}>
                                                <Form.Control onChange={this.onChangeHandler} name="address" />
                                            </Col>
                                        </Form.Group>
                                    </Row>
                                    <Row className="form-row" style={{ borderBottom: "solid #00000029 1px", }}>
                                        <Form.Group as={Row} controlId="formEmail" className="width100">
                                            <Form.Label type="email" column md="3">Email</Form.Label>
                                            <Col md={9}>
                                                <Form.Control onChange={this.onChangeHandler} name="email" />
                                            </Col>
                                        </Form.Group>
                                    </Row>
                                    {/* ------------------------------------------- */}
                                    <Row className="form-row">
                                        <p className="h3" >Informasi Rekening</p>
                                    </Row>
                                    <Row className="form-row">
                                        <Form.Group as={Row} controlId="formBank" className="width100">
                                            <Form.Label column md="3">Nama Bank</Form.Label>
                                            <Col md={3}>
                                                {this.renderBank()}
                                            </Col>
                                        </Form.Group>
                                    </Row>
                                    <Row className="form-row" style={{ borderBottom: "solid #00000029 1px", }}>
                                        <Form.Group as={Row} controlId="formBankAccount" className="width100">
                                            <Form.Label column md="3">No. Rekening</Form.Label>
                                            <Col md={9}>
                                                <Form.Control onChange={this.onChangeHandler} name="bankAccount" />
                                            </Col>
                                        </Form.Group>
                                    </Row>
                                    {/* ------------------------------------------- */}
                                </Container>
                            </Col>
                        </Row>
                        <Row className="form-row-right" >
                            <Button variant="primary" className="button-active" >
                                Batal
                            </Button>
                            <Button variant="primary" className="button-active" >
                                Simpan & Tambah Baru
                            </Button>
                            <Button variant="primary" onClick={this.onSimpanHandler} className="button-active" >
                                Simpan
                            </Button>
                        </Row>
                    </Form>
                </Container >
            );
        }
    }
}

const mapStateToProps = (state) => ({
    ...state.windowSizeReducer,
    accountType: state.accountReducer.accountType
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AddBrandPage)
