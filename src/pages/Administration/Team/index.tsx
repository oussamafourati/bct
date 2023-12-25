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
      brandName: "adel",
      companyLogo: avtar1,
      productItems: "sales@boudencoachtravel.co.uk",
      status: "active",
      position: "info",
      phone: "07427423972",
    },
    {
      id: "2",
      brandName: "sophie",
      companyLogo: avtar1,
      productItems: "sophie@boudencoachtravel.co.uk",
      status: "inactive",
      position: "sales",
      phone: "0800 1123770",
    },
    {
      id: "3",
      brandName: "adelbouden",
      companyLogo: avtar1,
      productItems: "adelbouden@boudencoachtravel.co.uk",
      status: "active",
      position: "admin",
      phone: "07427423972",
    },
    {
      id: "4",
      brandName: "Morgan Knight",
      companyLogo: avtar1,
      productItems: "sales@boudencoachtravel.co.uk",
      status: "active",
      position: "info",
      phone: "07427423901",
    },
    {
      id: "5",
      brandName: "Lina",
      companyLogo: avtar1,
      productItems: "sales@boudencoachtravel.co.uk",
      status: "active",
      position: "sales",
      phone: "07427423902",
    },
    {
      id: "6",
      brandName: "Anna",
      companyLogo: avtar1,
      productItems: "sales@boudencoachtravel.co.uk",
      status: "active",
      position: "sales",
      phone: "07427423917",
    },
    {
      id: "7",
      brandName: "Jayne Turner",
      companyLogo: avtar1,
      productItems: "sales@boudencoachtravel.co.uk",
      status: "inactive",
      position: "info",
      phone: "07427423944",
    },
    {
      id: "8",
      brandName: "MRS BOUDEN",
      companyLogo: avtar1,
      productItems: "moufi@theboudens.com",
      status: "active",
      position: "info",
      phone: "07427423933",
    },
    {
      id: "9",
      brandName: "Amine",
      companyLogo: avtar1,
      productItems: "info@lorentzdev.com",
      status: "active",
      position: "sales",
      phone: "07427423955",
    },
    {
      id: "10",
      brandName: "Andytest",
      companyLogo: avtar1,
      productItems: "andyveal@voovagroup.com",
      status: "active",
      position: "sales",
      phone: "07427423964",
    },
    {
      id: "11",
      brandName: "Rayen",
      companyLogo: avtar1,
      productItems: "sales@boudencoachtravel.co.uk",
      status: "active",
      position: "info",
      phone: "07427423915",
    },
    {
      id: "12",
      brandName: "Anita",
      companyLogo: avtar1,
      productItems: "sales@boudencoachtravel.co.uk",
      status: "active",
      position: "sales",
      phone: "07427423984",
    },
    {
      id: "13",
      brandName: "Wayne",
      companyLogo: avtar1,
      productItems: "repairs@bctcommercialmechanics.co.uk",
      status: "inactive",
      position: "info",
      phone: "07427425672",
    },
    {
      id: "14",
      brandName: "Sonia",
      companyLogo: avtar1,
      productItems: "sales@boudencoachtravel.co.uk",
      status: "active",
      position: "sales",
      phone: "07127403972",
    },
    {
      id: "15",
      brandName: "Zarah",
      companyLogo: avtar1,
      productItems: "sales@boudencoachtravel.co.uk",
      status: "inactive",
      position: "sales",
      phone: "07427484972",
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
