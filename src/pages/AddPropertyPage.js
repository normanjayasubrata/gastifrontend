import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Button, Container, Col, Row, Image } from "react-bootstrap";
import axios from "axios";
import lconfig from "../config";
import "../assets/index.css";
import { warehousePic } from "../assets/images";
import { PostProperty } from "../api/property";
import BreadCrumps from "../components/BreadCrumps";

export class AddPropertyPage extends Component {
  initialState = {
    form: {
      namaGudang: "",
      nomorTelepon: "",
      alamatGudang: "",
      provinsi: "",
      kota: "",
      kecamatan: "",
      kelurahan: "",
      kodePos: "",
      layananLayananPendingin: "",
      layananLayananRak: "",
      layananlayananCCTV: "",
      layananRuangan: "",
      layananPaket: "",
      pengirimanFrequency: "",
      hariPengirimanSenin: "",
      jamOperasionalSeninDari: "",
      jamOperasionalSeninSampai: "",
      hariPengirimanSelasa: "",
      jamOperasionalSelasaDari: "",
      jamOperasionalSelasaSampai: "",
      hariPengirimanRabu: "",
      jamOperasionalRabuDari: "",
      jamOperasionalRabuSampai: "",
      hariPengirimanKamis: "",
      jamOperasionalKamisDari: "",
      jamOperasionalKamisSampai: "",
      hariPengirimanJumat: "",
      jamOperasionalJumatDari: "",
      jamOperasionalJumatSampai: "",
      hariPengirimanSabtu: "",
      jamOperasionalSabtuDari: "",
      jamOperasionalSabtuSampai: "",
      hariPengirimanMinggu: "",
      jamOperasionalMingguDari: "",
      jamOperasionalMingguSampai: "",
      pengirimanLogisticInstant: "",
      pengirimanLogisticSameday: "",
      pengirimanCOD: "",
      pengirimanDropship: "",
      pengirimanRetur: "",
    },
    isAllValidated: false,
    classSenin: "none",
    classSelasa: "none",
    classRabu: "none",
    classKamis: "none",
    classJumat: "none",
    classSabtu: "none",
    classMinggu: "none",
  };

  state = {
    breadcrumps: ["Dashboard", "WMS", "Tambah Gudang"],
    pictureUploaded: [warehousePic, warehousePic],
    form: {
      namaGudang: "",
      nomorTelepon: "",
      alamatGudang: "",
      provinsi: "",
      kota: "",
      kecamatan: "",
      kelurahan: "",
      kodePos: "",
      layananLayananPendingin: "",
      layananLayananRak: "",
      layananlayananCCTV: "",
      layananRuangan: "",
      layananPaket: "",
      pengirimanFrequency: "",
      hariPengirimanSenin: "",
      jamOperasionalSeninDari: "",
      jamOperasionalSeninSampai: "",
      hariPengirimanSelasa: "",
      jamOperasionalSelasaDari: "",
      jamOperasionalSelasaSampai: "",
      hariPengirimanRabu: "",
      jamOperasionalRabuDari: "",
      jamOperasionalRabuSampai: "",
      hariPengirimanKamis: "",
      jamOperasionalKamisDari: "",
      jamOperasionalKamisSampai: "",
      hariPengirimanJumat: "",
      jamOperasionalJumatDari: "",
      jamOperasionalJumatSampai: "",
      hariPengirimanSabtu: "",
      jamOperasionalSabtuDari: "",
      jamOperasionalSabtuSampai: "",
      hariPengirimanMinggu: "",
      jamOperasionalMingguDari: "",
      jamOperasionalMingguSampai: "",
      pengirimanLogisticInstant: "",
      pengirimanLogisticSameday: "",
      pengirimanCOD: "",
      pengirimanDropship: "",
      pengirimanRetur: "",
    },
    checkSenin: false,
    checkSelasa: false,
    checkRabu: false,
    checkKamis: false,
    checkJumat: false,
    checkSabtu: false,
    checkMinggu: false,
    checkboxPengirimanCOD: false,
    checkboxPengirimanLogisticInstant: false,
    checkboxPengirimanLogisticSameDay: false,
    checkboxPengirimanDropship: false,
    checkboxPengirimanRetur: false,
    checkboxLayananLayananPendingin: false,
    checkboxLayananLayananRak: false,
    checkboxLayananlayananCCTV: false,
    radioPengirimanFrequencySatu: false,
    radioPengirimanFrequencyDua: false,
    radioPengirimanFrequencyLebihDariDua: false,
    radioLayananPaketBronze: false,
    radioLayananPaketSilver: false,
    radioLayananPaketGold: false,
    radioLayananRuanganSmall: false,
    radioLayananRuanganMedium: false,
    radioLayananRuanganLarge: false,
    isAllValidated: false,
    classSenin: "none",
    classSelasa: "none",
    classRabu: "none",
    classKamis: "none",
    classJumat: "none",
    classSabtu: "none",
    classMinggu: "none",
  };

