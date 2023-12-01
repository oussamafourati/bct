import React, { useState } from "react";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  OverlayTrigger,
  ProgressBar,
  Row,
  Tooltip,
} from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import SimpleBar from "simplebar-react";
import { Link, useLocation } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// Import Images
import productsImg31 from "../../../assets/images/products/images.jpg";
import productsImg32 from "../../../assets/images/products/images (1).jpg";
import productsImg33 from "../../../assets/images/products/images (2).jpg";
import productsImg34 from "../../../assets/images/products/images (3).jpg";
import productsImg35 from "../../../assets/images/products/mercedes-benz-classe-s-450-4matic-limousine-54092.webp";

import avatar1 from "../../../assets/images/users/avatar-1.jpg";
import avatar3 from "../../../assets/images/users/avatar-3.jpg";
import avatar5 from "../../../assets/images/users/avatar-5.jpg";
import avatar8 from "../../../assets/images/users/avatar-8.jpg";

SwiperCore.use([FreeMode, Navigation, Thumbs]);

const VehicleDetails = () => {
  document.title = "Vehicle Details | Bouden Coach Travel";

  const LocationVehicle = useLocation();

  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Overview" pageTitle="Vehicle" />
          <Row className="gx-lg-4">
            <Col xl={4} lg={8} className="mx-auto">
              <Row className="sticky-side-div">
                <Col lg={2}>
                  <Swiper
                    onSwiper={setThumbsSwiper}
                    direction={"vertical"}
                    slidesPerView={4}
                    freeMode={true}
                    watchSlidesProgress={true}
                    spaceBetween={10}
                    className="productSwiper productswiper-2 mb-3 mb-lg-0"
                  >
                    {/* thumbsSlider */}
                    <div className="swiper-wrapper product-wrapper">
                      <SwiperSlide>
                        <div className="product-thumb rounded-3 cursor-pointer">
                          <img
                            src={productsImg31}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="product-thumb rounded-3 cursor-pointer">
                          <img
                            src={productsImg32}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="product-thumb rounded-3 cursor-pointer">
                          <img
                            src={productsImg33}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="product-thumb rounded-3 cursor-pointer">
                          <img
                            src={productsImg34}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </div>
                      </SwiperSlide>
                      <SwiperSlide>
                        <div className="product-thumb rounded-3 cursor-pointer">
                          <img
                            src={productsImg35}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </div>
                      </SwiperSlide>
                    </div>
                  </Swiper>
                </Col>
                <Col lg={10}>
                  <div className="bg-light rounded-3 position-relative ribbon-box overflow-hidden">
                    <Swiper
                      navigation={true}
                      thumbs={{ swiper: thumbsSwiper }}
                      className="productSwiper2"
                    >
                      <div className="swiper-wrapper">
                        <SwiperSlide>
                          <img
                            src={productsImg31}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src={productsImg32}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src={productsImg33}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src={productsImg34}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </SwiperSlide>
                        <SwiperSlide>
                          <img
                            src={productsImg35}
                            alt=""
                            className="img-fluid rounded-3"
                          />
                        </SwiperSlide>
                      </div>
                    </Swiper>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col xl={8}>
              <div className="mt-5 mt-xl-0">
                <div className="d-flex">
                  <div className="flex-grow-1">
                    <h4>{LocationVehicle.state.name}</h4>
                    <div className="hstack gap-3 flex-wrap">
                      <div>
                        <Link to="#" className="text-primary d-block">
                          {LocationVehicle.state.serialNumber}
                        </Link>
                      </div>
                      <div className="vr"></div>
                      <div className="text-muted">
                        <span className="text-body fw-medium">
                          {LocationVehicle.state.brand}
                        </span>
                      </div>
                      <div className="vr"></div>
                      <div className="text-muted">
                        <span className="text-body fw-medium">
                          {LocationVehicle.state.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink-0">
                    <OverlayTrigger
                      placement="top"
                      overlay={<Tooltip id="top"> Edit </Tooltip>}
                    >
                      <Link to="#" className="btn btn-soft-secondary btn-icon">
                        <i className="ri-pencil-fill align-bottom"></i>
                      </Link>
                    </OverlayTrigger>
                  </div>
                </div>
                <Row className="mt-4">
                  <Col lg={3} sm={6} className="g-3">
                    <div className="p-2 border border-dashed rounded text-center">
                      <p className="mb-2 text-uppercase text-muted fs-13">
                        Standard Cost :
                      </p>
                      <h5 className="mb-0">$120.40</h5>
                    </div>
                  </Col>

                  <Col lg={3} sm={6} className="g-3">
                    <div className="p-2 border border-dashed rounded text-center">
                      <p className="mb-2 text-uppercase text-muted fs-13">
                        Standard Distance :
                      </p>
                      <h5 className="mb-0">2,234</h5>
                    </div>
                  </Col>

                  <Col lg={3} sm={6} className="g-3">
                    <div className="p-2 border border-dashed rounded text-center">
                      <p className="mb-2 text-uppercase text-muted fs-13">
                        Cost per km/mile :
                      </p>
                      <h5 className="mb-0">1,230</h5>
                    </div>
                  </Col>

                  <Col lg={3} sm={6} className="g-3">
                    <div className="p-2 border border-dashed rounded text-center">
                      <p className="mb-2 text-uppercase text-muted fs-13">
                        Cost of Extra Luaggue :
                      </p>
                      <h5 className="mb-0">$60,645</h5>
                    </div>
                  </Col>
                </Row>

                <Row>
                  <Col xl={6}>
                    <div className=" mt-4">
                      <h5 className="fs-15 mb-2">Status :</h5>
                      <div>
                        <span className="bg-danger-subtle text-danger fs-15 rounded-3">
                          Active
                        </span>
                      </div>
                    </div>
                  </Col>

                  <Col xl={6}>
                    <div className="mt-4">
                      <h5 className="fs-15 mb-3">Fuel Type :</h5>
                      <h5 className="mb-0">$60,645</h5>
                    </div>
                  </Col>
                </Row>
                <h5 className="fs-15">Product Details:</h5>
                <div className="table-responsive">
                  <table className="table table-sm table-borderless align-middle description-table">
                    <tbody>
                      <tr>
                        <th>Luggage capacity</th>
                        <td>20kg</td>
                      </tr>
                      <tr>
                        <th>Passenger Capicity</th>
                        <td>6</td>
                      </tr>
                      <tr>
                        <th>Type</th>
                        <td>Car</td>
                      </tr>
                      <tr>
                        <th>Service Date</th>
                        <td>1</td>
                      </tr>
                      <tr>
                        <th>Speed Limit</th>
                        <td>Modern</td>
                      </tr>
                      <tr>
                        <th>Ownership</th>
                        <td>TBS037</td>
                      </tr>
                      <tr>
                        <th>Owner Name</th>
                        <td>Formal Shirt</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="d-flex flex-wrap gap-3 align-items-center mt-4">
                  <button type="button" className="btn btn-success btn-label">
                    <i className="ri-wifi-line label-icon align-middle fs-16 me-2"></i>{" "}
                    Wifi
                  </button>
                  <button type="button" className="btn btn-danger btn-label">
                    <i className="ri-fridge-line label-icon align-middle fs-16 me-2"></i>{" "}
                    Fridge
                  </button>
                  <button type="button" className="btn btn-success btn-label">
                    <i className="ri-tv-2-line label-icon align-middle fs-16 me-2"></i>{" "}
                    Smart Screen
                  </button>
                  <button type="button" className="btn btn-success btn-label">
                    <i className="ph ph-wind label-icon align-middle fs-16 me-2"></i>{" "}
                    A.C
                  </button>
                </div>
                <div>
                  <div className="d-flex flex-wrap gap-4 justify-content-between align-items-center mt-4">
                    <div className="flex-shrink-0 w-xl">
                      <h5 className="fs-15 mb-3 fw-medium">Legal Card</h5>
                      <h4 className="fw-bold mb-3">Number</h4>
                      <p className="text-muted mb-0">20 March, 2019</p>
                    </div>
                    <hr className="vr" />
                    <div className="flex-shrink-0 w-xl">
                      <h5 className="fs-15 mb-3 fw-medium">Insurance</h5>
                      <h4 className="fw-bold mb-3">20 March, 2019</h4>
                      <p className="text-muted mb-0">Future Date:</p>
                    </div>
                    <hr className="vr" />
                    <div className="flex-shrink-0 w-xl">
                      <h5 className="fs-15 mb-3 fw-medium">Exam</h5>
                      <h4 className="fw-bold mb-3">20 March, 2019</h4>
                      <p className="text-muted mb-0">Future Date:</p>
                    </div>
                    <hr className="vr" />
                    <div className="flex-shrink-0 w-xl">
                      <h5 className="fs-15 mb-3 fw-medium">Taxes</h5>
                      <h4 className="fw-bold mb-3">20 March, 2019</h4>
                      <p className="text-muted mb-0">Future Date:</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default VehicleDetails;
