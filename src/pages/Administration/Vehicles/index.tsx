import React, { useMemo, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import TableContainer from "Common/TableContainer";
import { vehicleList } from "Common/data";

const Vehicles = () => {
  document.title = "Vehicles | Bouden Coach Travel";

  const navigate = useNavigate();

  function tog_AddNewVehicle() {
    navigate("/new-vehicle");
  }

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          return (
            <Link to={`/vehicle-details/${cellProps.name}`} className="fw-medium link-primary" state={cellProps}>
              {cellProps.name}
            </Link>
          );
        },
      },
      {
        Header: "Serial Number",
        accessor: "serialNumber",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Brand",
        accessor: "brand",
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
        Header: "Size",
        accessor: "size",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Category",
        accessor: "category",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Capacity",
        accessor: "capacity",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Luggage",
        accessor: "luggage",
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
          <Breadcrumb title="Vehicles" pageTitle="Administration" />
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
                    onClick={() => tog_AddNewVehicle()}
                    className="add-btn"
                  >
                    <i className="bx bx-car me-1 align-middle"></i> Add
                    Vehicle
                  </Button>
                </Col>
              </Row>
            </Card.Header>
            <Card.Body>
              <div className="table-responsive table-card">
                <TableContainer
                  columns={columns || []}
                  data={vehicleList || []}
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
              </div>
            </Card.Body>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Vehicles;