  onChangeHandler = (event) => {
    const { id, value, type, name, checked } = event.target;
    console.log(id);
    this.setState((state) => {
      if (type === "checkbox") {
        if (checked) {
          this.state.form = {
            ...state.form,
            [name]: value,
          };
        } else {
          this.state.form = {
            ...state.form,
            [name]: "",
          };
        }
      } else {
        this.state.form = {
          ...state.form,
          [name]: value,
        };
      }

      switch (id) {
        case "checkboxHariPengirimanSenin":
          if (checked) {
            return { checkSenin: true, classSenin: "block" };
          } else {
            return { checkSenin: false, classSenin: "none" };
          }
        case "checkboxHariPengirimanSelasa":
          if (checked) {
            return { checkSelasa: true, classSelasa: "block" };
          } else {
            return { checkSelasa: false, classSelasa: "none" };
          }
        case "checkboxHariPengirimanRabu":
          if (checked) {
            return { checkRabu: true, classRabu: "block" };
          } else {
            return { checkRabu: false, classRabu: "none" };
          }
        case "checkboxHariPengirimanKamis":
          if (checked) {
            return { checkKamis: true, classKamis: "block" };
          } else {
            return { checkKamis: false, classKamis: "none" };
          }
        case "checkboxHariPengirimanJumat":
          if (checked) {
            return { checkJumat: true, classJumat: "block" };
          } else {
            return { checkJumat: false, classJumat: "none" };
          }
        case "checkboxHariPengirimanSabtu":
          if (checked) {
            return { checkSabtu: true, classSabtu: "block" };
          } else {
            return { checkSabtu: false, classSabtu: "none" };
          }
        case "checkboxHariPengirimanMinggu":
          if (checked) {
            return { checkMinggu: true, classMinggu: "block" };
          } else {
            return { checkMinggu: false, classMinggu: "none" };
          }
        case "checkboxPengirimanCOD":
          if (checked) {
            return { checkboxPengirimanCOD: true };
          } else {
            return { checkboxPengirimanCOD: false };
          }
        case "checkboxPengirimanLogisticInstant":
          if (checked) {
            return { checkboxPengirimanLogisticInstant: true };
          } else {
            return { checkboxPengirimanLogisticInstant: false };
          }
        case "checkboxPengirimanLogisticSameDay":
          if (checked) {
            return { checkboxPengirimanLogisticSameDay: true };
          } else {
            return { checkboxPengirimanLogisticSameDay: false };
          }
        case "checkboxPengirimanDropship":
          if (checked) {
            return { checkboxPengirimanDropship: true };
          } else {
            return { checkboxPengirimanDropship: false };
          }
        case "checkboxPengirimanRetur":
          if (checked) {
            return { checkboxPengirimanRetur: true };
          } else {
            return { checkboxPengirimanRetur: false };
          }
        case "checkboxLayananLayananPendingin":
          if (checked) {
            return { checkboxLayananLayananPendingin: true };
          } else {
            return { checkboxLayananLayananPendingin: false };
          }
        case "checkboxLayananLayananRak":
          if (checked) {
            return { checkboxLayananLayananRak: true };
          } else {
            return { checkboxLayananLayananRak: false };
          }
        case "checkboxLayananlayananCCTV":
          if (checked) {
            return { checkboxLayananlayananCCTV: true };
          } else {
            return { checkboxLayananlayananCCTV: false };
          }
        case "radioPengirimanFrequencySatu":
          if (checked) {
            return { radioPengirimanFrequencySatu: true };
          } else {
            return { radioPengirimanFrequencySatu: false };
          }
        case "radioPengirimanFrequencyDua":
          if (checked) {
            return { radioPengirimanFrequencyDua: true };
          } else {
            return { radioPengirimanFrequencyDua: false };
          }
        case "radioPengirimanFrequencyLebihDariDua":
          if (checked) {
            return { radioPengirimanFrequencyLebihDariDua: true };
          } else {
            return { radioPengirimanFrequencyLebihDariDua: false };
          }
        case "radioLayananPaketBronze":
          if (checked) {
            return { radioLayananPaketBronze: true };
          } else {
            return { radioLayananPaketBronze: false };
          }
        case "radioLayananPaketSilver":
          if (checked) {
            return { radioLayananPaketSilver: true };
          } else {
            return { radioLayananPaketSilver: false };
          }
        case "radioLayananPaketGold":
          if (checked) {
            return { radioLayananPaketGold: true };
          } else {
            return { radioLayananPaketGold: false };
          }
        case "radioLayananRuanganSmall":
          if (checked) {
            return { radioLayananRuanganSmall: true };
          } else {
            return { radioLayananRuanganSmall: false };
          }
        case "radioLayananRuanganMedium":
          if (checked) {
            return { radioLayananRuanganMedium: true };
          } else {
            return { radioLayananRuanganMedium: false };
          }
        case "radioLayananRuanganLarge":
          if (checked) {
            return { radioLayananRuanganLarge: true };
          } else {
            return { radioLayananRuanganLarge: false };
          }
      }
    });
    setTimeout(() => {
      this.validateAll();
    }, 100);
  };

