import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";
// import './google-map.scss';

const mapStyles = {
  width: "100%",
  height: "160%",
};

const LoadingContainer = () => <div>Loading...</div>;
const Maptracking = (props: any) => {
  document.title = " Google Maps | Toner eCommerce + React Admin Template";
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Map Tracking" pageTitle="Tracking" />
          <Row>
            <Col lg={9}>
              <div
                id="gmaps-markers"
                className="gmaps"
                style={{ position: "relative" }}
              >
                <Map
                  google={props.google}
                  zoom={5}
                  style={mapStyles}
                  initialCenter={{ lat: 52.7275883, lng: -7.6062285 }}
                >
                  <Marker position={{ lat: 52.4974437, lng: -2.0284377 }} />
                </Map>
              </div>
            </Col>
            <Col lg={3}>
              <Card>
                <Card.Header className="d-flex">
                  <h5 className="card-title flex-grow-1 mb-0">Trip Details</h5>
                  <div className="flex-shrink-0">
                    <button
                      type="button"
                      className="btn-close"
                      aria-label="Close"
                    ></button>
                  </div>
                </Card.Header>
                <Card.Body id="transactionDetails">
                  <div className="table-responsive table-card">
                    <table className="table table-borderless align-middle">
                      <tbody>
                        <tr>
                          <td>
                            <span className="text-muted text-uppercase">
                              Start time
                            </span>
                          </td>
                          <td>
                            <span className="fw-semibold">
                              {"#TBSC320002830"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="text-muted text-uppercase">
                              Start point
                            </span>
                          </td>
                          <td>
                            <span className="fw-semibold">
                              {"15 Jan, 2023"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="text-muted text-uppercase">
                              End time
                            </span>
                          </td>
                          <td>
                            <span className="fw-semibold">{"TB211145424"}</span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="text-muted text-uppercase">
                              End point
                            </span>
                          </td>
                          <td>
                            <span className="fw-semibold">
                              {"Diana Nichols"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="text-muted text-uppercase">
                              Delays
                            </span>
                          </td>
                          <td>
                            <span className="fw-semibold">
                              {"diana@toner.com"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <span className="text-muted text-uppercase">
                              Route changes
                            </span>
                          </td>
                          <td>
                            <span className="fw-semibold">{"$253.32"}</span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </Card.Body>
              </Card>
            </Col>
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
