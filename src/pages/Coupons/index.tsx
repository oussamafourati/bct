import React, { useState, useMemo } from 'react';
import { Button, Card, Col, Container, Form, Modal, Offcanvas, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import TableContainer from "Common/TableContainer";
import { couponsList } from "Common/data";
import { Link } from 'react-router-dom';
import Flatpickr from "react-flatpickr";

import offerbanner from "../../assets/images/ecommerce/offer-banner.jpg";

const Coupons = () => {

     document.title = "Quote Request | Bouden Coach Travel";


    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Quote Request " pageTitle="Visitors Quote" />
                   <h1>Quote Request </h1>
                </Container>
            </div>

           

        </React.Fragment >
    );
};

export default Coupons;