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
import VehicleTypes from "./VehicleTypes";
import JourneyTypes from "./JourneyType";
import LuggageTypes from "./LuggageTypes";
import MileageBands from "./MileageBands";
import HourlyBands from "./HourlyBands";
import CompanyData from "./CompanyData";
import WaitingBands from "./WaitingBands";
import SingleJourneys from "./SingleJourneys";
import PricingCalendar from "./PricingCalendar";
import PricingPostalCodes from "./PricingPostalCodes";
import SourcesSetting from "./SourcesSetting";
import BaseToBase from "./BaseToBase";
import SupplierRoutingRule from "./SupplierRoutingRule";

const SiteSettings = () => {
  document.title = "Pending Quotes | Bouden Coach Travel";
  const [modal_QuoteInfo, setmodal_QuoteInfo] = useState<boolean>(false);
  function tog_QuoteInfo() {
    setmodal_QuoteInfo(!modal_QuoteInfo);
  }

  const columns = [
    {
      name: <span className="font-weight-bold fs-13">Quote ID</span>,
      selector: (cell: any) => {
        return (
          <span>
            <Link to="#">
              <span className="text-dark">{cell.Quote_ID}</span>
            </Link>{" "}
            <i className="ph ph-eye" onClick={() => tog_QuoteInfo()}></i>
          </span>
        );
      },
      sortable: true,
    },
    {
      name: (
        <span className="mdi mdi-account-tie-hat font-weight-bold fs-24"></span>
      ),
      selector: (row: any) => row.driver,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Vehicle Type</span>,
      selector: (row: any) => row.vehicletype,
      sortable: true,
    },
    {
      name: <span className="mdi mdi-car font-weight-bold fs-24"></span>,
      selector: (row: any) => row.vehicle,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Date</span>,
      selector: (row: any) => row.Date,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Time</span>,
      selector: (row: any) => row.Time,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Pax</span>,
      selector: (row: any) => row.Pax,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Pick Up</span>,
      selector: (row: any) => row.PickUp,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Destination</span>,
      selector: (row: any) => row.Destination,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Progress</span>,
      selector: (cell: any) => {
        switch (cell.Progress) {
          case "New":
            return <span className="badge bg-danger"> {cell.Progress} </span>;
          case "Medium":
            return <span className="badge bg-info"> {cell.Progress} </span>;
          case "Low":
            return <span className="badge bg-success"> {cell.Progress} </span>;
          default:
            return <span className="badge bg-danger"> {cell.Progress} </span>;
        }
      },
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Passenger Name</span>,
      selector: (row: any) => row.PassengerName,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Mobile</span>,
      sortable: true,
      selector: (cell: any) => {
        return (
          <span
            className="mdi mdi-phone-in-talk-outline"
            title={cell.Mobile}
          ></span>
        );
      },
    },
    {
      name: <span className="font-weight-bold fs-13">Email</span>,
      sortable: true,
      selector: (cell: any) => {
        return (
          <span className="mdi mdi-email-outline" title={cell.Email}></span>
        );
      },
    },
    {
      name: <span className="font-weight-bold fs-13">Mileage</span>,
      selector: (row: any) => row.Mileage,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Arrival Date</span>,
      selector: (row: any) => row.ArrivalDate,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Price</span>,
      selector: (row: any) => row.Price,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Balance</span>,
      selector: (row: any) => row.Balance,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Contract</span>,
      selector: (row: any) => row.Contract,
      sortable: true,
    },
    // {
    //   name: <span className="font-weight-bold fs-13">Flight N°</span>,
    //   selector: (row: any) => row.FlightNum,
    //   sortable: true,
    // },
    // {
    //   name: <span className="font-weight-bold fs-13">Flight Arrival N°</span>,
    //   selector: (row: any) => row.FlightArrival,
    //   sortable: true,
    // },
    // {
    //   name: <span className="font-weight-bold fs-13">Flight In</span>,
    //   selector: (row: any) => row.FlightIn,
    //   sortable: true,
    // },
    // {
    //   name: <span className="font-weight-bold fs-13">Flight Out</span>,
    //   selector: (row: any) => row.FlightOut,
    //   sortable: true,
    // },
    {
      name: <span className="font-weight-bold fs-13">Enquiry Date</span>,
      selector: (row: any) => row.EnquiryDate,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Affiliate</span>,
      selector: (row: any) => row.Affiliate,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Callback</span>,
      selector: (row: any) => row.Callback,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Payment Status</span>,
      sortable: true,
      selector: (cell: any) => {
        switch (cell.PaymentStatus) {
          case "Not Paid":
            return (
              <span className="badge bg-danger"> {cell.PaymentStatus} </span>
            );
          case "Medium":
            return (
              <span className="badge bg-info"> {cell.PaymentStatus} </span>
            );
          case "Low":
            return (
              <span className="badge bg-success"> {cell.PaymentStatus} </span>
            );
          default:
            return (
              <span className="badge bg-danger"> {cell.PaymentStatus} </span>
            );
        }
      },
    },
    {
      name: <span className="font-weight-bold fs-13">Status</span>,
      sortable: true,
      selector: (cell: any) => {
        switch (cell.Status) {
          case "Pending":
            return <span className="badge bg-warning"> {cell.Status} </span>;
          case "Medium":
            return <span className="badge bg-info"> {cell.Status} </span>;
          case "Low":
            return <span className="badge bg-success"> {cell.Status} </span>;
          default:
            return <span className="badge bg-danger"> {cell.Status} </span>;
        }
      },
    },
    {
      name: <span className="font-weight-bold fs-13">Account Name</span>,
      selector: (row: any) => row.AccountName,
      sortable: true,
    },
    // {
    //   name: <span className="font-weight-bold fs-13">External Reference</span>,
    //   selector: (row: any) => row.ExternalReference,
    //   sortable: true,
    // },
    {
      name: <span className="font-weight-bold fs-13">Notes</span>,
      selector: (row: any) => row.Notes,
      sortable: true,
    },
  ];
  const data = [
    {
      Quote_ID: "89089",
      driver: "No driver",
      vehicletype: "10-16 Seat Standard Minibus",
      vehicle: "No Vehicle",
      Date: "21 Dec 2023",
      Time: "18:00",
      Pax: "7",
      PickUp: "Dwyran, Wales LL61 6AX",
      Destination: "BIRMINGHAM NEW STREET STATION",
      Progress: "New",
      PassengerName: "Erica",
      Mobile: "07990547241",
      Email: "erica7018@gmail.com",
      Mileage: "37",
      ArrivalDate: "24 Dec 2023 09:00",
      Price: "£0.00",
      Balance: "£0.00",
      Contract: "None",
      EnquiryDate: "10th Nov 2023",
      Affiliate: "No affiliate",
      Callback: "10th Nov 2023 14:29",
      PaymentStatus: "Not Paid",
      Status: "Pending",
      AccountName: "N/A",
      Notes: "The next day pick up point might be changing (within London)",
      // FlightNum: "Joseph Parker",
      // FlightArrival: "Alexis Clarke",
      // FlightIn: "Joseph Parker",
      // FlightOut: "03 Oct, 2021",
      // ExternalReference: "Re-open",
    },
    {
      Quote_ID: "90262",
      driver: "No driver",
      vehicletype: "53 Seat Standard Coach",
      vehicle: "No Vehicle",
      Date: "13 Dec 2023",
      Time: "10:00",
      Pax: "50",
      PickUp:
        "The Little Theatre Dover Street Leicester England LE1 6PT United Kingdom",
      Destination: "Wigston Road Oadby Leicester LE2 5QF United Kingdom",
      Progress: "New",
      PassengerName: "Georgina illston",
      Mobile: "07745090368",
      Email: "Oadby-50plus@outlook.com",
      Mileage: "26",
      ArrivalDate: "Wed 13th Dec 2023 16:00",
      Price: "£0.00",
      Balance: "£0.00",
      Contract: "N/A",
      // FlightNum: "Joseph Parker",
      // FlightArrival: "Alexis Clarke",
      // FlightIn: "Joseph Parker",
      // FlightOut: "03 Oct, 2021",
      EnquiryDate: "Wed 2nd Aug 2023",
      Affiliate: "N/A",
      Callback: "Not set",
      PaymentStatus: "Not Paid",
      Status: "Pending",
      AccountName: "N/A",
      // ExternalReference: "Re-open",
      Notes:
        "We wondered if it would be possible to pick up from every ones homes or if this is not possible?",
    },
    {
      Quote_ID: "86563",
      driver: "No driver",
      vehicletype: "29 Seat Standard Midi Coach",
      vehicle: "No Vehicle",
      Date: "15 Dec 2023",
      Time: "09:30",
      Pax: "24",
      PickUp:
        "Becketts Farm A435 Alcester Road Birmingham England B47 6AJ United Kingdom",
      Destination: "ONeills Poplar Rd Solihull England B91 3AJ United Kingdom",
      Progress: "New",
      PassengerName: "Simon Ray",
      Mobile: "07828250084",
      Email: "simon@touchwoodbuilding.co.uk",
      Mileage: "46",
      ArrivalDate: "Fri 15th Dec 2023 19:00",
      Price: "£450.00",
      Balance: "£450.00",
      Contract: "None",
      EnquiryDate: "Tue 19th Sep 2023",
      Affiliate: "No affiliate",
      Callback: "Not Set",
      PaymentStatus: "Not Paid",
      Status: "Pending",
      AccountName: "N/A",
      Notes:
        "Hi, I would also like a quote for the same journey on 16/12 for approx 12 with an 11am collection - 4pm return, & them 6pm that evening for 6pm drop off 11.30pm collection for approx 24 (these are just rough times & numbers at the moment to get an idea of costs)  Thank you in advance, ",
    },
  ];
  const nestableList5 = [
    {
      id: 1,
      name: "Vehicle Types",
    },
    {
      id: 2,
      name: "Journey Types",
    },
    {
      id: 3,
      name: "Luggage Types",
    },
    {
      id: 4,
      name: "Mileage Bands",
    },
    {
      id: 5,
      name: "Hourly Bands",
    },
    {
      id: 6,
      name: "Waiting Bands",
    },
    {
      id: 7,
      name: "Single Force Journey",
    },
    {
      id: 8,
      name: "Pricing Calendar",
    },
    {
      id: 9,
      name: "Pricing Postal Codes",
    },
    {
      id: 10,
      name: "Sources",
    },
    {
      id: 11,
      name: "Base To Base",
    },
    {
      id: 12,
      name: "Vehicle Extra",
    },
  ];
  const nestableList6 = [
    {
      id: 1,
      name: "Supplier Routing Rule",
    },
  ];
  const [navLink, setNavLink] = useState<boolean>(false);

  const handleOpenCompenent = () => {
    setNavLink(true);
  };
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Settings" pageTitle="Management" />
          <Row>
            <Col lg={3}>
              <Card>
                <Card.Body>
                  <ListGroup className="nested-list nested-sortable">
                    <ListGroup.Item className="nested-1">
                      <div className="d-flex align-items-center">
                        <div className="avatar-xs flex-shrink-0 me-3"></div>
                        <div className="flex-grow-1">
                          <h5 className="fs-14 mb-0">Site Options</h5>
                        </div>
                      </div>
                      <ListGroup className="nested-list nested-sortable">
                        <ListGroup.Item className="nested-1">
                          <div className="d-flex align-items-center">
                            <div className="avatar-xs flex-shrink-0 me-3"></div>
                            <div className="flex-grow-1">
                              <h5 className="fs-14 mb-0">Vehicle Options</h5>
                            </div>
                          </div>
                          {(nestableList5 || []).map((item: any, key: any) => (
                            <React.Fragment key={key}>
                              <ListGroup
                                className="nested-list nested-sortable"
                                key={key}
                              >
                                <Link to="#" onClick={handleOpenCompenent}>
                                  {" "}
                                  <ListGroup.Item className="nested-3">
                                    <div className="d-flex align-items-center">
                                      <div className="avatar-xs flex-shrink-0 me-3">
                                        <Image
                                          src={item.img}
                                          alt=""
                                          className="img-fluid rounded-circle"
                                        />
                                      </div>
                                      <div className="flex-grow-1">
                                        <h5 className="fs-14 mb-0">
                                          {item.name}
                                        </h5>
                                      </div>
                                    </div>
                                  </ListGroup.Item>
                                </Link>
                              </ListGroup>
                            </React.Fragment>
                          ))}
                        </ListGroup.Item>
                      </ListGroup>
                      <ListGroup className="nested-list nested-sortable">
                        <ListGroup.Item className="nested-1">
                          <div className="d-flex align-items-center">
                            <div className="avatar-xs flex-shrink-0 me-3"></div>
                            <div className="flex-grow-1">
                              <h5 className="fs-14 mb-0">Affiliate Options</h5>
                            </div>
                          </div>
                          {(nestableList6 || []).map((item: any, key: any) => (
                            <React.Fragment key={key}>
                              <ListGroup
                                className="nested-list nested-sortable"
                                key={key}
                              >
                                <Link to="#" onClick={handleOpenCompenent}>
                                  {" "}
                                  <ListGroup.Item className="nested-3">
                                    <div className="d-flex align-items-center">
                                      <div className="avatar-xs flex-shrink-0 me-3">
                                        <Image
                                          src={item.img}
                                          alt=""
                                          className="img-fluid rounded-circle"
                                        />
                                      </div>
                                      <div className="flex-grow-1">
                                        <h5 className="fs-14 mb-0">
                                          {item.name}
                                        </h5>
                                      </div>
                                    </div>
                                  </ListGroup.Item>
                                </Link>
                              </ListGroup>
                            </React.Fragment>
                          ))}
                        </ListGroup.Item>
                      </ListGroup>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={9}>
              {!navLink ? <CompanyData /> : <SupplierRoutingRule />}
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};
export default SiteSettings;
