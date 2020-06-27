import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Form, Button, Container, Col, Row, InputGroup, DropdownButton, Dropdown, FormControl } from "react-bootstrap";
import { Redirect } from "react-router-dom";
import axios from 'axios';

import "../assets/index.css"
import lconfig from "../config"
import { getToken, hasToken } from "../store/localstorage/token";

export class AddProductPage extends Component {
    state = {
        form: {
            brand: "",
            namaProduct: "",
            kategoriProduct: "",
            minimumPemesanan: "",
            hargaProduct: "",
            stockType: "",
            stockProduct: "",
            commerceTokopedia: "",
            commerceOlx: "",
            commerceBukalapak: "",
            commerceLazada: "",
            skuProduct: "",
            satuanBeratProduct: "",
            beratProduct: "",
            satuanVolumeProduct: "",
            volumePanjang: "",
            volumeLebar: "",
            volumeTinggi: "",
            handlingBarangAmplop: "",
            handlingBarangKayu: "",
            handlingBarangBubble: "",
            isKadaluarsa: false,
            kadaluarsa: ""
        },
        classKadaluarsa: "none",
        brands: "",
        needGetBrand: true,
        isAllValidated: false,
        token: getToken()
    };

    getBrand() {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            }
        }

        let url = lconfig.API_BASE_URL + '/v1/brand'
        let self = this
        if (this.state.needGetBrand) {
            axios.get(url, config)
                .then(function (response) {
                    self.setState({
                        brands: response.data.brands,
                        needGetBrand: false
                    })
                })
                .catch(function (error) {
                    if (error.response != undefined) {
                        alert(error.response.data.error)
                    } else {
                        alert("Get Brand (" + error + ")")
                    }
                });
        }
    }

    renderBrand() {
        if (this.state.brands != "") {
            const brands = this.state.brands.map(
                (brand) =>
                    <option value={brand.brand_id}>{brand.brand_name}</option>
            );

            return (
                <Form.Control as="select" onChange={this.onChangeHandler} name="brand" >
                    <option value="0">Pilih brand</option>
                    {brands}
                </Form.Control>
            );
        } else {
            return (
                <Form.Control disabled as="select" onChange={this.onChangeHandler} name="brand" >
                    <option value="">Brand Not Found</option>
                </Form.Control>
            )
        }
    }

    onChangeHandler = (event) => {
        const { id, value, type, name, checked } = event.target;
        console.log(name)
        console.log(value)
        this.setState((state) => {
            if (type === "checkbox") {
                if (checked) {
                    this.state.form = {
                        ...state.form,
                        [name]: value,
                    }
                } else {
                    this.state.form = {
                        ...state.form,
                        [name]: "",
                    }
                }
            } else {
                this.state.form = {
                    ...state.form,
                    [name]: value,
                }
            }

            switch (id) {
                case 'checkboxIsKadaluarsa':
                    if (checked) {
                        this.state.form = {
                            ...state.form,
                            [name]: true,
                        }

                        return { classKadaluarsa: "block" };
                    } else {
                        return { classKadaluarsa: "none" };
                    }
            }
        });
        setTimeout(() => {
            this.validateAll();
        }, 100);
    };

    validateAll = () => {
        let validBrand = this.state.form.brand.trim() !== "0";
        let validNamaProduct = this.state.form.namaProduct.trim() !== "";
        let validKategoriProduct = this.state.form.kategoriProduct.trim() !== "";
        let validMinimumPemesanan = this.state.form.minimumPemesanan.trim() !== "";
        let validHargaProduct = this.state.form.hargaProduct.trim() !== "";
        let validStockType = this.state.form.stockType.trim() !== "";
        let validStockProduct = true;
        let validSkuProduct = this.state.form.skuProduct.trim() !== "";
        let validSatuanBeratProduct = this.state.form.satuanBeratProduct.trim() !== "";
        let validBeratProduct = this.state.form.beratProduct.trim() !== "";
        let validSatuanVolumeProduct = this.state.form.satuanVolumeProduct.trim() !== "";
        let validVolumePanjang = this.state.form.volumePanjang.trim() !== "";
        let validVolumeLebar = this.state.form.volumeLebar.trim() !== "";
        let validVolumeTinggi = this.state.form.volumeTinggi.trim() !== "";
        let validKadaluarsa = true;

        if (validStockType) {
            validStockProduct = this.state.form.stockProduct.trim() !== "";
        }

        let validCommerce = false;
        if (this.state.form.commerceTokopedia !== "" ||
            this.state.form.commerceOlx !== "" ||
            this.state.form.commerceBukalapak !== "" ||
            this.state.form.commerceLazada !== ""
        ) {
            validCommerce = true
        }

        let validHandlingBarang = false;
        if (this.state.form.handlingBarangAmplop !== "" ||
            this.state.form.handlingBarangKayu !== "" ||
            this.state.form.handlingBarangBubble !== ""
        ) {
            validHandlingBarang = true
        }

        if (this.state.form.isKadaluarsa) {
            validKadaluarsa = this.state.form.kadaluarsa.trim() !== "";
        }

        if (validBrand &&
            validNamaProduct &&
            validKategoriProduct &&
            validMinimumPemesanan &&
            validHargaProduct &&
            validStockProduct &&
            validCommerce &&
            validSkuProduct &&
            validSatuanBeratProduct &&
            validBeratProduct &&
            validSatuanVolumeProduct &&
            validVolumePanjang &&
            validVolumeLebar &&
            validVolumeTinggi &&
            validHandlingBarang &&
            validKadaluarsa
        ) {
            this.setState({ isAllValidated: true });
        } else {
            this.setState({ isAllValidated: false });
        }
    }

    onSimpanHandler = (event) => {
        event.preventDefault();

        if (!this.state.isAllValidated) {
            return alert("Lengkapi form pengisian");
        }

        // get commerce array
        let commerce = Object.entries(this.state.form).map(([key, value]) => {
            if (key.includes("commerce")) {
                return (
                    value
                );
            }
        })

        let filteredCommerce = commerce.filter(function (el) {
            if (el !== null && el !== "") {
                return el;
            }
        })

        // get handlingBarang array
        let handlingBarang = Object.entries(this.state.form).map(([key, value]) => {
            if (key.includes("handlingBarang")) {
                return (
                    value
                );
            }
        })

        let filteredHandlingBarang = handlingBarang.filter(function (el) {
            if (el !== null && el !== "") {
                return el;
            }
        })

        let kadaluarsa = ""
        if (this.state.form.isKadaluarsa) {
            kadaluarsa = this.state.form.kadaluarsa
        }

        let stock = 9999999
        if (this.state.form.stockType == "terbatas") {
            stock = this.state.form.stockProduct
        }

        let data = JSON.stringify({
            brand_id: parseInt(this.state.form.brand),
            product_name: this.state.form.namaProduct,
            product_category: this.state.form.kategoriProduct,
            stock: parseInt(stock),
            price: parseInt(this.state.form.hargaProduct),
            width: parseInt(this.state.form.volumePanjang),
            length: parseInt(this.state.form.volumeLebar),
            height: parseInt(this.state.form.volumeTinggi),
            length_measurement: this.state.form.satuanVolumeProduct,
            weight: parseInt(this.state.form.beratProduct),
            weight_measurement: this.state.form.satuanBeratProduct,
            sku: this.state.form.skuProduct,
            commerces: filteredCommerce,
            expired: kadaluarsa,
            handlings: filteredHandlingBarang,
            minimum_order: parseInt(this.state.form.minimumPemesanan)
        })

        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': this.state.token
            }
        }

        let url = lconfig.API_BASE_URL + '/v1/product'
        axios.post(url, data, config)
            .then(function (response) {
                console.log("response : " + JSON.stringify(response.data));
                // TO DO NORMAN
                // ADD redirect page
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
        // if (this.state.token === "") {
        //     return <Redirect to={lconfig.LOGIN_URL} />
        // } else {
        return (
            <Container style={{ backgroundColor: "white" }}>
                {this.getBrand()}
                <Row className="form-row" >
                    <h1 className="font-weight-300" >Tambah Product</h1>
                </Row>
                <Row className="form-row" >
                    <p className="border-black">
                        Sebelum menambahkan product, pastikan product tersebut sudah sesuai dengan syarat ketentuan Tokopedia.
                        Semua gudang yang melanggar syarat dan ketentuan akan di non-aktifkan oleh tim kami.
                    </p>
                </Row>
                <Form>
                    <Row>
                        <Col>
                            <Container>
                                <Row className="form-row">
                                    <p style={{ fontWeight: "bold" }} >Informasi Product</p>
                                </Row>
                                <Row className="form-row" style={{ borderBottom: "solid #00000029 1px", }}>
                                    <Form.Group as={Row} controlId="formBrand" className="width100">
                                        <Form.Label column md="3">Pilih Brand</Form.Label>
                                        <Col md={9}>
                                            {this.renderBrand()}
                                        </Col>
                                    </Form.Group>
                                </Row>
                                {/* ------------------------------------------- */}
                                <Row className="form-row">
                                    <p style={{ fontWeight: "bold" }} >Informasi Product</p>
                                </Row>
                                <Row className="form-row">
                                    <Col md={2}>
                                        <div className="rounded" style={{ border: "1px solid black", width: "100px", height: "100px" }}></div>
                                    </Col>
                                    <Col md={2}>
                                        <div className="rounded" style={{ border: "1px solid black", width: "100px", height: "100px" }}></div>
                                    </Col>
                                </Row>
                                <Row className="form-row">
                                    <Form.Group as={Row} controlId="formNamaProduct" className="width100">
                                        <Form.Label column md="3">Nama Product</Form.Label>
                                        <Col md={9}>
                                            <Form.Control onChange={this.onChangeHandler} name="namaProduct" />
                                        </Col>
                                    </Form.Group>
                                </Row>
                                <Row className="form-row" style={{ borderBottom: "solid #00000029 1px", }}>
                                    <Form.Group as={Row} controlId="formKategoriProduct" className="width100">
                                        <Form.Label column md="3">Kategori</Form.Label>
                                        <Col md={9}>
                                            <Form.Control as="select" onChange={this.onChangeHandler} name="kategoriProduct" >
                                                <option>Pilih Kategori</option>
                                                <option>FASHION</option>
                                                <option>FROZEN FOOD</option>
                                                <option>FRESH GROCERY</option>
                                                <option>SNACK</option>
                                                <option>BEAUTY CARE</option>
                                                <option>OTHER</option>
                                            </Form.Control>
                                        </Col>
                                    </Form.Group>
                                </Row>
                                {/* ------------------------------------------- */}
                                <Row className="form-row">
                                    <p style={{ fontWeight: "bold" }} >Harga Product</p>
                                </Row>
                                <Row className="form-row">
                                    <Form.Group as={Row} controlId="formMinimumPemesanan" className="width100">
                                        <Form.Label column md="3">Minimum Pemesanan</Form.Label>
                                        <Col md={9}>
                                            <Form.Control onChange={this.onChangeHandler} name="minimumPemesanan" />
                                        </Col>
                                    </Form.Group>
                                </Row>
                                <Row className="form-row" style={{ borderBottom: "solid #00000029 1px", }} >
                                    <Form.Group as={Row} controlId="formHargaProduct" className="width100">
                                        <Form.Label column md="3">Harga</Form.Label>
                                        <Form.Label column md="1">Rp.</Form.Label>
                                        <Col md={8}>
                                            <Form.Control onChange={this.onChangeHandler} name="hargaProduct" />
                                        </Col>
                                    </Form.Group>
                                </Row>
                                {/* ------------------------------------------- */}
                                <Row className="form-row">
                                    <p style={{ fontWeight: "bold" }} >Stock Product</p>
                                </Row>
                                <Row className="form-row">
                                    <Form.Group as={Row} controlId="formStockTypeTerbatas" className="width100">
                                        <Form.Label column md="3">Status Product</Form.Label>
                                        <Col md={9}>
                                            <Form.Check onChange={this.onChangeHandler} inline label="Stock Terbatas" type="radio" value="terbatas" name="stockType" id="radioStockTypeTerbatas" />
                                            <Form.Label column>Jumlah</Form.Label>
                                            <Form.Control onChange={this.onChangeHandler} name="stockProduct" />
                                        </Col>
                                    </Form.Group>
                                </Row>
                                <Row className="form-row">
                                    <Form.Group as={Row} controlId="formStockTypeTidakTerbatas" className="width100">
                                        <Form.Label column md="3"></Form.Label>
                                        <Col md={9}>
                                            <Form.Check onChange={this.onChangeHandler} inline label="Selalu Ada" type="radio" value="tidakTerbatas" name="stockType" id="radioStockTypeTidakTerbatas" />
                                        </Col>
                                    </Form.Group>
                                </Row>
                                <Row className="form-row">
                                    <Form.Group as={Row} controlId="formCommerce" className="width100">
                                        <Form.Label column md="3">Dijual di ecommerce</Form.Label>
                                        <Col md={2}>
                                            <Form.Check onChange={this.onChangeHandler} inline label="Tokopedia" type="checkbox" value="TOKOPEDIA" name="commerceTokopedia" id="checkboxCommerceTokopedia" />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Check onChange={this.onChangeHandler} inline label="OLX" type="checkbox" value="OLX" name="commerceOlx" id="checkboxCommerceOlx" />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Check onChange={this.onChangeHandler} inline label="Bukalapak" type="checkbox" value="BUKALAPAK" name="commerceBukalapak" id="checkboxCommerceBukalapak" />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Check onChange={this.onChangeHandler} inline label="Lazada" type="checkbox" value="LAZADA" name="commerceLazada" id="checkboxCommerceLazada" />
                                        </Col>
                                    </Form.Group>
                                </Row>
                                <Row className="form-row" style={{ borderBottom: "solid #00000029 1px", }}>
                                    <Form.Group as={Row} controlId="formSKU" className="width100">
                                        <Form.Label column md="3">SKU (Stock Keeping Unit)</Form.Label>
                                        <Col md={9}>
                                            <Form.Control onChange={this.onChangeHandler} name="skuProduct" />
                                        </Col>
                                    </Form.Group>
                                </Row>
                                {/* ------------------------------------------- */}
                                <Row className="form-row">
                                    <p style={{ fontWeight: "bold" }} >Dimensi Product</p>
                                </Row>
                                <Row className="form-row">
                                    <Form.Group as={Row} controlId="formBerat" className="width100">
                                        <Form.Label column md="3">Berat</Form.Label>
                                        <Col md={3}>
                                            <Form.Control as="select" onChange={this.onChangeHandler} name="satuanBeratProduct" >
                                                <option>Pilih Satuan</option>
                                                <option value="KG">Kilogram (Kg)</option>
                                                <option value="G">Gram (G)</option>
                                                <option value="L">Liter (L)</option>
                                            </Form.Control>
                                        </Col>
                                        <Col md={6}>
                                            <Form.Control onChange={this.onChangeHandler} name="beratProduct" />
                                        </Col>
                                    </Form.Group>
                                </Row>
                                <Row className="form-row" style={{ borderBottom: "solid #00000029 1px", }}>
                                    <Form.Group as={Row} controlId="formVolume" className="width100">
                                        <Form.Label column md="3">Volume</Form.Label>
                                        <Col md={3}>
                                            <Form.Control as="select" onChange={this.onChangeHandler} name="satuanVolumeProduct" >
                                                <option>Pilih Satuan</option>
                                                <option value="KM">Kilometer (Km)</option>
                                                <option value="M">Meter (M)</option>
                                                <option value="CM">Centimeter (Cm)</option>
                                            </Form.Control>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control onChange={this.onChangeHandler} name="volumePanjang" />
                                            <Form.Text className="text-muted">
                                                Panjang
                                            </Form.Text>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control onChange={this.onChangeHandler} name="volumeLebar" />
                                            <Form.Text className="text-muted">
                                                Lebar
                                            </Form.Text>
                                        </Col>
                                        <Col md={2}>
                                            <Form.Control onChange={this.onChangeHandler} name="volumeTinggi" />
                                            <Form.Text className="text-muted">
                                                Tinggi
                                            </Form.Text>
                                        </Col>
                                    </Form.Group>
                                </Row>
                                {/* ------------------------------------------- */}
                                <Row className="form-row">
                                    <p style={{ fontWeight: "bold" }} >Handling Barang</p>
                                </Row>
                                <Row className="form-row" style={{ borderBottom: "solid #00000029 1px", }}>
                                    <Form.Group as={Row} controlId="formHandlingBarang" className="width100">
                                        <Form.Label column md="3">Jenis Packaging</Form.Label>
                                        <Col md={2}>
                                            <Form.Check onChange={this.onChangeHandler} inline label="Amplop" value="AMPLOP" type="checkbox" name="handlingBarangAmplop" id="checkboxHandlingBarangAmplop" />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Check onChange={this.onChangeHandler} inline label="Kotak Kayu" value="KOTAK KAYU" type="checkbox" name="handlingBarangKayu" id="checkboxHandlingBarangKayu" />
                                        </Col>
                                        <Col md={2}>
                                            <Form.Check onChange={this.onChangeHandler} inline label="Bubble Wrap" value="BUBBLE WRAP" type="checkbox" name="handlingBarangBubble" id="checkboxHandlingBarangBubble" />
                                        </Col>
                                    </Form.Group>
                                </Row>
                                {/* ------------------------------------------- */}
                                <Row className="form-row">
                                    <p style={{ fontWeight: "bold" }} >Masa Berlaku</p>
                                </Row>
                                <Row className="form-row" style={{ borderBottom: "solid #00000029 1px", }}>
                                    <Form.Group as={Row} controlId="formKadaluarsa" className="width100">
                                        <Form.Label column md="3">Kadaluarsa</Form.Label>
                                        <Col md={1}>
                                            <Form.Check inline label="Ya" onChange={this.onChangeHandler} type="checkbox" name="isKadaluarsa" id="checkboxIsKadaluarsa" />
                                        </Col>
                                        <Col md={2} style={{ display: this.state.classKadaluarsa }}>
                                            <Form.Control onChange={this.onChangeHandler} name="kadaluarsa" />
                                        </Col>
                                    </Form.Group>
                                </Row>
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
        // }
    }
}

const mapStateToProps = (state) => ({
    ...state.windowSizeReducer,
    accountType: state.accountReducer.accountType
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(AddProductPage)
