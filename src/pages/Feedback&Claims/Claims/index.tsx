import React, { useEffect, useMemo, useRef, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import TableContainer from "Common/TableContainer";
import { shipments } from "Common/data";
import Swal from "sweetalert2";

const paragraphStyles = {
  WebkitLineClamp: 2,
  WebkitBoxOrient: "vertical" as const,
  overflow: "hidden",
  display: "-webkit-box",
};
const Claims = () => {
  document.title = "Claims | Bouden Coach Travel";

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });

  const deleteClaim = () => {
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire({
            title: "Cancelled",
            text: "Your imaginary file is safe :)",
            icon: "error",
          });
        }
      });
  };

  const answerClaims = async () => {
    await Swal.fire({
      title: "Submit your reply",
      input: "textarea",
      inputAttributes: {
        autocapitalize: "off",
      },
      inputPlaceholder: "Type your message here...",
      showCancelButton: true,
      confirmButtonText: `
    Send <i class="ri-send-plane-fill"></i>
  `,
      showLoaderOnConfirm: true,
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [showReadMoreButton, setShowReadMoreButton] = useState<boolean>(false);

  const ref = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (ref.current) {
      setShowReadMoreButton(
        ref.current.scrollHeight !== ref.current.clientHeight
      );
    }
  }, []);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Breadcrumb title="Claims" pageTitle="Feedback&Claims" />
          <Row>
            <div className="col-12">
              <Row>
                <Col xxl={4}>
                  <Card>
                    <Card.Header>
                      <Link
                        to="#"
                        className="link-danger fw-medium float-end"
                        onClick={deleteClaim}
                      >
                        Delete
                      </Link>
                      <h6 className="card-title mb-0">
                        Quality Forcast{" "}
                        <span className="badge bg-success align-middle fs-10">
                          Answered
                        </span>
                      </h6>
                    </Card.Header>
                    <Card.Body>
                      <p
                        className="card-text"
                        style={isOpen ? undefined : paragraphStyles}
                        ref={ref}
                      >
                        They all have something to say beyond the words on the
                        page. They can come across as casual or neutral, exotic
                        or graphic. Cosby sweater eu banh mi, qui irure terry
                        richardson ex squid. They all have something to say
                        beyond the words on the page. They can come across as
                        casual or neutral, exotic or graphic. Cosby sweater eu
                        banh mi, qui irure terry richardson ex squid.
                      </p>
                      <div className="text-end">
                        {showReadMoreButton && (
                          <Link
                            to="#"
                            className="link-dark fw-medium"
                            onClick={() => setIsOpen(!isOpen)}
                          >
                            {isOpen ? (
                              <i className="ri-arrow-up-s-line align-middle"></i>
                            ) : (
                              <i className="ri-arrow-down-s-line align-middle"></i>
                            )}
                          </Link>
                        )}
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xxl={4}>
                  <Card>
                    <Card.Header>
                      <Link to="#" className="link-danger fw-medium float-end">
                        Delete
                      </Link>
                      <h6 className="card-title mb-0">
                        Quality Forcast
                        <span className="badge bg-success align-middle fs-10">
                          Answered
                        </span>
                      </h6>
                    </Card.Header>
                    <Card.Body>
                      <p className="card-text">
                        They all have something to say beyond the words on the
                        page. They can come across as casual or neutral, exotic
                        or graphic. Cosby sweater eu banh mi, qui irure terry
                        richardson ex squid.
                      </p>
                      <div className="text-end">
                        <Link to="#" className="link-dark fw-medium">
                          <i className="ri-arrow-down-s-line align-middle"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
                <Col xxl={4}>
                  <Card>
                    <Card.Header>
                      <Link to="#" className="link-danger fw-medium float-end">
                        Delete
                      </Link>
                      <h6 className="card-title mb-0">
                        Quality Forcast{" "}
                        <span className="badge bg-success align-middle fs-10">
                          Answered
                        </span>
                      </h6>
                    </Card.Header>
                    <Card.Body>
                      <p className="card-text">
                        They all have something to say beyond the words on the
                        page. They can come across as casual or neutral, exotic
                        or graphic. Cosby sweater eu banh mi, qui irure terry
                        richardson ex squid.
                      </p>
                      <div className="text-end">
                        <Link to="#" className="link-dark fw-medium">
                          <i className="ri-arrow-down-s-line align-middle"></i>
                        </Link>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </div>
          </Row>

          <Row>
            <Col xxl={4}>
              <Card>
                <Card.Header>
                  <Link
                    to="#"
                    className="link-secondary fw-medium float-end"
                    onClick={() => answerClaims()}
                  >
                    Answer
                  </Link>
                  <h6 className="card-title mb-0">
                    Check your Payment{" "}
                    <span className="badge bg-warning align-middle fs-10">
                      Pending
                    </span>
                  </h6>
                </Card.Header>
                <Card.Body>
                  <p className="card-text">
                    They all have something to say beyond the words on the page.
                    They can come across as casual or neutral, exotic or
                    graphic. Cosby sweater eu banh mi, qui irure terry
                    richardson ex squid.
                  </p>
                  <div className="text-end">
                    <Link to="#" className="link-dark fw-medium">
                      <i className="ri-arrow-down-s-line align-middle"></i>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={4}>
              <Card>
                <Card.Header>
                  <Link to="#" className="link-secondary fw-medium float-end">
                    Answer
                  </Link>
                  <h6 className="card-title mb-0">
                    Check your Payment{" "}
                    <span className="badge bg-warning align-middle fs-10">
                      Pending
                    </span>
                  </h6>
                </Card.Header>
                <Card.Body>
                  <p className="card-text">
                    They all have something to say beyond the words on the page.
                    They can come across as casual or neutral, exotic or
                    graphic. Cosby sweater eu banh mi, qui irure terry
                    richardson ex squid.
                  </p>
                  <div className="text-end">
                    <Link to="#" className="link-dark fw-medium">
                      <i className="ri-arrow-down-s-line align-middle"></i>
                    </Link>
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col xxl={4}>
              <Card>
                <Card.Header>
                  <Link to="#" className="link-secondary fw-medium float-end">
                    Answer
                  </Link>
                  <h6 className="card-title mb-0">
                    Check your Payment{" "}
                    <span className="badge bg-warning align-middle fs-10">
                      Pending
                    </span>
                  </h6>
                </Card.Header>
                <Card.Body>
                  <p className="card-text">
                    They all have something to say beyond the words on the page.
                    They can come across as casual or neutral, exotic or
                    graphic. Cosby sweater eu banh mi, qui irure terry
                    richardson ex squid.
                  </p>
                  <div className="text-end">
                    <Link to="#" className="link-dark fw-medium">
                      <i className="ri-arrow-down-s-line align-middle"></i>
                    </Link>
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

export default Claims;