  onClearChange = () => {
    this.setState({ form: this.initialState.form });
    const days = [
      "Senin",
      "Selasa",
      "Rabu",
      "Kamis",
      "Jumat",
      "Sabtu",
      "Minggu",
    ];
    days.map((day) => {
      this.setState({ ["class" + day]: "none", ["check" + day]: false });
    });
    const checkboxes = [
      "checkboxPengirimanCOD",
      "checkboxPengirimanLogisticInstant",
      "checkboxPengirimanLogisticSameDay",
      "checkboxPengirimanDropship",
      "checkboxPengirimanRetur",
      "checkboxLayananLayananPendingin",
      "checkboxLayananLayananRak",
      "checkboxLayananlayananCCTV",
      "radioPengirimanFrequencySatu",
      "radioPengirimanFrequencyDua",
      "radioPengirimanFrequencyLebihDariDua",
      "radioLayananPaketBronze",
      "radioLayananPaketSilver",
      "radioLayananPaketGold",
      "radioLayananRuanganSmall",
      "radioLayananRuanganMedium",
      "radioLayananRuanganLarge",
    ];
    checkboxes.map((checkbox) => {
      console.log(checkbox);
      this.setState({ [checkbox]: false });
    });
  };

  validateAll = () => {
    let validNamaGudang = this.state.form.namaGudang.trim() !== "";
    let validNomorTelepon = this.state.form.nomorTelepon.trim() !== "";
    let validAlamatGudang = this.state.form.alamatGudang.trim() !== "";
    let validProvinsi = this.state.form.provinsi.trim() !== "";
    let validKota = this.state.form.kota.trim() !== "";
    let validKecamatan = this.state.form.kecamatan.trim() !== "";
    let validKelurahan = this.state.form.kelurahan.trim() !== "";
    let validKodePos = this.state.form.kodePos.trim() !== "";
    let validPengirimanFrequency =
      this.state.form.pengirimanFrequency.trim() !== "";
    let validLayananRuangan = this.state.form.layananRuangan.trim() !== "";
    let validLayananPaket = this.state.form.layananPaket.trim() !== "";

    let validHariPengiriman = false;
    if (
      this.state.form.hariPengirimanSenin !== "" ||
      this.state.form.hariPengirimanSelasa !== "" ||
      this.state.form.hariPengirimanRabu !== "" ||
      this.state.form.hariPengirimanKamis !== "" ||
      this.state.form.hariPengirimanJumat !== "" ||
      this.state.form.hariPengirimanSabtu !== "" ||
      this.state.form.hariPengirimanMinggu !== ""
    ) {
      validHariPengiriman = true;
    }

    let validLayanan = false;
    if (
      this.state.form.layananLayananPendingin !== "" ||
      this.state.form.layananLayananRak !== "" ||
      this.state.form.layananlayananCCTV !== ""
    ) {
      validLayanan = true;
    }

    if (
      validNamaGudang &&
      validNomorTelepon &&
      validAlamatGudang &&
      validProvinsi &&
      validKota &&
      validKecamatan &&
      validKelurahan &&
      validKodePos &&
      validPengirimanFrequency &&
      validHariPengiriman &&
      validLayanan &&
      validLayananRuangan &&
      validLayananPaket
    ) {
      this.setState({ isAllValidated: true });
    } else {
      this.setState({ isAllValidated: false });
    }
  };

