import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Image, Modal, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import avtar1 from "assets/images/users/avatar-1.jpg";
import driverAnimation from "../../../assets/images/Fatmahhhh.json";
import Lottie, { LottieRefCurrentProps } from "lottie-react";

const DriverTable = ({ driver }: any) => {
  const noresult: any = useRef();
  const teamList: any = useRef();
  const [brandList, setBrandList] = useState([]);
  const [show, setShow] = useState(false);
  const lottieRef3 = useRef<LottieRefCurrentProps>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = brandList.slice(startIndex, endIndex);
  const totalPages = Math.ceil(brandList.length / itemsPerPage);

  useEffect(() => {
    setBrandList(driver);
    setItemsPerPage(15);
  }, [driver]);

  const handleSearchClick = (event: any) => {
    setCurrentPage(1);
    let inputVal = event.toLowerCase();

    const filterItems = (arr: any, query: any) => {
      return arr.filter((el: any) => {
        return el.brandName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    };

    let filterData = filterItems(driver, inputVal);
    setBrandList(filterData);
    if (filterData.length === 0) {
      noresult.current.style.display = "block";
      teamList.current.style.display = "none";
    } else {
      noresult.current.style.display = "none";
      // teamList.current.style.display = "block";
    }
  };

  const navigate = useNavigate();

  function tog_AddDriver() {
    navigate("/new-driver");
  }

  return (
    <React.Fragment>
      <Row className="align-items-center mb-4">
        <Col xxl={3} lg={4} sm={9}>
          <div className="search-box mb-3 mb-sm-0">
            <input
              onChange={(e: any) => handleSearchClick(e.target.value)}
              type="text"
              className="form-control"
              id="searchInputList"
              autoComplete="off"
              placeholder="Search drivers..."
            />
            <i className="ri-search-line search-icon"></i>
          </div>
        </Col>
        <Col sm={3} className="col-lg-auto ms-auto">
          <Button
            variant="success"
            onClick={() => tog_AddDriver()}
            className="w-100 btn-sm"
          >
            <i className="mdi mdi-account-plus me-1 align-middle fs-22"></i> Add
            Driver
          </Button>
        </Col>
      </Row>
      <Lottie
        lottieRef={lottieRef3}
        onComplete={() => {
          lottieRef3.current?.goToAndPlay(5, true);
        }}
        animationData={driverAnimation}
        loop={false}
        style={{ width: 80 }}
      />{" "}
      <Row
        className="d-flex justify-content-center row-cols-xxl-5 row-cols-lg-4 row-cols-sm-2 row-cols-1 gap-5"
        id="brand-list"
        ref={teamList}
      >
        {(paginatedData || []).map((item: any, key: number) => (
          <Link
            className="page-link"
            to={`/driver-details/${item.brandName}`}
            state={item}
          >
            <Col key={key}>
              <Card className="card brand-widget card-animate p-1">
                <div className="d-flex mb-4 align-items-center">
                  <div className="flex-shrink-0">
                    <Image
                      src={avtar1}
                      alt=""
                      className="avatar-sm rounded-circle"
                    />
                  </div>
                  <div className="flex-grow-1 ms-2">
                    <h5 className="card-title mb-1">{item.brandName}</h5>
                    <p className="badge bg-danger">Inactive</p>
                    <span>
                      {" "}
                      <i className="mdi mdi-bus align-middle"></i>
                    </span>
                  </div>
                </div>
                <span>
                  <i className="mdi mdi-phone align-middle"></i> +44 203 048
                  4377
                </span>
                <p>
                  <b>Driving Licence:</b> Exp. 18/05/2025
                </p>
                <p>
                  <b>DQC:</b> Exp. 18/05/2025
                </p>
                <Card.Footer className="p-0">
                  <span className="d-flex justify-content-end">
                    142{" "}
                    <i className="mdi mdi-briefcase-variant align-middle"></i>
                  </span>
                </Card.Footer>
              </Card>
            </Col>
          </Link>
        ))}
      </Row>
      <div
        id="noresult"
        className=""
        ref={noresult}
        style={{ display: "none" }}
      >
        <div className="text-center py-4">
          <div className="avatar-md mx-auto mb-4">
            <div className="avatar-title bg-primary-subtle text-primary rounded-circle fs-24">
              <i className="bi bi-search"></i>
            </div>
          </div>
          <h5 className="mt-2">Sorry! No Result Found</h5>
        </div>
      </div>
      <Row className="mb-4" id="pagination-element" style={{ display: "flex" }}>
        <Col lg={12}>
          <div className="pagination-block pagination pagination-separated justify-content-center justify-content-sm-end mb-sm-0">
            <div
              className="page-item"
              onClick={() => setCurrentPage(currentPage - 1)}
            >
              <Link to="#" className="page-link" id="page-prev">
                <i className="mdi mdi-chevron-left"></i>
              </Link>
            </div>
            {Array.from({ length: totalPages }, (_, i) => {
              const pageNumber = i + 1;
              const isActive = pageNumber === currentPage;
              return (
                <span
                  id="page-num"
                  className="pagination"
                  key={pageNumber}
                  onClick={() => setCurrentPage(pageNumber)}
                >
                  <div className={isActive ? "page-item active" : "page-item"}>
                    <Link className="page-link clickPageNumber" to="#">
                      {" "}
                      {pageNumber}
                    </Link>
                  </div>
                </span>
              );
            })}
            <div
              className="page-item"
              onClick={() => setCurrentPage(currentPage + 1)}
            >
              <Link to="#" className="page-link" id="page-next">
                <i className="mdi mdi-chevron-right"></i>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      {/* <Row>
        <Col>
          <Card className="card-body">
            <div className="d-flex mb-4 align-items-center">
              <div className="flex-shrink-0">
                <Image
                  src={avtar1}
                  alt=""
                  className="avatar-sm rounded-circle"
                />
              </div>
              <div className="flex-grow-1 ms-2">
                <h5 className="card-title mb-1">Alfred Hurst</h5>
                <p className="badge bg-success">Active</p>
                <span>
                  {" "}
                  <i className="mdi mdi-car-side align-middle"></i>{" "}
                  <i className="mdi mdi-bus align-middle"></i>
                </span>
                {/* <p className="text-muted mb-0">
                          <span className="mdi mdi-car-side"></span>
                        </p> 
              </div>
            </div>
            <span>
              <i className="mdi mdi-phone align-middle"></i> +44 203 048 4377
            </span>
            {/* <span className="mdi mdi-email-outline"></span>{" "}
                    <p className="card-text text-muted">
                      trebor22@lovelyaibrain.com
                    </p> 
            <p>
              <b>Driving Licence:</b> Exp. 18/05/2025
            </p>
            <p>
              <b>DQC:</b> Exp. 18/05/2025
            </p>
            <Card.Footer className="p-0">
              <span className="d-flex justify-content-end">
                142 <i className="mdi mdi-briefcase-variant align-middle"></i>
              </span>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="card-body">
            <div className="d-flex mb-4 align-items-center">
              <div className="flex-shrink-0">
                <Image
                  src={avtar1}
                  alt=""
                  className="avatar-sm rounded-circle"
                />
              </div>
              <div className="flex-grow-1 ms-2">
                <h5 className="card-title mb-1">Alfred Hurst</h5>
                <p className="badge bg-success">Active</p>
                <span>
                  {" "}
                  <i className="mdi mdi-car-side align-middle"></i>
                </span>
                {/* <p className="text-muted mb-0">
                          <span className="mdi mdi-car-side"></span>
                        </p> 
              </div>
            </div>
            <span>
              <i className="mdi mdi-phone align-middle"></i> +44 203 048 4377
            </span>
            {/* <span className="mdi mdi-email-outline"></span>{" "}
                    <p className="card-text text-muted">
                      trebor22@lovelyaibrain.com
                    </p> 
            <p>
              <b>Driving Licence:</b> Exp. 18/05/2025
            </p>
            <p>
              <b>DQC:</b> Exp. 18/05/2025
            </p>
            <Card.Footer className="p-0">
              <span className="d-flex justify-content-end">
                142 <i className="mdi mdi-briefcase-variant align-middle"></i>
              </span>
            </Card.Footer>
          </Card>
        </Col>
        <Col>
          <Card className="card-body">
            <div className="d-flex mb-4 align-items-center">
              <div className="flex-shrink-0">
                <Image
                  src={avtar1}
                  alt=""
                  className="avatar-sm rounded-circle"
                />
              </div>
              <div className="flex-grow-1 ms-2">
                <h5 className="card-title mb-1">Alfred Hurst</h5>
                <p className="badge bg-danger">Inactive</p>
                <span>
                  {" "}
                  <i className="mdi mdi-bus align-middle"></i>
                </span>
                {/* <p className="text-muted mb-0">
                          <span className="mdi mdi-car-side"></span>
                        </p>
              </div>
            </div>
            <span>
              <i className="mdi mdi-phone align-middle"></i> +44 203 048 4377
            </span>
            {/* <span className="mdi mdi-email-outline"></span>{" "}
                    <p className="card-text text-muted">
                      trebor22@lovelyaibrain.com
                    </p> 
            <p>
              <b>Driving Licence:</b> Exp. 18/05/2025
            </p>
            <p>
              <b>DQC:</b> Exp. 18/05/2025
            </p>
            <Card.Footer className="p-0">
              <span className="d-flex justify-content-end">
                142 <i className="mdi mdi-briefcase-variant align-middle"></i>
              </span>
            </Card.Footer>
          </Card>
        </Col>
      </Row> */}
    </React.Fragment>
  );
};

export default DriverTable;
