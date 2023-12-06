import { Navigate } from "react-router-dom";

import Dashboard from "pages/Dashboard";

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
import Scheduling from "pages/CorporateTransport/Programming/Scheduling";
import Offers from "pages/CorporateTransport/Programming/Offers";
import Stations from "pages/CorporateTransport/Programming/Stations";
import TripModels from "pages/CorporateTransport/Programming/TripModels";
import TeamDetails from "pages/Administration/Team/TeamDetails";
import DriverDetails from "pages/Administration/Driver/DriverDetails";
import CompanyDetails from "pages/Corporate/Companies/CompanyDetails";
import SchoolDetails from "pages/Corporate/Schools/SchoolDetails";
import SubcontractorDetails from "pages/Corporate/Subcontractor/SubcontractorDetails";
import VehicleDetails from "pages/Administration/Vehicles/VehicleDetails";
import LatestQuotes from "pages/LatestQuotes";
import PendingQuotes from "pages/PendingQuotes";
import Bookings from "pages/Bookings";
import CompletedJobs from "pages/CompletedJobs";
import DeletedJobs from "pages/DeletedJobs";
import Callbacks from "pages/Callbacks";
import JobShare from "pages/JobShare";
import PartialQuotes from "pages/PartialQuotes";
import JobsTemplates from "pages/JobsTemplates";

const authProtectedRoutes = [];

const publicRoutes = [
  // AuthenticationInner
  { path: "/dashboard", component: <Dashboard /> },
  //? Tracking
  { path: "/map-tracking", component: <Maptracking /> },
  { path: "/delays&changes", component: <Delayschanges /> },

  //? Visitors Quote
  { path: "/new-quote", component: <Newquote /> },
  { path: "/quote-request", component: <Quotesrequest /> },
  { path: "/all-quotes", component: <Listingmanagement /> },
  //? Visitors Quote ==> Push Jobs
  { path: "/current-push-jobs", component: <Current /> },
  { path: "/history-push-job", component: <History /> },

  //? Corporate Transport
  { path: "/list-corporate-transport", component: <Management /> },
  { path: "/new-contract", component: <NewContract /> },
  //? Corporate Transport ==> Programming
  { path: "/scheduling", component: <Scheduling /> },
  { path: "/offers", component: <Offers /> },
  { path: "/stations", component: <Stations /> },
  { path: "/trip-models", component: <TripModels /> },

  //? Corporate
  { path: "/schools", component: <Schools /> },
  { path: "/companies", component: <Companies /> },
  //? Corporate ==> Sub-Contractor
  { path: "/new-applications", component: <NewApplications /> },
  { path: "/all-sub-contractors", component: <Subcontractors /> },

  //? Companies
  { path: "/new-company", component: <AddNewCompany /> },
  { path: "/company-details/:name", component: <CompanyDetails /> },
  //? Schools
  { path: "/new-school", component: <AddNewSchool /> },
  { path: "/school-details/:name", component: <SchoolDetails /> },
  //? Sub-Contractor
  {
    path: "/corporate/subcontractors/new-subcontractor",
    component: <AddNewSubcontractor />,
  },
  { path: "/subcontractor-details/:name", component: <SubcontractorDetails /> },
  { path: "/latest-quotes", component: <LatestQuotes /> },
  { path: "/pending-quotes", component: <PendingQuotes /> },
  { path: "/bookings", component: <Bookings /> },
  { path: "/completed-jobs", component: <CompletedJobs /> },
  { path: "/deleted-jobs", component: <DeletedJobs /> },
  { path: "/callbacks", component: <Callbacks /> },
   { path: "/job-share", component: <JobShare /> },
  { path: "/partial-quotes", component: <PartialQuotes /> },
  { path: "/job-template", component: <JobsTemplates /> },
 
  //? Feedback & Claims
  { path: "/feedback", component: <Feedback /> },
  { path: "/claims", component: <Claims /> },

  //? Reporting Management
  { path: "/reporting-management", component: <ReportingManagement /> },

  //? Email Templates
  { path: "/email-templates", component: <EmailTemplates /> },

  //? Administration
  { path: "/team", component: <Team /> },
  { path: "/team-details/:fullName", component: <TeamDetails /> },
  { path: "/driver", component: <Driver /> },
  { path: "/driver-details/:fullName", component: <DriverDetails /> },
  { path: "/vehicles", component: <Vehicles /> },
  { path: "/vehicle-details/:name", component: <VehicleDetails /> },

  //? Vehicles
  {
    path: "/new-vehicle",
    component: <AddNewVehicle />,
  },

  //? Driver
  { path: "/new-driver", component: <AddNewDriver /> },

  //? Team
  { path: "/new-team", component: <AddNewTeam /> },

  //? Notes
  { path: "/notes", component: <Notes /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
  { path: "*", component: <Navigate to="/dashboard" /> },
  { path: "/user-profile", component: <UserProfile /> },
];

// export { authProtectedRoutes, publicRoutes };
export { publicRoutes };
