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
import DriverTable from "./DriverTable";

const Driver = () => {
  document.title = "Driver | Bouden Coach Travel";

  const navigate = useNavigate();

  function tog_AddDriver() {
    navigate("/new-driver");
  }
  const driver = [
    {
      ref: "1",
      Username: "Michelin",
      Password: avtar1,
      Email: "362",
      DriverImages: "",
      Title: "",
      FirstName: "",
      Surname: "",
      DateofBirth: "",
      DriverType: "",
      DaysAvailable: "",
      TimeAvailable: "",
      DateJoined: "",
      Enabled: "",
      Address: "",
      Address2: "",
      City: "",
      State: "",
      Country: "",
      PostalCode: "",
      Language: "",
      Nationality: "",
      HomePhone: "",
      MobilePhone: "",
    },
    {
      id: "2",
      brandName: "Rolex",
      companyLogo: avtar1,
      productItems: "471",
    },
    {
      id: "3",
      brandName: "Huawel",
      companyLogo: avtar1,
      productItems: "3654",
    },
    {
      id: "4",
      brandName: "Puma",
      companyLogo: avtar1,
      productItems: "1548",
    },
    {
      id: "5",
      brandName: "Fastrack",
      companyLogo: avtar1,
      productItems: "645",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Driver" pageTitle="Contacts" />
          <Row>
            <DriverTable driver={driver} />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Driver;
