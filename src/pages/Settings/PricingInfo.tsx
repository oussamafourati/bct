import React, { useState } from "react";
import {
  Container,
  Dropdown,
  Form,
  Row,
  Card,
  Col,
  Button,
  Image,
  ListGroup,
  Modal,
} from "react-bootstrap";
import DataTable from "react-data-table-component";
import Breadcrumb from "Common/BreadCrumb";
import Flatpickr from "react-flatpickr";
import img1 from "assets/images/brands/img-1.png";
import img2 from "assets/images/brands/img-2.png";
import img3 from "assets/images/brands/img-3.png";
import img4 from "assets/images/brands/img-4.png";
import img5 from "assets/images/brands/img-5.png";
import img6 from "assets/images/brands/img-6.png";
import img7 from "assets/images/brands/img-7.png";
import img8 from "assets/images/brands/img-8.png";
import img9 from "assets/images/brands/img-9.png";
import img10 from "assets/images/brands/img-10.png";
import img11 from "assets/images/brands/img-11.png";
import img12 from "assets/images/brands/img-12.png";
import img13 from "assets/images/brands/img-13.png";
import img14 from "assets/images/brands/img-14.png";
import { Link } from "react-router-dom";
import SimpleBar from "simplebar-react";

const PrincingInfo = () => {
  return (
    <React.Fragment>
      <Col lg={12}>
        <form
          id="createproduct-form"
          autoComplete="off"
          className="needs-validation"
          noValidate
        >
          <Row>
            <Col lg={12}>
              <div className="mb-3">
                <Form className="tablelist-form">
                  <input type="hidden" id="id-field" />

                  <Row>
                    <table>
                      <tr>
                        <td>
                          <Form.Label htmlFor="customerName-field">
                            Currency Symbol
                          </Form.Label>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            id="customerName-field"
                            // defaultValue="Bouden Coach Travel"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <div className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Before
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              After
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Label htmlFor="customerName-field">
                            Balance Due
                          </Form.Label>
                        </td>
                        <td>
                          <select
                            className="form-select text-muted"
                            name="choices-single-default"
                            id="statusSelect"
                            required
                          >
                            <option value="">Balance Due</option>
                            <option value="Male">0 days before travel</option>
                            <option value="Female">1 days before travel</option>
                            <option value="Other">2 days before travel</option>
                            <option value="Male">3 days before travel</option>
                            <option value="Female">4 days before travel</option>
                            <option value="Other">5 days before travel</option>
                          </select>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Label htmlFor="customerName-field">
                            Default Deposit
                          </Form.Label>
                        </td>
                        <td>
                          <div className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Cash
                            </label>
                          </div>
                        </td>
                        <td>
                          <div className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="flexRadioDefault1"
                            >
                              Before Percent(%)
                            </label>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <Form.Control
                            type="text"
                            id="customerName-field"
                            // defaultValue="App Code: 2683"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <Form.Label htmlFor="customerName-field">
                            Auto Pricing
                          </Form.Label>
                        </td>
                        <td>
                          <div className="form-check mb-2">
                            <input
                              className="form-check-input"
                              type="checkbox"
                              id="formCheck1"
                              checked
                            />
                            <label
                              className="form-check-label"
                              htmlFor="formCheck1"
                            >
                              Increse Pricing(%)
                            </label>
                          </div>
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            id="customerName-field"
                            required
                          />
                        </td>
                      </tr>
                      <tr>
                        <td></td>
                        <div className="form-check mb-2">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id="formCheck1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            htmlFor="formCheck1"
                          >
                            Show Journey Price
                          </label>
                        </div>
                      </tr>
                      <tr>
                        <td></td>
                        <td>
                          <Form.Control
                            type="text"
                            id="customerName-field"
                            required
                          />
                        </td>
                        <td>
                          <Form.Control
                            type="text"
                            id="customerName-field"
                            required
                          />
                        </td>
                      </tr>
                    </table>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </form>
      </Col>
    </React.Fragment>
  );
};
export default PrincingInfo;
