import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  Form,
  Image,
  Row,
} from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import Dropzone from "react-dropzone";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import SimpleBar from "simplebar-react";
// Import Contry Data
import country from "Common/country";

const AddNewDriver = () => {
  document.title = "Create Driver | Bouden Coach Travel";

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

  // Country Change States
  const [seletedCountry, setseletedCountry] = useState("");
  const [seletedCountry1, setseletedCountry1] = useState<any>({});

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
                           <i className='bx bx-user'></i>
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <h5 className="card-title mb-1">Driver Information</h5>
                      </div>
                    </div>
                  </Card.Header>
                  <Card.Body>
                    <div className="mb-3">
                      <Form className="tablelist-form">
                        <input type="hidden" id="id-field" />
                        <Row>
                          <Row>
                            {/* First Name  == Done */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <Form.Label htmlFor="customerName-field">
                                  First Name
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="customerName-field"
                                  placeholder="Enter first name"
                                  required
                                />
                              </div>
                            </Col>
                            {/* Last Name == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Last Name
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter last name"
                                  required
                                />
                              </div>
                            </Col>
                            {/* Birth_Date  == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Birth Date
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
                            {/* Address  == Done */}
                            <Col lg={2}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Address
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter address"
                                  required
                                />
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            {/* Email  == Done */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Email
                                </Form.Label>
                                <Form.Control
                                  type="email"
                                  id="supplierName-field"
                                  placeholder="Enter email"
                                  required
                                />
                              </div>
                            </Col>
                            {/* Phone  == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Phone
                                </Form.Label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter phone"
                                  required
                                />
                              </div>
                            </Col>
                            {/*  Nationaity == Not Yet */}
                            <Col lg={3}>
                               <div className="mb-3">
                                <Form.Label>
                                  Nationality
                                </Form.Label>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    as="input"
                                    style={{
                                      backgroundImage: `url(${
                                        seletedCountry1.flagImg &&
                                        seletedCountry1.flagImg
                                      })`,
                                    }}
                                    className="form-control rounded-end flag-input form-select"
                                    placeholder="Select country"
                                    readOnly
                                    defaultValue={seletedCountry1.countryName}
                                  ></Dropdown.Toggle>
                                  <Dropdown.Menu
                                    as="ul"
                                    className="list-unstyled w-100 dropdown-menu-list mb-0"
                                  >
                                    <SimpleBar
                                      style={{ maxHeight: "220px" }}
                                      className="px-3"
                                    >
                                      {(country || []).map(
                                        (item: any, key: number) => (
                                          <Dropdown.Item
                                            as="li"
                                            onClick={() =>
                                              setseletedCountry1(item)
                                            }
                                            key={key}
                                            className="dropdown-item d-flex"
                                          >
                                            <div className="flex-shrink-0 me-2">
                                              <Image
                                                src={item.flagImg}
                                                alt="country flag"
                                                className="options-flagimg"
                                                height="20"
                                              />
                                            </div>
                                            <div className="flex-grow-1">
                                              <div className="d-flex">
                                                <div className="country-name me-1">
                                                  {item.countryName}
                                                </div>
                                                <span className="countrylist-codeno text-muted">
                                                  {item.countryCode}
                                                </span>
                                              </div>
                                            </div>
                                          </Dropdown.Item>
                                        )
                                      )}
                                    </SimpleBar>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </Col>
                            {/* Original_Nationality  == Not Yet */}
                            <Col lg={2}>
                              <div className="mb-3">
                                <Form.Label>
                                  Original Nationality
                                </Form.Label>
                                <Dropdown>
                                  <Dropdown.Toggle
                                    as="input"
                                    style={{
                                      backgroundImage: `url(${
                                        seletedCountry1.flagImg &&
                                        seletedCountry1.flagImg
                                      })`,
                                    }}
                                    className="form-control rounded-end flag-input form-select"
                                    placeholder="Select country"
                                    readOnly
                                    defaultValue={seletedCountry1.countryName}
                                  ></Dropdown.Toggle>
                                  <Dropdown.Menu
                                    as="ul"
                                    className="list-unstyled w-100 dropdown-menu-list mb-0"
                                  >
                                    <SimpleBar
                                      style={{ maxHeight: "220px" }}
                                      className="px-3"
                                    >
                                      {(country || []).map(
                                        (item: any, key: number) => (
                                          <Dropdown.Item
                                            as="li"
                                            onClick={() =>
                                              setseletedCountry1(item)
                                            }
                                            key={key}
                                            className="dropdown-item d-flex"
                                          >
                                            <div className="flex-shrink-0 me-2">
                                              <Image
                                                src={item.flagImg}
                                                alt="country flag"
                                                className="options-flagimg"
                                                height="20"
                                              />
                                            </div>
                                            <div className="flex-grow-1">
                                              <div className="d-flex">
                                                <div className="country-name me-1">
                                                  {item.countryName}
                                                </div>
                                                <span className="countrylist-codeno text-muted">
                                                  {item.countryCode}
                                                </span>
                                              </div>
                                            </div>
                                          </Dropdown.Item>
                                        )
                                      )}
                                    </SimpleBar>
                                  </Dropdown.Menu>
                                </Dropdown>
                              </div>
                            </Col>
                          </Row>
                          <Row>
                            {/* Gender  == Done */}
                            <Col lg={4}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Gender
                                </label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Gender</option>
                                  <option value="Male">Male</option>
                                  <option value="Female">Female</option>
                                  <option value="Other">Other</option>
                                </select>
                              </div>
                            </Col>
                            {/* Civil_Status  == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <Form.Label htmlFor="supplierName-field">
                                  Civil Status
                                </Form.Label>
                                <select
                                  className="form-select text-muted"
                                  name="choices-single-default"
                                  id="statusSelect"
                                  required
                                >
                                  <option value="">Status</option>
                                  <option value="Married">Married</option>
                                  <option value="Single">Single</option>
                                  <option value="Divorced">Divorced</option>
                                  <option value="Widowed">Widowed</option>
                                </select>
                              </div>
                            </Col>
                            {/* Number of childs  == Done */}
                            <Col lg={3}>
                              <div className="mb-3">
                                <label
                                  htmlFor="statusSelect"
                                  className="form-label"
                                >
                                  Number of childs
                                </label>
                                <Form.Control
                                  type="text"
                                  id="supplierName-field"
                                  placeholder="Enter number of childs"
                                  required
                                />
                              </div>
                            </Col>
                          </Row>
                          <Col lg={12}>
                            <Card.Header>
                              <div className="d-flex align-items-center">
                                <div className="flex-shrink-0 me-3">
                                  <div className="avatar-sm">
                                    <div className="avatar-title rounded-circle bg-light text-primary fs-20">
                                      <i className='bx bxs-user-account'></i>
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
                                      <i className='bx bx-id-card'></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h5 className="card-title">
                                    Driving License{" "}
                                  </h5>
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
                                     <i className='bx bx-briefcase'></i>
                                    </div>
                                  </div>
                                </div>
                                <div className="flex-grow-1">
                                  <h5 className="card-title">Work</h5>
                                </div>
                              </div>
                            </Card.Header>
                            <Card.Body>
                              <Row>
                                <Col lg={2}>
                                  <div className="mb-3">
                                    <Form.Label htmlFor="orderDate-field">
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
                                <Col lg={2}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Status
                                    </label>
                                    <select
                                      className="form-select text-muted"
                                      name="choices-single-default"
                                      id="statusSelect"
                                      required
                                    >
                                      <option value="">Status</option>
                                      <option value="Active">Active</option>
                                      <option value="Inactive">Inactive</option>
                                      <option value="Annual vacation">
                                        Annual vacation
                                      </option>
                                      <option value="Exceptional vacation">
                                        Exceptional vacation
                                      </option>
                                      <option value="Driving">Driving</option>
                                    </select>
                                  </div>
                                </Col>
                                <Col lg={2}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Category
                                    </label>
                                    <select
                                      className="form-select text-muted"
                                      name="choices-single-default"
                                      id="statusSelect"
                                      required
                                    >
                                      <option value="">Category</option>
                                      <option value="Only Car">Only Car</option>
                                      <option value="Only Bus">Only Bus</option>
                                      <option value="Both">Both</option>
                                    </select>
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Contract Type
                                    </label>
                                    <select
                                      className="form-select text-muted"
                                      name="choices-single-default"
                                      id="statusSelect"
                                      required
                                    >
                                      <option value="">Contract</option>
                                      <option value="CDI">CDI</option>
                                      <option value="CDD">CDD</option>
                                      <option value="Part Time">
                                        Part Time
                                      </option>
                                    </select>
                                  </div>
                                </Col>
                                <Col lg={3}>
                                  <div className="mb-3">
                                    <label
                                      htmlFor="statusSelect"
                                      className="form-label"
                                    >
                                      Salary
                                    </label>
                                    <Form.Control
                                      type="text"
                                      id="supplierName-field"
                                      placeholder="Enter salary"
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
                                Add Driver
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

export default AddNewDriver;
