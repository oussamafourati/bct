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

const JourneyTypes = () => {
  const [modal_QuoteInfo, setmodal_QuoteInfo] = useState<boolean>(false);
  function tog_QuoteInfo() {
    setmodal_QuoteInfo(!modal_QuoteInfo);
  }

  const columns = [
    {
      name: <span className="font-weight-bold fs-13">Journey Type</span>,
      selector: (row: any) => row.journeytype,
      sortable: true,
    },

    {
      name: <span className="font-weight-bold fs-13">Color</span>,
      selector: (row: any) => row.color,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Action</span>,
      sortable: true,

      cell: () => {
        return (
          <ul className="hstack gap-2 list-unstyled mb-0">
            <li>
              <Link to="#" className="badge badge-soft-primary edit-item-btn">
                <i className="ri-eye-line"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="badge badge-soft-success edit-item-btn">
                <i className="ri-edit-2-line"></i>
              </Link>
            </li>
            <li>
              <Link to="#" className="badge badge-soft-danger remove-item-btn">
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
      journeytype: "Airport Transfer",
      color: "£30.00",
    },
    {
      journeytype: "Charity Event",
      color: "£50.00",
    },
    {
      journeytype: "Christmas Party",
      color: "£60.00",
    },
    {
      journeytype: "Corporate Event",
      color: "£50.00",
    },
    {
      journeytype: "Day Trip",
      color: "£65.00",
    },
    {
      journeytype: "Emergency",
      color: "£75.00",
    },
    {
      journeytype: "Football Away Game( fan trip)",
      color: "£150.00",
    },
    {
      journeytype: "Funeral",
      color: "£275.00",
    },
    {
      journeytype: "Golf Trip",
      color: "£170.00",
    },
    {
      journeytype: "Night Out",
      color: "£220.00",
    },
    {
      journeytype: "Rail Replacement",
      color: "£275.00",
    },
    {
      journeytype: "School or University Educational Trip",
      color: "£170.00",
    },
    {
      journeytype: "Site Tour",
      color: "£220.00",
    },
    {
      journeytype: "Sporting Event",
      color: "£275.00",
    },
    {
      journeytype: "Sports Team (players transport)",
      color: "£170.00",
    },
    {
      journeytype: "Staff Shuttles or Transport",
      color: "£220.00",
    },
    {
      journeytype: "Stag/Hen Do",
      color: "£275.00",
    },
    {
      journeytype: "UK Tour or International Tour",
      color: "£170.00",
    },
    {
      journeytype: "Vehicle Maintenance(internal book out)",
      color: "£220.00",
    },
    {
      journeytype: "Wedding",
      color: "£275.00",
    },
    {
      journeytype: "Weekend Away",
      color: "£170.00",
    },
    {
      journeytype: "Other",
      color: "£220.00",
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
                    <i className="ri-add-fill align-middle"></i>{" "}
                    <span>Add New Journey</span>
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
export default JourneyTypes;
