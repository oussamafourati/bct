import React, { useMemo, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Modal,
  Offcanvas,
  Row,
} from "react-bootstrap";
import Breadcrumb from "Common/BreadCrumb";
import { Link, useNavigate } from "react-router-dom";
import Flatpickr from "react-flatpickr";
import TableContainer from "Common/TableContainer";
import { shipments } from "Common/data";
import offerbanner from "../../../../assets/images/ecommerce/offer-banner.jpg";
import { transaction } from "Common/data";
import SimpleBar from "simplebar-react";
import { newcustomers } from "Common/data";

const Status = ({ status }: any) => {
  switch (status) {
    case "Successful":
      return <span className="badge badge-soft-success"> {status}</span>;
    case "Denied":
      return <span className="badge badge-soft-danger"> {status}</span>;
    case "Pending":
      return <span className="badge badge-soft-warning"> {status}</span>;
    default:
      return <span className="badge badge-soft-success"> Successful </span>;
  }
};

const ModalAffiliate = () => {
  const [paymentDetails, setPaymentDetails] = useState<any>({});

  const columns = useMemo(
    () => [
      {
        Header: "Transaction ID",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps: any) => {
          return (
            <Link
              to="#"
              className="fw-medium"
              onClick={() => setPaymentDetails(cellProps)}
            >
              {cellProps.transactionID}
            </Link>
          );
        },
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <Row>
        <div className="col-xxl-6 col-lg-6">
          <div className="card card-height-100">
            <SimpleBar style={{ maxHeight: "445px" }}>
              {(newcustomers || []).map((item, key) => (
                <div
                  className="p-3 border-bottom border-bottom-dashed"
                  key={key}
                >
                  <div className="d-flex align-items-center gap-2">
                    <div className="flex-shrink-0">
                      <img
                        src={item.productImage}
                        alt=""
                        className="rounded dash-avatar"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">{item.productName}</h6>
                      <p className="fs-13 text-muted mb-0">{item.date}</p>
                    </div>
                  </div>
                </div>
              ))}
            </SimpleBar>
          </div>
        </div>
        <div className="col-xxl-6 col-lg-6">
          <div className="card card-height-100">
            <div className="card-header align-items-center d-flex">
              <h4 className="card-title mb-0 flex-grow-1">New Customers</h4>
            </div>

            <Card.Body id="transactionDetails">
              <div className="table-responsive table-card">
                <table className="table table-borderless align-middle">
                  <tbody>
                    <tr>
                      <td>
                        <span className="text-muted text-uppercase">
                          Transaction ID
                        </span>
                      </td>
                      <td>
                        <span className="fw-semibold">
                          {paymentDetails.transactionID || "#TBSC320002830"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-muted text-uppercase">Date</span>
                      </td>
                      <td>
                        <span className="fw-semibold">
                          {paymentDetails.transactionDate || "15 Jan, 2023"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-muted text-uppercase">
                          VAT ID:
                        </span>
                      </td>
                      <td>
                        <span className="fw-semibold">
                          {paymentDetails.vatId || "TB211145424"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-muted text-uppercase">
                          Client Name
                        </span>
                      </td>
                      <td>
                        <span className="fw-semibold">
                          {paymentDetails.clientName || "Diana Nichols"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-muted text-uppercase">
                          Email ID
                        </span>
                      </td>
                      <td>
                        <span className="fw-semibold">
                          {paymentDetails.cleintEmail || "diana@toner.com"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-muted text-uppercase">
                          Amount
                        </span>
                      </td>
                      <td>
                        <span className="fw-semibold">
                          {paymentDetails.amount || "$253.32"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-muted text-uppercase">
                          Payment Method
                        </span>
                      </td>
                      <td>
                        <div className="d-flex align-items-center gap-2">
                          <div className="flex-shrink-0"></div>
                          <div className="flex-grow-1">
                            <h6 className="mb-0">
                              {paymentDetails.paymentMethod ||
                                "American Express"}
                            </h6>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span className="text-muted text-uppercase">
                          Status
                        </span>
                      </td>
                      <td>
                        <Status status={paymentDetails.status} />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card.Body>
          </div>
        </div>
      </Row>
    </React.Fragment>
  );
};

export default ModalAffiliate;