  onSimpanHandler = (event) => {
    event.preventDefault();
    console.log(event.target.name);

    if (!this.state.isAllValidated) {
      return alert("Lengkapi form pengisian");
    }

    let phone = this.state.form.nomorTelepon;
    if (phone.substring(0, 2) === "08") {
      phone = phone.replace("08", "+628");
    }

    // get layanan array
    let layanan = Object.entries(this.state.form).map(([key, value]) => {
      if (key.includes("layananLayanan")) {
        return value;
      }
    });

    let filteredLayanan = layanan.filter(function (el) {
      if (el !== null && el !== "") {
        return el;
      }
    });

    // get operation days
    const hariPengiriman = [];
    // get hari pengiriman Senin
    if (this.state.form.hariPengirimanSenin !== "") {
      let data = {
        opertation_day: this.state.form.hariPengirimanSenin,
        opening_hour: this.state.form.jamOperasionalSeninDari,
        closing_hour: this.state.form.jamOperasionalSeninSampai,
      };
      hariPengiriman.push(data);
    }
    // get hari pengiriman Selasa
    if (this.state.form.hariPengirimanSelasa !== "") {
      let data = {
        opertation_day: this.state.form.hariPengirimanSelasa,
        opening_hour: this.state.form.jamOperasionalSelasaDari,
        closing_hour: this.state.form.jamOperasionalSelasaSampai,
      };
      hariPengiriman.push(data);
    }
    // get hari pengiriman Rabu
    if (this.state.form.hariPengirimanRabu !== "") {
      let data = {
        opertation_day: this.state.form.hariPengirimanRabu,
        opening_hour: this.state.form.jamOperasionalRabuDari,
        closing_hour: this.state.form.jamOperasionalRabuSampai,
      };
      hariPengiriman.push(data);
    }
    // get hari pengiriman Kamis
    if (this.state.form.hariPengirimanKamis !== "") {
      let data = {
        opertation_day: this.state.form.hariPengirimanKamis,
        opening_hour: this.state.form.jamOperasionalKamisDari,
        closing_hour: this.state.form.jamOperasionalKamisSampai,
      };
      hariPengiriman.push(data);
    }
    // get hari pengiriman Jumat
    if (this.state.form.hariPengirimanJumat !== "") {
      let data = {
        opertation_day: this.state.form.hariPengirimanJumat,
        opening_hour: this.state.form.jamOperasionalJumatDari,
        closing_hour: this.state.form.jamOperasionalJumatSampai,
      };
      hariPengiriman.push(data);
    }
    // get hari pengiriman Sabtu
    if (this.state.form.hariPengirimanSabtu !== "") {
      let data = {
        opertation_day: this.state.form.hariPengirimanSabtu,
        opening_hour: this.state.form.jamOperasionalSabtuDari,
        closing_hour: this.state.form.jamOperasionalSabtuSampai,
      };
      hariPengiriman.push(data);
    }
    // get hari pengiriman Minggu
    if (this.state.form.hariPengirimanMinggu !== "") {
      let data = {
        opertation_day: this.state.form.hariPengirimanMinggu,
        opening_hour: this.state.form.jamOperasionalMingguDari,
        closing_hour: this.state.form.jamOperasionalMingguSampai,
      };
      hariPengiriman.push(data);
    }

    // get delivery logistics
    let deliveryLogistics = Object.entries(this.state.form).map(
      ([key, value]) => {
        if (key.includes("pengirimanLogistic")) {
          return value;
        }
      }
    );

    let filteredDeliveryLogistics = deliveryLogistics.filter(function (el) {
      if (el !== null && el !== "") {
        return el;
      }
    });

    // set variable cod
    let cod = false;
    if (this.state.form.pengirimanCOD !== "") {
      cod = true;
    }

    // set variable dropship
    let dropship = false;
    if (this.state.form.pengirimanDropship !== "") {
      dropship = true;
    }

    // set variable retur
    let retur = false;
    if (this.state.form.pengirimanRetur !== "") {
      retur = true;
    }

    let data = JSON.stringify({
      property_name: this.state.form.namaGudang,
      phone: phone,
      address: this.state.form.alamatGudang,
      province: this.state.form.provinsi,
      city: this.state.form.kota,
      district: this.state.form.kecamatan,
      subdistrict: this.state.form.kelurahan,
      zipcode: parseInt(this.state.form.kodePos),
      latitude: -6.217893,
      longitude: 106.804556,
      property_size: this.state.form.layananRuangan,
      photos: ["URL1", "URL2", "URL3", "URL4"],
      services: filteredLayanan,
      service_package: this.state.form.layananRuangan,
      delivery_frequency: parseInt(this.state.form.pengirimanFrequency),
      delivery_logistics: filteredDeliveryLogistics,
      property_schedules: hariPengiriman,
      cod: cod,
      dropship: dropship,
      retur: retur,
    });

    let self = this;
    let buttonName = event.target.name;

    PostProperty(data)
      .then(function (response) {
        console.log("response : " + JSON.stringify(response.data));
        console.log(buttonName);
        if (buttonName == "saveRedirect") {
          self.onClearChange();
          self.props.history.push("/gudang");
        } else {
          self.onClearChange();
        }
      })
      .catch(function (error) {
        console.log(JSON.stringify(error.response.data));
      });
  };

