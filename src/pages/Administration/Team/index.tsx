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
import TeamTable from "./TeamTable";

const Team = () => {
  document.title = "Team | Bouden Coach Travel";

  const navigate = useNavigate();

  function tog_AddTeam() {
    navigate("/new-team");
  }
  const team = [
    {
      id: "1",
      brandName: "Michelin",
      companyLogo: avtar1,
      productItems: "362",
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
    {
      id: "6",
      brandName: "Nautica",
      companyLogo: avtar1,
      productItems: "702",
    },
    {
      id: "7",
      brandName: "Mochup",
      companyLogo: avtar1,
      productItems: "942",
    },
    {
      id: "8",
      brandName: "Bosch",
      companyLogo: avtar1,
      productItems: "3625",
    },
    {
      id: "9",
      brandName: "Diesel",
      companyLogo: avtar1,
      productItems: "415",
    },
    {
      id: "10",
      brandName: "Reebok",
      companyLogo: avtar1,
      productItems: "362",
    },
    {
      id: "11",
      brandName: "Eagle",
      companyLogo: avtar1,
      productItems: "650",
    },
    {
      id: "12",
      brandName: "Adidas",
      companyLogo: avtar1,
      productItems: "931",
    },
    {
      id: "13",
      brandName: "Michelin",
      companyLogo: avtar1,
      productItems: "1462",
    },
    {
      id: "14",
      brandName: "Kinetic",
      companyLogo: avtar1,
      productItems: "3621",
    },
    {
      id: "15",
      brandName: "Soriana",
      companyLogo: avtar1,
      productItems: "1024",
    },
    {
      id: "16",
      brandName: "Puma",
      companyLogo: avtar1,
      productItems: "1548",
    },
    {
      id: "17",
      brandName: "Huawel",
      companyLogo: avtar1,
      productItems: "3654",
    },
    {
      id: "18",
      brandName: "Rolex",
      companyLogo: avtar1,
      productItems: "471",
    },
    {
      id: "19",
      brandName: "Michelin",
      companyLogo: avtar1,
      productItems: "362",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Team" pageTitle="Contacts" />
          <Row>
            <TeamTable team={team} />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Team;
