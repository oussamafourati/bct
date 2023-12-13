import React, { useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Tab,
  Nav,
  Form,
  Image,
  Dropdown,
} from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import logoDark from "assets/images/logo-dark.png";
import { Link } from "react-router-dom";
import DataTable from "react-data-table-component";

// import './google-map.scss';

const mapStyles = {
  width: "100%",
  height: "160%",
};

const LoadingContainer = () => <div>Loading...</div>;
const Maptracking = (props: any) => {
  document.title = "Tracking | Bouden Coach Travel";

  const columns = [
    {
      name: <span className="font-weight-bold fs-13">Driver</span>,
      selector: (row: any) => row.srNo,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Vehicle</span>,
      selector: (row: any) => row.FixHeadId,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Date</span>,
      selector: (row: any) => row.purchaseId,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Start</span>,
      selector: (row: any) => <Link to="#!">{row.title}</Link>,
      sortable: true,
    },
    {
      name: <span className="font-weight-bold fs-13">Arrival</span>,
      selector: (row: any) => row.user,
      sortable: true,
    },
  ];

  const data = [
    {
      srNo: "01",
      FixHeadId: "VLZ-452",
      purchaseId: "VLZ1400087402",
      title: "Post launch reminder/ post list",
      user: "Joseph Parker",
      assigned: "Alexis Clarke",
      createdBy: "Joseph Parker",
      createDate: "03 Oct, 2021",
      status: "Re-open",
      priority: "High",
    },
    {
      srNo: "02",
      FixHeadId: "VLZ-453",
      purchaseId: "VLZ1400087425",
      title: "Additional Calendar",
      user: "Diana Kohler",
      assigned: "Admin",
      createdBy: "Mary Rucker",
      createDate: "05 Oct, 2021",
      status: "On-Hold",
      priority: "Medium",
    },
    {
      srNo: "03",
      FixHeadId: "VLZ-454",
      purchaseId: "VLZ1400087438",
      title: "Make a creating an account profile",
      user: "Tonya Noble",
      assigned: "Admin",
      createdBy: "Tonya Noble",
      createDate: "27 April, 2022",
      status: "Closed",
      priority: "Low",
    },
    {
      srNo: "04",
      FixHeadId: "VLZ-455",
      purchaseId: "VLZ1400087748",
      title: "Apologize for shopping Error!",
      user: "Joseph Parker",
      assigned: "Alexis Clarke",
      createdBy: "Joseph Parker",
      createDate: "14 June, 2021",
      status: "Inprogress",
      priority: "Medium",
    },
    {
      srNo: "05",
      FixHeadId: "VLZ-456",
      purchaseId: "VLZ1400087547",
      title: "Support for theme",
      user: "Donald Palmer",
      assigned: "Admin",
      createdBy: "Donald Palmer",
      createDate: "25 June, 2021",
      status: "Closed",
      priority: "Low",
    },
    {
      srNo: "06",
      FixHeadId: "VLZ-457",
      purchaseId: "VLZ1400087245",
      title: "Benner design for FB & Twitter",
      user: "Mary Rucker",
      assigned: "Jennifer Carter",
      createdBy: "Mary Rucker",
      createDate: "14 Aug, 2021",
      status: "Inprogress",
      priority: "Medium",
    },
    {
      srNo: "07",
      FixHeadId: "VLZ-458",
      purchaseId: "VLZ1400087785",
      title: "Change email option process",
      user: "James Morris",
      assigned: "Admin",
      createdBy: "James Morris",
      createDate: "12 March, 2022",
      status: "Open",
      priority: "High",
    },
    {
      srNo: "08",
      FixHeadId: "VLZ-460",
      purchaseId: "VLZ1400087745",
      title: "Support for theme",
      user: "Nathan Cole",
      assigned: "Nancy Martino",
      createdBy: "Nathan Cole",
      createDate: "28 Feb, 2022",
      status: "On-Hold",
      priority: "Low",
    },
    {
      srNo: "09",
      FixHeadId: "VLZ-461",
      purchaseId: "VLZ1400087179",
      title: "Form submit issue",
      user: "Grace Coles",
      assigned: "Admin",
      createdBy: "Grace Coles",
      createDate: "07 Jan, 2022",
      status: "New",
      priority: "High",
    },
    {
      srNo: "10",
      FixHeadId: "VLZ-462",
      purchaseId: "VLZ140008856",
      title: "Edit customer testimonial",
      user: "Freda",
      assigned: "Alexis Clarke",
      createdBy: "Freda",
      createDate: "16 Aug, 2021",
      status: "Closed",
      priority: "Medium",
    },
    {
      srNo: "11",
      FixHeadId: "VLZ-463",
      purchaseId: "VLZ1400078031",
      title: "Ca i have an e-copy invoice",
      user: "Williams",
      assigned: "Admin",
      createdBy: "Williams",
      createDate: "24 Feb, 2022",
      status: "Open",
      priority: "Low",
    },
    {
      srNo: "12",
      FixHeadId: "VLZ-464",
      purchaseId: "VLZ1400087416",
      title: "Brand logo design",
      user: "Richard V.",
      assigned: "Admin",
      createdBy: "Richard V.",
      createDate: "16 March, 2021",
      status: "Inprogress",
      priority: "High",
    },
    {
      srNo: "13",
      FixHeadId: "VLZ-466",
      purchaseId: "VLZ1400089015",
      title: "Issue with finding information about order ?",
      user: "Olive Gunther",
      assigned: "Alexis Clarke",
      createdBy: "Schaefer",
      createDate: "32 March, 2022",
      status: "New",
      priority: "High",
    },
    {
      srNo: "14",
      FixHeadId: "VLZ-467",
      purchaseId: "VLZ1400090324",
      title: "Make a creating an account profile",
      user: "Edwin",
      assigned: "Admin",
      createdBy: "Edwin",
      createDate: "05 April, 2022",
      status: "Inprogress",
      priority: "Low",
    },
  ];
  const [activeVerticalTab, setactiveVerticalTab] = useState<number>(1);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Map Tracking" pageTitle="Tracking" />
          <Row>
            <Col xl={5}>
              <Card>
                <Card.Body>
                  <Tab.Container
                    defaultActiveKey="animation-home"
                    activeKey={activeVerticalTab}
                  >
                    <Nav
                      as="ul"
                      variant="pills"
                      className="animation-nav nav-justified gap-2 mb-3"
                      role="tablist"
                    >
                      <Nav.Item as="li">
                        <Nav.Link
                          onClick={() => setactiveVerticalTab(1)}
                          eventKey="1 animation-home"
                        >
                          Live
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item as="li">
                        <Nav.Link
                          onClick={() => setactiveVerticalTab(2)}
                          eventKey="2 animation-profile"
                        >
                          Historical
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content className="text-muted">
                      <Tab.Pane eventKey="1">
                        <DataTable columns={columns} data={data} pagination />
                      </Tab.Pane>
                      <Tab.Pane eventKey="2">
                        <DataTable columns={columns} data={data} pagination />
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </Card.Body>
              </Card>
            </Col>
            {activeVerticalTab === 1 ? (
              <Col lg={7}>
                <div
                  id="gmaps-markers"
                  className="gmaps"
                  style={{ position: "relative" }}
                >
                  <Map
                    google={props.google}
                    zoom={9}
                    style={mapStyles}
                    initialCenter={{ lat: 52.4974437, lng: -2.0284377 }}
                  >
                    <Marker position={{ lat: 52.5471571, lng: -1.9042587 }} />
                    <Marker position={{ lat: 52.4843454, lng: -1.8992083 }} />
                    <Marker position={{ lat: 52.5088171, lng: -2.003195 }} />
                  </Map>
                </div>
              </Col>
            ) : (
              <Col lg={7}>
                <div className="card-body">
                  <div
                    id="gmaps-types"
                    className="gmaps"
                    style={{ position: "relative" }}
                  >
                    <Map
                      google={props.google}
                      zoom={13}
                      style={mapStyles}
                      initialCenter={{ lat: 52.4974437, lng: -2.0284377 }}
                    >
                      <Marker position={{ lat: 52.5471571, lng: -1.9042587 }} />
                      <Marker position={{ lat: 52.4843454, lng: -1.8992083 }} />
                      <Marker position={{ lat: 52.5088171, lng: -2.003195 }} />
                    </Map>
                  </div>
                </div>
              </Col>
            )}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAbvyBxmMbFhrzP9Z8moyYr6dCr-pzjhBE",
  LoadingContainer: LoadingContainer,
  v: "3",
})(Maptracking);
