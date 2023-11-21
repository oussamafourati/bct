import React, { useState, useEffect, useMemo } from 'react';
import { Button, Card, Col, Container, Dropdown, Form, Modal, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import { sellerGrid } from 'Common/data';
import { Link } from 'react-router-dom';

const SellersGridView = () => {

     document.title = "Trip Models | Bouden Coach Travel";

    

    return (
        <React.Fragment>
            <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Trip Models" pageTitle="Programming" />
                    <h1>Trip Models</h1>
                </Container>
            </div>
        </React.Fragment>
    );
}

export default SellersGridView;