  renderPictureUploaded = () => {
    return <Image />;
  };

  render() {
    console.log(this.state.form.layananRuangan);
    return (
      <div className="page">
        <Container>
          <BreadCrumps
            style={{ marginLeft: "3rem", marginBottom: "3rem" }}
            breadcrumbs={this.state.breadcrumps}
          />
          <Form>
            <Col>
              <Row className="page-title">
                <h1>Tambah Gudang</h1>
              </Row>
              <Row
                className="form-box"
                style={{ paddingTop: "1rem", paddingBottom: "0rem" }}
              >
                <p>
                  Sebelum menambahkan gudang, pastikan gudang tersebut sudah
                  sesuai dengan syarat ketentuan. Semua gudang yang melanggar
                  syarat dan ketentuan akan di non-aktifkan oleh tim kami.
                </p>
              </Row>
              <Row className="form-box">
                <Col>
                  <Row className="form-row form-title">
                    <h1 className="font-weight-200">Informasi Gudang</h1>
                  </Row>
                  <Row className="form-row" style={{ marginBottom: "2rem" }}>
                    {this.state.pictureUploaded.map((source, index) => (
                      <Image
                        key={index}
                        src={source}
                        className="picture-thumbnail"
                        rounded
                      />
                    ))}
                    <Button className="upload-picture">
                      + Pilih Foto Gudang
                    </Button>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formNamaGudang"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Nama Gudang
                      </Form.Label>
                      <Col md={9}>
                        <Form.Control
                          onChange={this.onChangeHandler}
                          name="namaGudang"
                          value={this.state.form.namaGudang}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formNomorTelepon"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Nomor Telepon
                      </Form.Label>
                      <Col md={9}>
                        {" "}
                        <Form.Control
                          onChange={this.onChangeHandler}
                          name="nomorTelepon"
                          value={this.state.form.nomorTelepon}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                </Col>
              </Row>
              <Row className="form-box">
                <Col>
                  <Row className="form-row">
                    <h1 className="font-weight-200">Informasi Lokasi</h1>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formAlamatGudang"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Alamat Gudang
                      </Form.Label>
                      <Col md={9}>
                        <Form.Control
                          onChange={this.onChangeHandler}
                          name="alamatGudang"
                          value={this.state.form.alamatGudang}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formProvinsi"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Provinsi
                      </Form.Label>
                      <Col md={9}>
                        <Form.Control
                          onChange={this.onChangeHandler}
                          name="provinsi"
                          value={this.state.form.provinsi}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formKota"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Kota
                      </Form.Label>
                      <Col md={9}>
                        <Form.Control
                          onChange={this.onChangeHandler}
                          name="kota"
                          value={this.state.form.kota}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formKecamatan"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Kecamatan
                      </Form.Label>
                      <Col md={9}>
                        <Form.Control
                          onChange={this.onChangeHandler}
                          name="kecamatan"
                          value={this.state.form.kecamatan}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formKelurahan"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Kelurahan
                      </Form.Label>
                      <Col md={9}>
                        <Form.Control
                          onChange={this.onChangeHandler}
                          name="kelurahan"
                          value={this.state.form.kelurahan}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formKodePos"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Kode Pos
                      </Form.Label>
                      <Col md={9}>
                        <Form.Control
                          onChange={this.onChangeHandler}
                          name="kodePos"
                          value={this.state.form.kodePos}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                </Col>
              </Row>

              <Row className="form-box">
                <Col>
                  <Row className="form-row">
                    <h1 className="font-weight-200">Layanan</h1>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formLayananLayanan"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Layanan yang tersedia
                      </Form.Label>
                      <Col md={3}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Lemari Pendingin"
                          type="checkbox"
                          value="PENDINGIN"
                          name="layananLayananPendingin"
                          id="checkboxLayananLayananPendingin"
                          checked={this.state.checkboxLayananLayananPendingin}
                        />
                      </Col>
                      <Col md={3}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Rak Penyimpanan"
                          type="checkbox"
                          value="RAK"
                          name="layananLayananRak"
                          id="checkboxLayananLayananRak"
                          checked={this.state.checkboxLayananLayananRak}
                        />
                      </Col>
                      <Col md={3}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="CCTV"
                          type="checkbox"
                          value="CCTV"
                          name="layananLayananCCTV"
                          id="checkboxLayananlayananCCTV"
                          checked={this.state.checkboxLayananlayananCCTV}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formLayananRuangan"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Ruangan yang tersedia
                      </Form.Label>
                      <Col md={3}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Small"
                          type="radio"
                          value="SMALL"
                          name="layananRuangan"
                          id="radioLayananRuanganSmall"
                          checked={this.state.radioLayananRuanganSmall}
                        />
                        <Form.Text className="text-muted">
                          Ukuran: 0 M2 - 12 M2
                        </Form.Text>
                      </Col>
                      <Col md={3}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Medium"
                          type="radio"
                          value="MEDIUM"
                          name="layananRuangan"
                          id="radioLayananRuanganMedium"
                          checked={this.state.radioLayananRuanganMedium}
                        />
                        <Form.Text className="text-muted">
                          Ukuran: 12 M2 - 60 M2
                        </Form.Text>
                      </Col>
                      <Col md={3}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Large"
                          type="radio"
                          value="LARGE"
                          name="layananRuangan"
                          id="radioLayananRuanganLarge"
                          checked={this.state.radioLayananRuanganLarge}
                        />
                        <Form.Text className="text-muted">
                          Ukuran: 60 M2 - 120 M2
                        </Form.Text>
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formLayananPaket"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Paket yang tersedia
                      </Form.Label>
                      <Col md={3}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Bronze"
                          type="radio"
                          name="layananPaket"
                          value="BRONZE"
                          id="radioLayananPaketBronze"
                          checked={this.state.radioLayananPaketBronze}
                        />
                        <Form.Text className="text-muted">
                          Ukuran: 0 KG - 5 KG
                        </Form.Text>
                        <Form.Text className="text-muted">
                          Volume: 0 L - 60 L
                        </Form.Text>
                        <Form.Text className="text-muted">
                          Harga: Rp. 1.000.000,00
                        </Form.Text>
                      </Col>
                      <Col md={3}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Silver"
                          type="radio"
                          name="layananPaket"
                          value="SILVER"
                          id="radioLayananPaketSilver"
                          checked={this.state.radioLayananPaketSilver}
                        />
                        <Form.Text className="text-muted">
                          Ukuran: 5 KG - 40 KG
                        </Form.Text>
                        <Form.Text className="text-muted">
                          Volume: 60 L - 240 L
                        </Form.Text>
                        <Form.Text className="text-muted">
                          Harga: Rp. 2.000.000,00
                        </Form.Text>
                      </Col>
                      <Col md={3}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Gold"
                          type="radio"
                          name="layananPaket"
                          value="GOLD"
                          id="radioLayananPaketGold"
                          checked={this.state.radioLayananPaketGold}
                        />
                        <Form.Text className="text-muted">
                          Ukuran: 40 KG - 80 KG
                        </Form.Text>
                        <Form.Text className="text-muted">
                          Volume: 240 L - 500 L
                        </Form.Text>
                        <Form.Text className="text-muted">
                          Harga: Rp. 3.000.000,00
                        </Form.Text>
                      </Col>
                    </Form.Group>
                  </Row>
                </Col>
              </Row>

              <Row className="form-box">
                <Col>
                  <Row className="form-row">
                    <h1 className="font-weight-200">Informasi Pengiriman</h1>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formPengirimanFrequency"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Pengiriman dalam sehari
                      </Form.Label>
                      <Col md={2}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="1 kali"
                          value="1"
                          type="radio"
                          name="pengirimanFrequency"
                          id="radioPengirimanFrequencySatu"
                          checked={this.state.radioPengirimanFrequencySatu}
                        />
                      </Col>
                      <Col md={2}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="2 kali"
                          value="2"
                          type="radio"
                          name="pengirimanFrequency"
                          id="radioPengirimanFrequencyDua"
                          checked={this.state.radioPengirimanFrequencyDua}
                        />
                      </Col>
                      <Col md={2}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Lebih dari 2 kali"
                          value="99"
                          type="radio"
                          name="pengirimanFrequency"
                          id="radioPengirimanFrequencyLebihDariDua"
                          checked={
                            this.state.radioPengirimanFrequencyLebihDariDua
                          }
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formHariPengirimanSenin"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Hari Pengiriman
                      </Form.Label>
                      <Col md={2}>
                        <Form.Check
                          inline
                          label="Senin"
                          onChange={this.onChangeHandler}
                          value="SENIN"
                          type="checkbox"
                          name="hariPengirimanSenin"
                          id="checkboxHariPengirimanSenin"
                          checked={this.state.checkSenin}
                        />
                      </Col>
                      <Col md={7} style={{ display: this.state.classSenin }}>
                        <div className="row width100">
                          <Form.Label column md="4">
                            Jam Operasional
                          </Form.Label>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalSeninDari"
                              value={this.state.form.jamOperasionalSeninDari}
                            />
                          </Col>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalSeninSampai"
                              value={this.state.form.jamOperasionalSeninSampai}
                            />
                          </Col>
                        </div>
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formHariPengirimanSelasa"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        {" "}
                      </Form.Label>
                      <Col md={2}>
                        <Form.Check
                          inline
                          label="Selasa"
                          onChange={this.onChangeHandler}
                          value="SELASA"
                          type="checkbox"
                          name="hariPengirimanSelasa"
                          id="checkboxHariPengirimanSelasa"
                          checked={this.state.checkSelasa}
                        />
                      </Col>
                      <Col md={7} style={{ display: this.state.classSelasa }}>
                        <div className="row width100">
                          <Form.Label column md="4">
                            Jam Operasional
                          </Form.Label>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalSelasaDari"
                              value={this.state.form.jamOperasionalSelasaDari}
                            />
                          </Col>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalSelasaSampai"
                              value={this.state.form.jamOperasionalSelasaSampai}
                            />
                          </Col>
                        </div>
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formHariPengirimanRabu"
                      className="width100"
                    >
                      <Form.Label column md="3"></Form.Label>
                      <Col md={2}>
                        <Form.Check
                          inline
                          label="Rabu"
                          onChange={this.onChangeHandler}
                          value="RABU"
                          type="checkbox"
                          name="hariPengirimanRabu"
                          id="checkboxHariPengirimanRabu"
                          checked={this.state.checkRabu}
                        />
                      </Col>
                      <Col md={7} style={{ display: this.state.classRabu }}>
                        <div className="row width100">
                          <Form.Label column md="4">
                            Jam Operasional
                          </Form.Label>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalRabuDari"
                              value={this.state.form.jamOperasionalRabuDari}
                            />
                          </Col>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalRabuSampai"
                              value={this.state.form.jamOperasionalRabuSampai}
                            />
                          </Col>
                        </div>
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formHariPengirimanKamis"
                      className="width100"
                    >
                      <Form.Label column md="3"></Form.Label>
                      <Col md={2}>
                        <Form.Check
                          inline
                          label="Kamis"
                          onChange={this.onChangeHandler}
                          value="KAMIS"
                          type="checkbox"
                          name="hariPengirimanKamis"
                          id="checkboxHariPengirimanKamis"
                          checked={this.state.checkKamis}
                        />
                      </Col>
                      <Col md={7} style={{ display: this.state.classKamis }}>
                        <div className="row width100">
                          <Form.Label column md="4">
                            Jam Operasional
                          </Form.Label>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalKamisDari"
                              value={this.state.form.jamOperasionalKamisDari}
                            />
                          </Col>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalKamisSampai"
                              value={this.state.form.jamOperasionalKamisSampai}
                            />
                          </Col>
                        </div>
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formHariPengirimanJumat"
                      className="width100"
                    >
                      <Form.Label column md="3"></Form.Label>
                      <Col md={2}>
                        <Form.Check
                          inline
                          label="Jumat"
                          onChange={this.onChangeHandler}
                          value="JUMAT"
                          type="checkbox"
                          name="hariPengirimanJumat"
                          id="checkboxHariPengirimanJumat"
                          checked={this.state.checkJumat}
                        />
                      </Col>
                      <Col md={7} style={{ display: this.state.classJumat }}>
                        <div className="row width100">
                          <Form.Label column md="4">
                            Jam Operasional
                          </Form.Label>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalJumatDari"
                              value={this.state.form.jamOperasionalJumatDari}
                            />
                          </Col>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalJumatSampai"
                              value={this.state.form.jamOperasionalJumatSampai}
                            />
                          </Col>
                        </div>
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formHariPengirimanSabtu"
                      className="width100"
                    >
                      <Form.Label column md="3"></Form.Label>
                      <Col md={2}>
                        <Form.Check
                          inline
                          label="Sabtu"
                          onChange={this.onChangeHandler}
                          value="SABTU"
                          type="checkbox"
                          name="hariPengirimanSabtu"
                          id="checkboxHariPengirimanSabtu"
                          checked={this.state.checkSabtu}
                        />
                      </Col>
                      <Col md={7} style={{ display: this.state.classSabtu }}>
                        <div className="row width100">
                          <Form.Label column md="4">
                            Jam Operasional
                          </Form.Label>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalSabtuDari"
                              value={this.state.form.jamOperasionalSabtuDari}
                            />
                          </Col>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalSabtuSampai"
                              value={this.state.form.jamOperasionalSabtuSampai}
                            />
                          </Col>
                        </div>
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formHariPengirimanMinggu"
                      className="width100"
                    >
                      <Form.Label column md="3"></Form.Label>
                      <Col md={2}>
                        <Form.Check
                          inline
                          label="Minggu"
                          onChange={this.onChangeHandler}
                          value="MINGGU"
                          type="checkbox"
                          name="hariPengirimanMinggu"
                          id="checkboxHariPengirimanMinggu"
                          checked={this.state.checkMinggu}
                        />
                      </Col>
                      <Col md={7} style={{ display: this.state.classMinggu }}>
                        <div className="row width100">
                          <Form.Label column md="4">
                            Jam Operasional
                          </Form.Label>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalMingguDari"
                              value={this.state.form.jamOperasionalMingguDari}
                            />
                          </Col>
                          <Col md={4}>
                            <Form.Control
                              onChange={this.onChangeHandler}
                              name="jamOperasionalMingguSampai"
                              value={this.state.form.jamOperasionalMingguSampai}
                            />
                          </Col>
                        </div>
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formPengirimanLogistik"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Partner Logistik
                      </Form.Label>
                      <Col md={2}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Instant Courier"
                          type="checkbox"
                          value="INSTANT"
                          name="pengirimanLogisticInstant"
                          id="checkboxPengirimanLogisticInstant"
                          checked={this.state.checkboxPengirimanLogisticInstant}
                        />
                      </Col>
                      <Col md={3}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Same Day Delivery"
                          type="checkbox"
                          value="SAMEDAY"
                          name="pengirimanLogisticSameday"
                          id="checkboxPengirimanLogisticSameDay"
                          checked={this.state.checkboxPengirimanLogisticSameDay}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formPengirimanCOD"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Cash On Delivery?
                      </Form.Label>
                      <Col md={2}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Tersedia"
                          type="checkbox"
                          name="pengirimanCOD"
                          id="checkboxPengirimanCOD"
                          checked={this.state.checkboxPengirimanCOD}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formPengirimanDropship"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Dropship?
                      </Form.Label>
                      <Col md={2}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Tersedia"
                          type="checkbox"
                          name="pengirimanDropship"
                          id="checkboxPengirimanDropship"
                          checked={this.state.checkboxPengirimanDropship}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                  <Row className="form-row">
                    <Form.Group
                      as={Row}
                      controlId="formPengirimanRetur"
                      className="width100"
                    >
                      <Form.Label column md="3">
                        Retur?
                      </Form.Label>
                      <Col md={2}>
                        <Form.Check
                          onChange={this.onChangeHandler}
                          inline
                          label="Tersedia"
                          type="checkbox"
                          name="pengirimanRetur"
                          id="checkboxPengirimanRetur"
                          checked={this.state.checkboxPengirimanRetur}
                        />
                      </Col>
                    </Form.Group>
                  </Row>
                </Col>
              </Row>

              <Row
                className="justify-content-end"
                style={{ marginRight: "1.5rem" }}
              >
                <Button onClick={this.onClearChange} className="button-white">
                  {" "}
                  Batal{" "}
                </Button>
                <Button
                  name="save"
                  onClick={this.onSimpanHandler}
                  className="button-white"
                >
                  {" "}
                  Simpan & Tambah Baru{" "}
                </Button>
                <Button
                  name="saveRedirect"
                  onClick={this.onSimpanHandler}
                  className="button-green"
                >
                  {" "}
                  Simpan{" "}
                </Button>
              </Row>
            </Col>
          </Form>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.windowSizeReducer,
  accountType: state.accountReducer.accountType,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddPropertyPage);
