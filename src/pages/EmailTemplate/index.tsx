import BreadCrumb from "Common/BreadCrumb";
import React from "react";
import { Container, Row } from "react-bootstrap";

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
import Template from "./Template";

const EmailTemplates = () => {
  document.title = "Email Templates | Bouden Coach Travel";

  const emails = [
    {
      id: "1",
          brandName: "Subscription Request",
      categoryIcon: "ri-mail-open-line",
      productItems: "Sub-contractor",
    },
    {
      id: "2",
        brandName: "Resquest Accpetation",
      categoryIcon: "ri-mail-open-line",
      productItems: "Sub-contractor",
    },
    {
      id: "3",
        brandName: "Resquest rejection",
      categoryIcon: "ri-mail-open-line",
      productItems: "Sub-contractor ",
    },
    {
      id: "4",
        brandName: "Quote Request Resume",
      categoryIcon: "ri-mail-open-line",
      productItems: "Visitor",
    },
    {
      id: "5",
        brandName: "Quote Response",
      categoryIcon: "ri-mail-open-line",
      productItems: "Visitor",
    },
    {
      id: "6",
        brandName: "Booking Confirmation ",
      categoryIcon: "ri-mail-open-line",
      productItems: "Visitor",
    },
    {
      id: "7",
        brandName: "Paiement reminder",
      categoryIcon: "ri-mail-open-line",
      productItems: "Visitor",
    },
    {
      id: "8",
        brandName: "Trip cancellation",
      categoryIcon: "ri-mail-open-line",
      productItems: "Visitor",
    },
    {
      id: "9",
        brandName: "Booking Rejection",
      categoryIcon: "ri-mail-open-line",
      productItems: "Visitor",
    },
    {
      id: "10",
        brandName: "	Paiement Confirmation",
      categoryIcon: "ri-mail-open-line",
      productItems: "Visitor",
    },
    {
      id: "11",
      brandName: "Feedback Email ",
      categoryIcon: "ri-mail-open-line",
      productItems: "Visitor",
    },
  ];

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <BreadCrumb title="Email Templates" pageTitle="Dashboard" />
          <Row>
            <Template emails={emails} />
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default EmailTemplates;
