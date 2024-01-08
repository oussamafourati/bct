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

const VehicleTypes = () => {
  const [modal_QuoteInfo, setmodal_QuoteInfo] = useState<boolean>(false);
  function tog_QuoteInfo() {
    setmodal_QuoteInfo(!modal_QuoteInfo);
  }

  const columns = [
    {
      name: <span className="font-weight-bold fs-13">Vehicle</span>,
      selector: (row: any) => row.vehicletype,
      sortable: true,
    },

    {
      name: <span className="font-weight-bold fs-13">Base Charge</span>,
      selector: (row: any) => row.baseCharge,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Action</span>,
      sortable: true,

      cell: () => {
        return (
          <ul className="hstack gap-2 list-unstyled mb-0">
            <li>
              <Link to="#" className="badge badge-soft-primary edit-item-btn" style={{ transition: 'transform 0.3s ease-in-out', cursor: 'pointer', fontSize: '1.1em' }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                <i className="ri-eye-line"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="badge badge-soft-success edit-item-btn" style={{ transition: 'transform 0.3s ease-in-out', cursor: 'pointer', fontSize: '1.1em' }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                <i className="ri-edit-2-line"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="badge badge-soft-danger remove-item-btn" style={{ transition: 'transform 0.3s ease-in-out', cursor: 'pointer', fontSize: '1.1em' }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                <i className="ri-delete-bin-2-line"></i>
              </Link>
            </li>
          </ul>
        );
      },
    },
  ];
  const data = [
    {
      vehicletype: "Standard Saloon Car",
      baseCharge: "£30.00",
    },
    {
      vehicletype: "Executive Saloon Car",
      baseCharge: "£50.00",
    },
    {
      vehicletype: "VIP Saloon Car",
      baseCharge: "£60.00",
    },
    {
      vehicletype: "Standard 6 Seat MPV",
      baseCharge: "£50.00",
    },
    {
      vehicletype: "Executive 6 Seat MPV",
      baseCharge: "£65.00",
    },
    {
      vehicletype: "10-16 Seat Standard Minibus",
      baseCharge: "£75.00",
    },
    {
      vehicletype: "10-16 Seat Executive Minibus",
      baseCharge: "£150.00",
    },
    {
      vehicletype: "14-16 Seat Luxury Minibus",
      baseCharge: "£275.00",
    },
    {
      vehicletype: "17-24 Seat Standard Midi Coach",
      baseCharge: "£170.00",
    },
    {
      vehicletype: "17-24 Seat Executive Midi Coach",
      baseCharge: "£220.00",
    },
  ];

  return (
    <React.Fragment>
      <Col lg={12}>
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
              <Col lg={7}></Col>
              <Col>
                <div
                  className="btn-group btn-group-sm mt-2"
                  role="group"
                  aria-label="Basic example"
                >
                  <button type="button" className="btn btn-primary">
                    <i className="ri-roadster-line align-middle" style={{ transition: 'transform 0.3s ease-in-out', cursor: 'pointer', fontSize: '1.5em' }}
                                onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.3)')}
                                onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}></i>{" "}
                    <span>Add New Type</span>
                  </button>
                </div>
              </Col>
            </Row>
          </Card.Header>
          <Card.Body>
            <DataTable columns={columns} data={data} pagination />
          </Card.Body>
        </Card>
      </Col>
    </React.Fragment>
  );
};
export default VehicleTypes;
