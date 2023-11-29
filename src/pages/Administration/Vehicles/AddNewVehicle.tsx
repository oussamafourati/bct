import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Dropzone from "react-dropzone";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const AddNewVehicle = () => {
  document.title = "Create Vehicle | Bouden Coach Travel";

  const [changeColor, setChangeColor] = useState<boolean>(false);

  // function for handleClick
  const handleClick = () => {
    setChangeColor(!changeColor);
  };

  const [changeColorAC, setChangeColorAC] = useState<boolean>(false);

  // function for handleClick AC
  const handleClickAC = () => {
    setChangeColorAC(!changeColorAC);
  };

  const [changeColorFrigo, setChangeColorFrigo] = useState<boolean>(false);

  // function for handleClick Frigo
  const handleClickFrigo = () => {
    setChangeColorFrigo(!changeColorFrigo);
  };

  const [changeColorScreen, setChangeColorScreen] = useState<boolean>(false);

  // function for handleClick Screen
  const handleClickScreen = () => {
    setChangeColorScreen(!changeColorScreen);
  };

  const [selectedFiles, setselectedFiles] = useState([]);

  function handleAcceptedFiles(files: any) {
    files.map((file: any) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    );
    setselectedFiles(files);
  }

  /* Formats the size */
  function formatBytes(bytes: any, decimals = 2) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          {/* <Breadcrumb title="Create Vehicle" pageTitle="Vehicles" /> */}
          <form
            id="createproduct-form"
            autoComplete="off"
            className="needs-validation"
            noValidate
          >
            <Row>
              <Col lg={12}>
                <Card>
                  <Card.Header>
                    <div className="d-flex align-items-center">
                      <div className="flex-shrink-0 me-3">
                        <div className="avatar-sm">
                          <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                            <i className="ri-roadster-line"></i>
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="card-title mb-1">Vehicle Information</h5>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-3">
                      <Form className="tablelist-form">
                        <input type="hidden" id="id-field" />
                        <Row>
                          <Row>
                            {/* Name  == Done */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <Form.Label htmlFor="customerName-field">
                                  Name
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="customerName-field"
                                  placeholder="Enter vehicle name"
                                  required
                                />
                              </div>
                            </Col>
                            {/* Serial_Number == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Serial Number
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter serial number"
                                  required
                                />
                              </div>
                            </Col>
                            {/* Service_Date  == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Service Date
                                </Form.Label>
                                <Flatpickr
                                  className="form-control flatpickr-input"
                                  placeholder="Select Date"
                                  options={{
                                    dateFormat: "d M, Y",
                                  }}
                                />
                              </div>
                            </Col>
                            {/* Brand  == Done */}
                            <Col lg={2}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Brand
                                </Form.Label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Brand</option>
                                  <option value="Pickups">Tesla</option>
                                  <option value="Pending">BMW</option>
                                  <option value="Shipping">Ford</option>
                                  <option value="Pickups">Porsche</option>
                                  <option value="Pending">Bentley</option>
                                  <option value="Shipping">Toyota</option>
                                  <option value="Pickups">Audi</option>
                                  <option value="Pending">Jeep</option>
                                  <option value="Shipping">Jaguar</option>
                                  <option value="Pickups">Rolls-Royce</option>
                                  <option value="Pending">Mercedes-Benz</option>
                                  <option value="Infiniti ">Infiniti</option>
                                </select>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            {/* Size  == Done */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Type
                                </Form.Label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Type</option>
                                  <option value="Car">Car</option>
                                  <option value="Bus">Bus</option>
                                  <option value="Double Height">
                                    Double Height
                                  </option>
                                </select>
                              </div>
                            </Col>
                            {/* Category  == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Category
                                </Form.Label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Category</option>
                                  <option value="Standard">Standard</option>
                                  <option value="Executive">Executive</option>
                                  <option value="Luxury">Luxury</option>
                                </select>
                              </div>
                            </Col>
                            {/* Passenger_Capicity  == Not Yet */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Passenger Capicity
                                </Form.Label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Capacity</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                  <option value="6">6</option>
                                  <option value="7">7</option>
                                  <option value="8">8</option>
                                  <option value="9">9</option>
                                  <option value="10">10</option>
                                  <option value="11">11</option>
                                  <option value="12">12</option>
                                  <option value="13">13</option>
                                </select>
                              </div>
                            </Col>
                            {/* Luggage_Capacity  == Not Yet */}
                            <Col lg={2}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Luggage capacity
                                </Form.Label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Capacity</option>
                                  <option value="2">20kg</option>
                                  <option value="3">75kg</option>
                                </select>
                              </div>
                            </Col>
                          </Row>

                          <Row>
                            {/* Status  == Done */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Status
                                </Form.Label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Status</option>
                                  <option value="Active">Active</option>
                                  <option value="Inactive">Inactive</option>
                                  <option value="Reparing Mode">
                                    Reparing Mode
                                  </option>
                                  <option value="On Road">On Road</option>
                                </select>
                              </div>
                            </Col>
                            {/* Fuel_Type  == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Fuel Type
                                </label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Type</option>
                                  <option value="Pickups">Diesel</option>
                                  <option value="Pending">Gazoile</option>
                                  <option value="Shipping">Hybrid</option>
                                  <option value="Delivered">
                                    Full Electric
                                  </option>
                                </select>
                              </div>
                            </Col>
                            {/* Speed_Limit  == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Speed Limit
                                </label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Limit</option>
                                  <option value="Pickups">60mph</option>
                                  <option value="Pending">100mph</option>
                                </select>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            {/*  Ownership  == Done */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Ownership
                                </label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Owner</option>
                                  <option value="Pickups">Owned</option>
                                  <option value="Pending">Rented</option>
                                  <option value="Shipping">Leasing</option>
                                </select>
                              </div>
                            </Col>
                            {/* Owner  == Not Yet */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Owner Name
                                </label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter owner name"
                                  required
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row className="d-flex justify-content-center">
                            {/* <Col lg={2}></Col> */}
                            {/* Wifi == Done*/}
                            <Col lg={2}>
                              <div className="mb-3">
                                <button
                                  onClick={handleClick}
                                  type="button"
                                  className={`btn btn-success custom-toggle ${
                                    changeColor === false
                                      ? "btn-success"
                                      : "btn-danger"
                                  }`}
                                  data-bs-toggle="button"
                                >
                                  <span className="icon-on">
                                    <i
                                      className={`${
                                        changeColor === false
                                          ? "ri-check-line align-bottom me-1"
                                          : "ri-close-fill align-bottom me-1"
                                      }`}
                                    ></i>
                                    {changeColor === false ? "Wifi" : "No Wifi"}
                                  </span>
                                </button>
                              </div>
                            </Col>
                            {/* Frigo  == Done  */}
                            <Col lg={2}>
                              <div className="mb-3">
                                <button
                                  type="button"
                                  onClick={handleClickFrigo}
                                  className={`btn btn-success custom-toggle ${
                                    changeColorFrigo === false
                                      ? "btn-success"
                                      : "btn-danger"
                                  }`}
                                  data-bs-toggle="button"
                                >
                                  <span className="icon-on">
                                    <i
                                      className={`${
                                        changeColorFrigo === false
                                          ? "ri-check-line align-bottom me-1"
                                          : "ri-close-fill align-bottom me-1"
                                      }`}
                                    ></i>
                                    {changeColorFrigo === false
                                      ? "Fridge"
                                      : "No Fridge"}
                                  </span>
                                </button>
                              </div>
                            </Col>
                            {/* Smart_Screen  == Done */}
                            <Col lg={2}>
                              <div className="mb-3">
                                <button
                                  type="button"
                                  onClick={handleClickScreen}
                                  className={`btn btn-success custom-toggle ${
                                    changeColorScreen === false
                                      ? "btn-success"
                                      : "btn-danger"
                                  }`}
                                  data-bs-toggle="button"
                                >
                                  <span className="icon-on">
                                    <i
                                      className={`${
                                        changeColorScreen === false
                                          ? "ri-check-line align-bottom me-1"
                                          : "ri-close-fill align-bottom me-1"
                                      }`}
                                    ></i>
                                    {changeColorScreen === false
                                      ? "Smart Screen"
                                      : "No Smart Screen"}
                                  </span>
                                </button>
                              </div>
                            </Col>
                            {/* Air_Conditionner  == Done */}
                            <Col lg={2}>
                              <div className="mb-3">
                                <button
                                  type="button"
                                  onClick={handleClickAC}
                                  className={`btn btn-success custom-toggle ${
                                    changeColorAC === false
                                      ? "btn-success"
                                      : "btn-danger"
                                  }`}
                                  data-bs-toggle="button"
                                >
                                  <span className="icon-on">
                                    <i
                                      className={`${
                                        changeColorAC === false
                                          ? "ri-check-line align-bottom me-1"
                                          : "ri-close-fill align-bottom me-1"
                                      }`}
                                    ></i>
                                    {changeColorAC === false
                                      ? "Air Conditioner"
                                      : "No Air Conditioner"}
                                  </span>
                                </button>
                              </div>
                            </Col>
                          </Row>

                          <Col lg={12}>
                            <Card.Header>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar-sm">
                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                      <i className="ri-profile-line"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h5 className="card-title">Legal Card</h5>
                                </div>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Number
                                    </label>
                                    <Form.Control
                                      type="text"
                                      id="supplierName-field"
                                      placeholder="Enter number"
                                      required
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <Form.Label htmlFor="orderDate-field">
                                      Date
                                    </Form.Label>
                                    <Flatpickr
                                      className="form-control flatpickr-input"
                                      placeholder="Select Date"
                                      options={{
                                        dateFormat: "d M, Y",
                                      }}
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      File
                                    </label>
                                    <Form.Control
                                      type="file"
                                      id="supplierName-field"
                                      placeholder="Enter number"
                                      className="text-muted"
                                      required
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Col>
                          <Col lg={12}>
                            <Card.Header>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar-sm">
                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                      <i className="bx bx-credit-card-front"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h5 className="card-title">Insurance Card</h5>
                                </div>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <Form.Label htmlFor="orderDate-field">
                                      Last Date
                                    </Form.Label>
                                    <Flatpickr
                                      className="form-control flatpickr-input"
                                      placeholder="Select Date"
                                      options={{
                                        dateFormat: "d M, Y",
                                      }}
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <Form.Label htmlFor="orderDate-field">
                                      Future Date
                                    </Form.Label>
                                    <Flatpickr
                                      className="form-control flatpickr-input"
                                      placeholder="Select Date"
                                      options={{
                                        dateFormat: "d M, Y",
                                      }}
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      File
                                    </label>
                                    <Form.Control
                                      type="file"
                                      id="supplierName-field"
                                      placeholder="Enter number"
                                      className="text-muted"
                                      required
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Col>
                          <Col lg={12}>
                            <Card.Header>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar-sm">
                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                      <i className="ph ph-cards"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h5 className="card-title">Exam Card</h5>
                                </div>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <Form.Label htmlFor="orderDate-field">
                                      Last Date
                                    </Form.Label>
                                    <Flatpickr
                                      className="form-control flatpickr-input"
                                      placeholder="Select Date"
                                      options={{
                                        dateFormat: "d M, Y",
                                      }}
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <Form.Label htmlFor="orderDate-field">
                                      Future Date
                                    </Form.Label>
                                    <Flatpickr
                                      className="form-control flatpickr-input"
                                      placeholder="Select Date"
                                      options={{
                                        dateFormat: "d M, Y",
                                      }}
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      File
                                    </label>
                                    <Form.Control
                                      type="file"
                                      id="supplierName-field"
                                      placeholder="Enter number"
                                      className="text-muted"
                                      required
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Col>
                          <Col lg={12}>
                            <Card.Header>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar-sm">
                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                      <i className="ri-money-pound-box-line"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h5 className="card-title">Taxes Card</h5>
                                </div>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <Form.Label htmlFor="orderDate-field">
                                      Last Date
                                    </Form.Label>
                                    <Flatpickr
                                      className="form-control flatpickr-input"
                                      placeholder="Select Date"
                                      options={{
                                        dateFormat: "d M, Y",
                                      }}
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <Form.Label htmlFor="orderDate-field">
                                      Future Date
                                    </Form.Label>
                                    <Flatpickr
                                      className="form-control flatpickr-input"
                                      placeholder="Select Date"
                                      options={{
                                        dateFormat: "d M, Y",
                                      }}
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      File
                                    </label>
                                    <Form.Control
                                      type="file"
                                      id="supplierName-field"
                                      placeholder="Enter number"
                                      className="text-muted"
                                      required
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Col>
                          <Col lg={12}>
                            <Card.Header>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar-sm">
                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                      <i className="bx bx-pound"></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h5 className="card-title">Cost</h5>
                                </div>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Standard Cost
                                    </label>
                                    <Form.Control
                                      type="text"
                                      id="supplierName-field"
                                      placeholder="Enter standard cost"
                                      required
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Standard distance
                                    </label>
                                    <Form.Control
                                      type="text"
                                      id="supplierName-field"
                                      placeholder="Enter supplier name"
                                      required
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Cost per km/mile
                                    </label>
                                    <Form.Control
                                      type="text"
                                      id="supplierName-field"
                                      placeholder="Enter cost per km/mile"
                                      required
                                    />
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Cost of Extra Luaggue
                                    </label>
                                    <Form.Control
                                      type="text"
                                      id="supplierName-field"
                                      placeholder="Enter cost of extra luaggue"
                                      required
                                    />
                                  </div>
                                </Col>
                              </Row>
                            </Card.Body>
                          </Col>
                          {/* <Col lg={6}>
                            <div className="mb-3">
                              <label
                                htmlFor="statusSelect"
                                className="form-label"
                              >
                                Shift
                              </label>
                              <select
                                className="form-select"
                                name="choices-single-default"
                                id="statusSelect"
                                required
                              >
                                <option value="">Shifts</option>
                                <option value="Pickups">Night </option>
                                <option value="Pending">Weekend </option>
                                <option value="Shipping">Holiday </option>
                                <option value="Delivered">Costum </option>
                              </select>
                            </div>
                          </Col> */}
                          <Col lg={12}>
                            <div className="hstack gap-2 justify-content-end">
                              <Button variant="primary" id="add-btn">
                                Add Vehicle
                              </Button>
                            </div>
                          </Col>
                        </Row>
                      </Form>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </form>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default AddNewVehicle;
