import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Container, Col, Row, Image } from "react-bootstrap";
import axios from "axios"

import lconfig from "../config"
import { enter_auth_page, exit_auth_page } from "../store/action";
import { setToken, hasToken } from "../store/localstorage/token";
import { gastiLogo } from "../assets/images";

class LoginPage extends Component {
    state = {
        form: {
            phoneNumber: "",
            password: "",
        },
        isAgree: false,
        isAllValidated: false,
        token: "",
    }

    onChangeHandler = event => {
        const { name, value, checked } = event.target

        this.setState(state => {
            if (name === "checkbox") {
                return { isAgree: checked }
            } else {
                return {
                    form: {
                        ...state.form,
                        [name]: value,
                    }
                }
            }
        })
        setTimeout(() => {
            this.validateAll();
        }, 100);
    }

    validateAll = () => {
        let validPhoneNumber = !isNaN(this.state.form.phoneNumber) && this.state.form.phoneNumber.trim() !== "";
        let validpassword = this.state.form.password.trim() !== ""

        if (validPhoneNumber && this.state.isAgree && validpassword) {
            this.setState({ isAllValidated: true })
        } else {
            this.setState({ isAllValidated: false })
        }

    }

    onSubmitHandler = (event) => {
        event.preventDefault();

        let phone = this.state.form.phoneNumber
        if (phone.substring(0, 2) === '08') {
            phone = phone.replace('08', '+628')
        }

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        let data = JSON.stringify({
            account_type: 'GUDANG',
            account_role: 'ADMIN',
            auth: {
                username: phone,
                password: this.state.form.password
            }
        })

        let url = lconfig.API_BASE_URL + '/v1/auth/login'
        let self = this
        axios.post(url, data, config)
            .then(function (response) {
                self.setState({ token: JSON.stringify(response.data.value) })
                setToken(response.data.value)
                window.location.reload(false);
            })
            .catch(function (error) {
                if (error.response != undefined) {
                    alert(JSON.stringfy(error.response.data))
                } else {
                    alert("Login (" + error + ")")
                }
            });
    }

    render() {
        const { isNotMobile } = this.props
        const paddingLefRight = isNotMobile ? "20rem" : "1rem"
        const inactiveButton = (
            <Button variant="primary" type="submit" style={{ width: "100%", backgroundColor: "#00000029", color: "#909090", border: "none", height: "3rem" }} disabled>
                Masuk
          </Button>
        )
        const activeButton = (
            <Button variant="primary" type="submit" style={{ width: "100%", backgroundColor: "#DF1C78", border: "none", height: "3rem" }} >
                Masuk
          </Button>
        )

        if (hasToken()) {
            return <Redirect to={lconfig.REDIRECT_URL} />
        } else {
            this.props.enterAuthPage();

            return (
                <div style={{ paddingTop: isNotMobile ? "12rem" : "6rem" }}>
                    <Container>
                        <Col>
                            <Row className="justify-content-center" style={{ marginBottom: "1rem" }}><Image src={gastiLogo} /></Row>
                            <Row className="justify-content-center"><h1 style={{ fontWeight: "300" }}>Selamat Datang</h1></Row>
                            <Row className="justify-content-center" style={{ borderBottom: "solid #00000029 1px", marginRight: paddingLefRight, marginLeft: paddingLefRight, marginBottom: "2rem" }}>
                                <span><p>Belum punya akun?</p></span>
                                <span><Link to="/register"><p style={{ fontWeight: "bold", color: "#DF1C78" }}>Daftar</p></Link></span>
                            </Row>
                            <Row className="justify-content-center">
                                <Form style={{ width: "27rem" }} onSubmit={this.onSubmitHandler}>
                                    <Form.Group>
                                        <Form.Label>Masukan No. HP</Form.Label>
                                        <Form.Control name="phoneNumber" onChange={this.onChangeHandler} style={isNaN(this.state.form.phoneNumber) ? { border: "solid red 2px" } : null} value={this.state.form.phoneNumber} />
                                        <Form.Text className={!isNaN(this.state.form.phoneNumber) ? "text-muted" : null} style={isNaN(this.state.form.phoneNumber) ? { color: "red" } : null}>
                                            {!isNaN(this.state.form.phoneNumber) ? "contoh: 081234567890" : "fill with number"}
                                        </Form.Text>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control type="password" name="password" onChange={this.onChangeHandler} value={this.state.form.password} />
                                    </Form.Group>
                                    <Form.Group>
                                        <Row className="justify-content-center">
                                            <Form.Check type="checkbox" name="checkbox" onChange={this.onChangeHandler} />
                                            <p> saya setuju dengan <Link to="/termcondition">syarat & ketentuan</Link></p>
                                        </Row>
                                    </Form.Group>
                                    {
                                        this.state.isAllValidated ? activeButton : inactiveButton
                                    }
                                </Form>
                            </Row>
                        </Col>
                    </Container>
                </div>
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


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
