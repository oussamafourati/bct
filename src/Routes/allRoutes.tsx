import { Navigate } from "react-router-dom";

import Dashboard from "pages/Dashboard";

// Sellers
import SellersListView from "pages/Sellers/ListView";
import SellersGridView from "pages/Sellers/GridView";
import SellersOverview from "pages/Sellers/Overview";

// Invoice
import InvoiceList from "pages/Invoices/InvoiceList";
import InvoiceDetails from "pages/Invoices/InvoiceDetails";
import CreateInvoice from "pages/Invoices/CreateInvoice";

// Accounts
import SignIn from "pages/Accounts/AuthenticationInner/SignIn";
import PasswordReset from "pages/Accounts/AuthenticationInner/PasswordReset";
import PasswordCreate from "pages/Accounts/AuthenticationInner/PasswordCreate";
import SuccessMessage from "pages/Accounts/AuthenticationInner/SuccessMessage";
import TwoStepVerify from "pages/Accounts/AuthenticationInner/TwoStepVerify";
import BasicLogout from "pages/Accounts/AuthenticationInner/Logout";
import Error404 from "pages/Accounts/AuthenticationInner/Error404";
import Error500 from "pages/Accounts/AuthenticationInner/Error500";
import ComingSoon from "pages/Accounts/AuthenticationInner/ComingSoon";

import UserProfile from "pages/Authentication/user-profile";

//? Administration
import Driver from "pages/Administration/Driver";
import Team from "pages/Administration/Team";
import Vehicles from "pages/Administration/Vehicles";

//? Vehicles
import AddNewVehicle from "pages/Administration/Vehicles/AddNewVehicle";

//? Notes
import Notes from "pages/Notes";
import AddNewDriver from "pages/Administration/Driver/AddNewDriver";
import AddNewTeam from "pages/Administration/Team/AddNewTeam";
import Companies from "pages/Corporate/Companies";
import AddNewCompany from "pages/Corporate/Companies/AddNewCompany";
import Schools from "pages/Corporate/Schools";
import AddNewSchool from "pages/Corporate/Schools/AddNewSchool";
import Subcontractors from "pages/Corporate/Subcontractor";
import AddNewSubcontractor from "pages/Corporate/Subcontractor/AddNewSubcontractor";
import NewApplications from "pages/Corporate/Subcontractor/NewApplications";
import EmailTemplates from "pages/EmailTemplate";
import Feedback from "pages/Feedback&Claims/Feedback";
import Claims from "pages/Feedback&Claims/Claims";
import ReportingManagement from "pages/ReportingManagement";
import Maptracking from "pages/Tracking/MapTracking";
import Delayschanges from "pages/Tracking/Delayschanges";
import Newquote from "pages/Visitorsquote/Newquote";
import Quotesrequest from "pages/Visitorsquote/Quotesrequest";
import Listingmanagement from "pages/Visitorsquote/Listingmanagement";
import Current from "pages/Visitorsquote/Pushjobs/Current";
import History from "pages/Visitorsquote/Pushjobs/History";
import Management from "pages/CorporateTransport/Management";
import NewContract from "pages/CorporateTransport/NewContract";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },

  //? Tracking
  { path: "/map-tracking", component: <Maptracking /> },
  { path: "/delays&changes", component: <Delayschanges /> },

  //? Visitors Quote
  { path: "/new-quote", component: <Newquote /> },
  { path: "/quote-request", component: <Quotesrequest /> },
  { path: "/listing&management", component: <Listingmanagement /> },
  //? Visitors Quote ==> Push Jobs
  { path: "/current-push-jobs", component: <Current /> },
  { path: "/history-push-job", component: <History /> },

  //? Corporate Transport
  { path: "/list-corporate-transport", component: <Management /> },
  { path: "/new-contract", component: <NewContract /> },
  //? Corporate Transport ==> Programming
  { path: "/scheduling", component: <InvoiceDetails /> },
  { path: "/offers", component: <CreateInvoice /> },
  { path: "/stations", component: <SellersOverview /> },
  { path: "/trip-models", component: <SellersGridView /> },

  //? Corporate
  { path: "/schools", component: <Schools /> },
  { path: "/companies", component: <Companies /> },
  //? Corporate ==> Sub-Contractor
  { path: "/new-applications", component: <NewApplications /> },
  { path: "/all-sub-contractors", component: <Subcontractors /> },

  //? Companies
  { path: "/corporate/companies/new-company", component: <AddNewCompany /> },
  //? Schools
  { path: "/corporate/schools/new-school", component: <AddNewSchool /> },
  //? Sub-Contractor
  {
    path: "/corporate/subcontractors/new-subcontractor",
    component: <AddNewSubcontractor />,
  },

  //? Feedback & Claims
  { path: "/feedback", component: <Feedback /> },
  { path: "/claims", component: <Claims /> },

  //? Reporting Management
  { path: "/reporting-management", component: <ReportingManagement /> },

  //? Email Templates
  { path: "/email-templates", component: <EmailTemplates /> },

  //? Administration
  { path: "/team", component: <Team /> },
  { path: "/driver", component: <Driver /> },
  { path: "/vehicles", component: <Vehicles /> },

  //? Vehicles
  {
    path: "/administration/vehicles/new-vehicle",
    component: <AddNewVehicle />,
  },

  //? Driver
  { path: "/administration/driver/new-driver", component: <AddNewDriver /> },

  //? Team
  { path: "/administration/team/new-team", component: <AddNewTeam /> },

  //? Notes
  { path: "/notes", component: <Notes /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
  { path: "*", component: <Navigate to="/dashboard" /> },
  { path: "/user-profile", component: <UserProfile /> },
];

const publicRoutes = [
  // AuthenticationInner
  { path: "/auth-signin-basic", component: <SignIn /> },
  { path: "/auth-pass-reset-basic", component: <PasswordReset /> },
  { path: "/auth-pass-change-basic", component: <PasswordCreate /> },
  { path: "/auth-success-msg-basic", component: <SuccessMessage /> },
  { path: "/auth-twostep-basic", component: <TwoStepVerify /> },
  { path: "/auth-logout-basic", component: <BasicLogout /> },
  { path: "/auth-404", component: <Error404 /> },
  { path: "/auth-500", component: <Error500 /> },
  { path: "/coming-soon", component: <ComingSoon /> },
];

export { authProtectedRoutes, publicRoutes };
