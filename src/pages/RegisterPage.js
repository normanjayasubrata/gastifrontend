import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from "react-router-dom";
import { Form, Button, Container, Col, Row } from "react-bootstrap";
import axios from 'axios';
import lconfig from "../config"
import { enter_auth_page } from "../store/action";
import { hasToken } from "../store/localstorage/token";

export class RegisterPage extends Component {
  state = {
    form: {
      fullname: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
      province: "",
      city: "",
      district: "",
      subdistrict: "",
      zipcode: "",
    },
    isAgree: false,
    isAllValidated: false,
  };

  onChangeHandler = (event) => {
    const { name, value, checked } = event.target;

    this.setState((state) => {
      if (name === "checkbox") {
        return { isAgree: checked };
      } else {
        return {
          form: {
            ...state.form,
            [name]: value,
          },
        };
      }
    });
    setTimeout(() => {
      this.validateAll();
    }, 100);
  };

  validateAll = () => {
    console.log(this.state.form)
    let validfullname = this.state.form.fullname.trim() !== "";
    let validemail = this.state.form.email.trim() !== "";
    let validpassword = this.state.form.password.trim() !== "";
    let validPhoneNumber = !isNaN(this.state.form.phoneNumber) && this.state.form.phoneNumber.trim() !== "";
    let validaddress = this.state.form.address.trim() !== "";
    let validprovince = this.state.form.province.trim() !== "";
    let validcity = this.state.form.city.trim() !== "";
    let validdistrict = this.state.form.district.trim() !== "";
    let validsubdistrict = this.state.form.subdistrict.trim() !== "";
    let validzipcode = this.state.form.zipcode.trim() !== "";


    if (validfullname && validemail && validpassword && validPhoneNumber && validaddress && validprovince && validcity && validdistrict && validsubdistrict && validzipcode && this.state.isAgree) {
      this.setState({ isAllValidated: true });
    } else {
      this.setState({ isAllValidated: false });
    }
  };

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
      },
      detail: {
        fullname: this.state.form.fullname,
        address: this.state.form.address,
        email: this.state.form.email,
        province: this.state.form.province,
        city: this.state.form.city,
        district: this.state.form.district,
        sub_district: this.state.form.subdistrict,
        zipcode: parseInt(this.state.form.zipcode),
        bank_id: "BCA",
        bank_account: "1234567890"
      }
    })

    let url = lconfig.API_BASE_URL + '/v1/account/register'
    axios.post(url, data, config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        if (error.response != undefined) {
          alert(JSON.stringfy(error.response.data))
        } else {
          alert("Register (" + error + ")")
        }
      });
  };

  render() {
    this.props.enterAuthPage();
    const { isNotMobile } = this.props;
    const paddingLefRight = isNotMobile ? "20rem" : "1rem";
    const inactiveButton = (
      <Button variant="primary" type="submit" style={{ width: "100%", backgroundColor: "#00000029", color: "#909090", border: "none", height: "3rem", }} disabled >
        Daftar
      </Button>
    );
    const activeButton = (
      <Button variant="primary" type="submit" style={{ width: "100%", backgroundColor: "#DF1C78", border: "none", height: "3rem", }} >
        Daftar
      </Button>
    );

    if (hasToken()) {
      return <Redirect to={lconfig.REDIRECT_URL} />
    } else {
      return (
        <div
          style={{
            paddingTop: isNotMobile ? "2rem" : "1rem",
            paddingBottom: isNotMobile ? "4rem" : "2rem",
          }}
        >
          <Container>
            <Col>
              <Row className="justify-content-center">
                <h1 style={{ fontWeight: "300" }}>Selamat Datang</h1>
              </Row>
              <Row
                className="justify-content-center"
                style={{
                  borderBottom: "solid #00000029 1px",
                  marginRight: paddingLefRight,
                  marginLeft: paddingLefRight,
                  marginBottom: "2rem",
                }}
              >
                <span>
                  <p>Sudah punya akun?</p>
                </span>
                <span>
                  <Link to="/Login">
                    <p style={{ fontWeight: "bold", color: "#DF1C78" }}>
                      Masuk
                    </p>
                  </Link>
                </span>
              </Row>
              <Row className="justify-content-center">
                <Form
                  style={{ width: "27rem" }}
                  onSubmit={this.onSubmitHandler}
                >
                  <Form.Group>
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control onChange={this.onChangeHandler} name="fullname" />
                  </Form.Group>

                  <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.onChangeHandler} name="email" />
                    <Form.Text className="text-muted">
                      Contoh: gudang@gasti.com
                    </Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      name="password"
                      onChange={this.onChangeHandler}
                      value={this.state.form.password}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Masukan No. HP</Form.Label>
                    <Form.Control
                      name="phoneNumber"
                      onChange={this.onChangeHandler}
                      style={
                        isNaN(this.state.form.phoneNumber)
                          ? { border: "solid red 2px" }
                          : null
                      }
                      value={this.state.form.phoneNumber}
                    />
                    <Form.Text
                      className={
                        !isNaN(this.state.form.phoneNumber)
                          ? "text-muted"
                          : null
                      }
                      style={
                        isNaN(this.state.form.phoneNumber)
                          ? { color: "red" }
                          : null
                      }
                    >
                      {!isNaN(this.state.form.phoneNumber)
                        ? "contoh: 081234567890"
                        : "fill with number"}
                    </Form.Text>
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Alamat Lengkap</Form.Label>
                    <Form.Control onChange={this.onChangeHandler} name="address" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Provinsi</Form.Label>
                    <Form.Control onChange={this.onChangeHandler} name="province" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Kota</Form.Label>
                    <Form.Control onChange={this.onChangeHandler} name="city" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Kecamatan</Form.Label>
                    <Form.Control onChange={this.onChangeHandler} name="district" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Kelurahan</Form.Label>
                    <Form.Control onChange={this.onChangeHandler} name="subdistrict" />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>Kode Pos</Form.Label>
                    <Form.Control onChange={this.onChangeHandler} name="zipcode" />
                  </Form.Group>

                  <Form.Group>
                    <Row className="justify-content-center">
                      <Form.Check
                        type="checkbox"
                        name="checkbox"
                        onChange={this.onChangeHandler}
                      />
                      <p>
                        {" "}
                        saya setuju dengan{" "}
                        <Link to="/termcondition">syarat & ketentuan</Link>
                      </p>
                    </Row>
                  </Form.Group>
                  {this.state.isAllValidated
                    ? activeButton
                    : inactiveButton}
                </Form>
              </Row>
            </Col>
          </Container>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  ...state.windowSizeReducer,
  accountType: state.accountReducer.accountType
})

const mapDispatchToProps = dispatch => ({
  enterAuthPage: () => dispatch(enter_auth_page())
})

export default connect(mapStateToProps, mapDispatchToProps)(RegisterPage)
