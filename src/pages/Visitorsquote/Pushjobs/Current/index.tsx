import React, { useMemo, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Row,
} from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import TableContainer from "Common/TableContainer";
import { transaction } from "Common/data";
import { Link } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import CurrentTable from "./currentJobTable";

const Current = () => {
  document.title = "Current Push Job | Bouden Coach Travel";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Current Push Job" pageTitle="Push Jobs" />
         <CurrentTable />
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Current;
