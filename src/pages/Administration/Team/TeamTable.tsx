import React, { useEffect, useRef, useState } from "react";
import { Button, Card, Col, Image, Modal, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import avtar1 from "assets/images/users/avatar-1.jpg";

const TeamTable = ({ team }: any) => {
  const noresult: any = useRef();
  const teamList: any = useRef();
  const [brandList, setBrandList] = useState([]);
  const [show, setShow] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(15);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedData = brandList.slice(startIndex, endIndex);
  const totalPages = Math.ceil(brandList.length / itemsPerPage);

  useEffect(() => {
    setBrandList(team);
    setItemsPerPage(15);
  }, [team]);

  const handleSearchClick = (event: any) => {
    setCurrentPage(1);
    let inputVal = event.toLowerCase();

    const filterItems = (arr: any, query: any) => {
      return arr.filter((el: any) => {
        return el.brandName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
      });
    };

    let filterData = filterItems(team, inputVal);
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

  function tog_AddTeam() {
    navigate("/new-team");
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
              placeholder="Search teams..."
            />
            <i className="ri-search-line search-icon"></i>
          </div>
        </Col>
        <Col sm={3} className="col-lg-auto ms-auto">
          <Button
            variant="success"
            onClick={() => tog_AddTeam()}
            className="w-100 btn-sm"
          >
            <i className="mdi mdi-account-multiple-plus me-1 align-middle fs-22"></i>{" "}
            Add Team
          </Button>
        </Col>
      </Row>

      <Row
        className="d-flex justify-content-center row-cols-xxl-5 row-cols-lg-4 row-cols-sm-2 row-cols-1 gap-5"
        id="brand-list"
        ref={teamList}
      >
        {(paginatedData || []).map((item: any, key: number) => (
          <Link
            className="page-link"
            to={`/team-details/${item.brandName}`}
            state={item}
          >
            <Col key={key}>
              <Card>
                <Card.Header>
                  <div className="d-flex justify-content-between">
                    <h6 className="card-title mb-0">{item.brandName}</h6>
                    {item.status === "active" ? (
                      <span className="badge badge-soft-success text-uppercase">
                        Active
                      </span>
                    ) : (
                      <span className="badge badge-soft-danger text-uppercase">
                        Inactive
                      </span>
                    )}
                  </div>
                  <span>
                    {item.position === "info" ? (
                      <span className="badge badge-soft-info text-uppercase">
                        Info
                      </span>
                    ) : item.position === "sales" ? (
                      <span className="badge badge-soft-secondary text-uppercase">
                        Sales
                      </span>
                    ) : (
                      <span className="badge badge-soft-dark text-uppercase">
                        Admin
                      </span>
                    )}
                  </span>
                </Card.Header>
                <Card.Body className="p-4 text-center">
                  <div className="mx-auto avatar-md mb-3">
                    <img
                      src={avtar1}
                      alt=""
                      className="img-fluid rounded-circle"
                    />
                  </div>
                  <h5 className="card-title mb-1">{item.brandName}</h5>
                  <p className="text-muted mb-0">{item.productItems}</p>
                  <p className="text-muted mb-0">{item.phone}</p>
                </Card.Body>
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
    </React.Fragment>
  );
};

export default TeamTable;
