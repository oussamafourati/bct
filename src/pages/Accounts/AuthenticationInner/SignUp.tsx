import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';

// Import Images
import logoDark from 'assets/images/logo-dark.png'
import logoLight from 'assets/images/logo-light.png'
import img1 from 'assets/images/auth/img-1.png'
import { Link } from 'react-router-dom';

// Formik Validation
import * as Yup from "yup";
import { useFormik } from "formik";

const SignUp = () => {

    document.title = "Vehicles| Bouden Coach Travel";

    return (
        <React.Fragment>
           <div className="page-content">
                <Container fluid={true}>
                    <Breadcrumb title="Vehicles" pageTitle="Administration" />
                    <h1>Vehicles</h1>
                </Container>
            </div>
        </React.Fragment>
    );
};

export default SignUp;