import React, { useMemo, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import TableContainer from "Common/TableContainer";
import { driverList } from "Common/data";
import avtar1 from "assets/images/users/avatar-1.jpg";

const Driver = () => {
  document.title = "Driver | Bouden Coach Travel";

  const navigate = useNavigate();

  function tog_AddDriver() {
    navigate("/new-driver");
  }

  const columns = useMemo(
    () => [
      {
        Header: "Full Name",
        disableFilters: true,
        filterable: true,
        accessor: "fullName",
      },
      {
        Header: "Phone Number",
        accessor: "phone",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "DOB",
        accessor: "dateofbirth",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Service Date",
        accessor: "serviceDate",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Status",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          switch (cellProps.status) {
            case "Active":
              return (
                <span className="badge badge-soft-success">
                  {" "}
                  {cellProps.status}
                </span>
              );
            case "Inactive":
              return (
                <span className="badge badge-soft-danger">
                  {" "}
                  {cellProps.status}
                </span>
              );
            default:
              return (
                <span className="badge badge-soft-success">
                  {" "}
                  {cellProps.status}
                </span>
              );
          }
        },
      },
      {
        Header: "Category",

        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          switch (cellProps.category) {
            case "Car Only":
              return <i className="ri-car-line"></i>;
            case "Bus Only":
              return <i className="ri-bus-line"></i>;
            case "Both":
              return (
                <span>
                  <i className="ri-car-line"></i>{" "}
                  <i className="ri-bus-line"></i>
                </span>
              );
            default:
              return <i className="ri-car-line"></i>;
          }
        },
      },
      {
        Header: "Contract Type",
        accessor: "contractType",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Salary",
        accessor: "salary",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Action",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          return (
            <ul className="hstack gap-2 list-unstyled mb-0">
              <li>
                <Link
                  to={`/driver-details/${cellProps.fullName}`}
                  className="badge badge-soft-primary edit-item-btn"
                  state={cellProps}
                >
                  <i className="ri-eye-line"></i>
                </Link>
              </li>
              <li>
                <Link to="#" className="badge badge-soft-success edit-item-btn">
                  <i className="ri-edit-2-line"></i>
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  className="badge badge-soft-danger remove-item-btn"
                >
                  <i className="ri-delete-bin-2-line"></i>
                </Link>
              </li>
            </ul>
          );
        },
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Driver" pageTitle="Administration" />
          <Card id="shipmentsList">
            <Card.Header className="border-bottom-dashed">
              <Row className="g-3">
                <Col xxl={3} lg={6}>
                  <div className="search-box">
                    <input
                      type="text"
                      className="form-control search"
                      placeholder="Search for something..."
                    />
                    <i className="ri-search-line search-icon"></i>
                  </div>
                </Col>
                <Col className="col-xxl-auto col-sm-auto ms-auto">
                  <Button
                    variant="success"
                    onClick={() => tog_AddDriver()}
                    className="add-btn"
                  >
                    <i className="ri-user-add-line me-1 align-middle"></i> Add
                    Driver
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              {/* <div className="table-responsive table-card">
                <TableContainer
                  columns={columns || []}
                  data={driverList || []}
                  // isGlobalFilter={false}
                  iscustomPageSize={false}
                  isBordered={false}
                  customPageSize={10}
                  className="custom-header-css table align-middle table-nowrap"
                  tableClassName="table-centered align-middle table-nowrap mb-0"
                  theadClassName="text-muted table-light"
                  SearchPlaceholder="Search Products..."
                />
              </div>
              <div className="noresult" style={{ display: "none" }}>
                <div className="text-center py-4">
                  <div className="avatar-md mx-auto mb-4">
                    <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
                      <i className="bi bi-search"></i>
                    </div>
                  </div>
                  <h5 className="mt-2">Sorry! No Result Found</h5>
                  <p className="text-muted mb-0">
                    We've searched more than 150+ shipment orders We did not
                    find any shipment orders for you search.
                  </p>
                </div>
              </div> */}
              <Row>
                <Col>
                  <Card className="card-body">
                    <div className="d-flex mb-4 align-items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src={avtar1}
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h5 className="card-title mb-1">Alfred Hurst</h5>
                        <p className="badge bg-success">Active</p>
                        <span>
                          {" "}
                          <i className="mdi mdi-car-side align-middle"></i>{" "}
                          <i className="mdi mdi-bus align-middle"></i>
                        </span>
                        {/* <p className="text-muted mb-0">
                          <span className="mdi mdi-car-side"></span>
                        </p> */}
                      </div>
                    </div>
                    <span>
                      <i className="mdi mdi-phone align-middle"></i> +44 203 048
                      4377
                    </span>
                    {/* <span className="mdi mdi-email-outline"></span>{" "}
                    <p className="card-text text-muted">
                      trebor22@lovelyaibrain.com
                    </p> */}
                    <p>
                      <b>Driving Licence:</b> Exp. 18/05/2025
                    </p>
                    <p>
                      <b>DQC:</b> Exp. 18/05/2025
                    </p>
                    <Card.Footer className="p-0">
                      <span className="d-flex justify-content-end">
                        142{" "}
                        <i className="mdi mdi-briefcase-variant align-middle"></i>
                      </span>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col>
                  <Card className="card-body">
                    <div className="d-flex mb-4 align-items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src={avtar1}
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h5 className="card-title mb-1">Alfred Hurst</h5>
                        <p className="badge bg-success">Active</p>
                        <span>
                          {" "}
                          <i className="mdi mdi-car-side align-middle"></i>
                        </span>
                        {/* <p className="text-muted mb-0">
                          <span className="mdi mdi-car-side"></span>
                        </p> */}
                      </div>
                    </div>
                    <span>
                      <i className="mdi mdi-phone align-middle"></i> +44 203 048
                      4377
                    </span>
                    {/* <span className="mdi mdi-email-outline"></span>{" "}
                    <p className="card-text text-muted">
                      trebor22@lovelyaibrain.com
                    </p> */}
                    <p>
                      <b>Driving Licence:</b> Exp. 18/05/2025
                    </p>
                    <p>
                      <b>DQC:</b> Exp. 18/05/2025
                    </p>
                    <Card.Footer className="p-0">
                      <span className="d-flex justify-content-end">
                        142{" "}
                        <i className="mdi mdi-briefcase-variant align-middle"></i>
                      </span>
                    </Card.Footer>
                  </Card>
                </Col>
                <Col>
                  <Card className="card-body">
                    <div className="d-flex mb-4 align-items-center">
                      <div className="flex-shrink-0">
                        <Image
                          src={avtar1}
                          alt=""
                          className="avatar-sm rounded-circle"
                        />
                      </div>
                      <div className="flex-grow-1 ms-2">
                        <h5 className="card-title mb-1">Alfred Hurst</h5>
                        <p className="badge bg-danger">Inactive</p>
                        <span>
                          {" "}
                          <i className="mdi mdi-bus align-middle"></i>
                        </span>
                        {/* <p className="text-muted mb-0">
                          <span className="mdi mdi-car-side"></span>
                        </p> */}
                      </div>
                    </div>
                    <span>
                      <i className="mdi mdi-phone align-middle"></i> +44 203 048
                      4377
                    </span>
                    {/* <span className="mdi mdi-email-outline"></span>{" "}
                    <p className="card-text text-muted">
                      trebor22@lovelyaibrain.com
                    </p> */}
                    <p>
                      <b>Driving Licence:</b> Exp. 18/05/2025
                    </p>
                    <p>
                      <b>DQC:</b> Exp. 18/05/2025
                    </p>
                    <Card.Footer className="p-0">
                      <span className="d-flex justify-content-end">
                        142{" "}
                        <i className="mdi mdi-briefcase-variant align-middle"></i>
                      </span>
                    </Card.Footer>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Driver;
