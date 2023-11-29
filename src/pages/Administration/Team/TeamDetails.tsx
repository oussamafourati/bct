import React from "react";
import { Button, Card, Col, Container, Dropdown, Form, Row, Table } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import profilebgImg from "../../../assets/images/profile-bg.jpg";
import companyImg3 from "../../../assets/images/companies/img-3.png";

import avatar1 from "../../../assets/images/users/avatar-1.jpg";

import productsImg1 from "../../../assets/images/products/img-1.png";
import productsImg4 from "../../../assets/images/products/img-4.png";
import productsImg5 from "../../../assets/images/products/img-5.png";
import productsImg6 from "../../../assets/images/products/img-6.png";
import productsImg7 from "../../../assets/images/products/img-7.png";
import productsImg8 from "../../../assets/images/products/img-8.png";
import productsImg9 from "../../../assets/images/products/img-9.png";
import productsImg11 from "../../../assets/images/products/img-11.png";
import productsImg14 from "../../../assets/images/products/img-14.png";
import productsImg15 from "../../../assets/images/products/img-15.png";
import { Link } from "react-router-dom";

const sellersOverview = [
  {
    id: 1,
    productName: "World's most expensive t- shirt",
    price: "$266.24",
    deletePrice: " $354.99",
    rating: "4.9",
    isBestArrival: true,
    productsImg: productsImg8,
  },
  {
    id: 2,
    productName: "Like Style Women Black Handbag",
    price: "$742.00",
    rating: "4.2 ",
    isBestArrival: false,
    productsImg: productsImg15,
  },
  {
    id: 3,
    productName: "Black Horn Backpack For Men Bags 30 L Backpack",
    price: "$112.50",
    deletePrice: " $150.00",
    rating: "3.8",
    isBestArrival: true,
    productsImg: productsImg1,
  },
  {
    id: 4,
    productName: "Lace-Up Casual Shoes For Men",
    price: "$229.00",
    rating: "4.0",
    isBestArrival: false,
    productsImg: productsImg5,
  },
  {
    id: 5,
    productName: "Sangria Girls Mint Green & Off-White Solid Open Toe Flats",
    price: "$24.07",
    deletePrice: "$96.26",
    rating: "4.7",
    isBestArrival: true,
    productsImg: productsImg4,
  },
  {
    id: 6,
    productName: "Innovative education book",
    price: "$96.26",
    rating: "4.9",
    isBestArrival: false,
    productsImg: productsImg7,
  },
  {
    id: 7,
    productName: "Striped High Neck Casual Men Orange Sweater",
    price: "$62.40",
    deletePrice: "$120.00",
    rating: "4.4",
    isBestArrival: false,
    productsImg: productsImg6,
  },
  {
    id: 8,
    productName: "Urban Monkey Caps",
    price: "$194.65",
    deletePrice: "$229.00",
    rating: "4.9",
    isBestArrival: false,
    productsImg: productsImg9,
  },
  {
    id: 9,
    productName: "Plastic Designer Cafe Chair",
    price: "$232.24",
    deletePrice: "$354.99",
    rating: "4.2",
    isBestArrival: false,
    productsImg: productsImg14,
  },
  {
    id: 10,
    productName: "Stylish Collar Full Sleeve Tshirt",
    price: "$160.00",
    deletePrice: "$245.00s",
    rating: "4.2",
    isBestArrival: false,
    productsImg: productsImg11,
  },
];

const bookmarkProduct = (e: any) => {
  const ele = e.target.closest("button");
  if (ele.classList.contains("active")) {
    ele.classList.remove("active");
  } else {
    ele.classList.add("active");
  }
};

const TeamDetails = () => {
  document.title = "Team Details | Bouden Coach Travel";
  const LocationFournisseur = useLocation();
  console.log(LocationFournisseur.state);
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid={true}>
          <Row className="d-flex align-items-center">
            <Col lg={12}>
                        <Card.Body style={{width: "100%", height: "100%"}}>
                            <Row>
                                <Col lg={3}>
                                    <div className="profile-user-img position-relative">
                                        <img src={avatar1} alt="" className="rounded object-fit-cover" />
                                        <span className="position-absolute top-0 start-100 translate-middle badge border border-3 border-white rounded-circle bg-success p-1 mt-1 me-1"><span className="visually-hidden">unread messages</span></span>
                                    </div>
                                </Col>
                                <Col lg={9}>
                                    <div className="d-flex border-bottom border-bottom-dashed pb-3 mb-3 mt-4 mt-lg-0">
                                        <div className="flex-grow-1">
                                            <h5>Raquel Murillo</h5>
                                            <p className="text-muted mb-0">Sales & Marketing Manager</p>
                                        </div>
                                        <div className="flex-shrink-0">
                                            <Dropdown>
                                                <Dropdown.Toggle href="#" className="arrow-none btn btn-ghost-primary btn-sm btn-icon" data-bs-toggle="dropdown" aria-expanded="false">
                                                    <i className="ph-dots-three-outline"></i>
                                                </Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <li><Dropdown.Item href="/#">Action</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="/#">Another action</Dropdown.Item></li>
                                                    <li><Dropdown.Item href="/#">Something else here</Dropdown.Item></li>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>

                                    <Row>
                                        <Col lg={6}>
                                            <div className="table-responsive">
                                                <Table className="table-borderless table-sm mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Location
                                                            </td>
                                                            <td className="fw-medium">
                                                                Phoenix, USA
                                                            </td>
                                                        </tr>
                                                        
                                                        <tr>
                                                            <td>
                                                                Email ID
                                                            </td>
                                                            <td className="fw-medium">
                                                                raquelmurillo@sales.com
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Date of Birth
                                                            </td>
                                                            <td className="fw-medium">
                                                                29 Oct, 1986
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Mobile / Phone No.
                                                            </td>
                                                            <td className="fw-medium">
                                                                +(235) 01234 5678
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Total Reviews
                                                            </td>
                                                            <td className="fw-medium">
                                                                <i className="bi bi-star-half text-warning align-middle me-1"></i> 365
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                        <Col lg={6}>
                                            <div className="table-responsive">
                                                <Table className="table-borderless table-sm mb-0">
                                                    <tbody>
                                                        <tr>
                                                            <td>
                                                                Designation
                                                            </td>
                                                            <td className="fw-medium">
                                                                Sales & Marketing Managers
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Total Products
                                                            </td>
                                                            <td className="fw-medium">
                                                                237
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Orders
                                                            </td>
                                                            <td className="fw-medium">
                                                                3,412
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Earnings
                                                            </td>
                                                            <td className="fw-medium">
                                                                $2,960.32
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td>
                                                                Joining Date
                                                            </td>
                                                            <td className="fw-medium">
                                                                16 Aug, 2000
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </Table>
                                            </div>
                                        </Col>
                                    </Row>

                                    <div className="mt-3">
                                        <ul className="list-unstyled hstack gap-2 mb-0">
                                            <li>
                                                Social Media:
                                            </li>
                                            <li>
                                                <Link to="#!" className="btn btn-soft-secondary btn-icon btn-sm"><i className="ph-facebook-logo"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="btn btn-soft-danger btn-icon btn-sm"><i className="ph-envelope"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="btn btn-soft-primary btn-icon btn-sm"><i className="ph-twitter-logo"></i></Link>
                                            </li>
                                            <li>
                                                <Link to="#!" className="btn btn-soft-success btn-icon btn-sm"><i className="ph-whatsapp-logo"></i></Link>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default TeamDetails;
