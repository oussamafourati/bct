import { Navigate } from "react-router-dom";

import Dashboard from "pages/Dashboard";


import Categories from "pages/Products/Categories";
import SubCategories from "pages/Products/SubCategories";

// Orders
import OrdersListView from "pages/Orders/ListView";
import OrdersOverview from "pages/Orders/Overview";

// Calender
import Calendar from "pages/Calendar";

// Sellers
import SellersListView from "pages/Sellers/ListView";
import SellersGridView from "pages/Sellers/GridView";
import SellersOverview from "pages/Sellers/Overview";

// Invoice
import InvoiceList from "pages/Invoices/InvoiceList";
import InvoiceDetails from "pages/Invoices/InvoiceDetails";
import CreateInvoice from "pages/Invoices/CreateInvoice";

// User List
import UsersList from "pages/UsersList";

// Shipping
import Shipments from "pages/Shipping/Shipments";
import ShippingList from "pages/Shipping/ShippingList";

// Coupons
import Coupons from "pages/Coupons";

//Review & Rating
import ReviewRating from "pages/Reviews-Rating";

//Brands
import Brands from "pages/Brands";

//statistics
import Statistics from "pages/Statistics";

// Localization
import Transactions from "pages/Localization/Transactions";
import CurrencyRates from "pages/Localization/CurrencyRates";

// Accounts
import MyAccount from "pages/Accounts/MyAccount";
import Settings from "pages/Accounts/Settings";
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
import Vehicles from "pages/Vehicles";

//? Notes
import Notes from "pages/Notes";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },

  //? Tracking
  { path: "/map-tracking", component: <ShippingList /> },
  { path: "/delays&changes", component: <Shipments /> },

  //? Visitors Quote
  { path: "/new-quote", component: <UsersList /> },
  { path: "/quote-request", component: <Coupons /> },
  { path: "/listing&management", component: <Calendar /> },
  //? Visitors Quote ==> Push Jobs
  { path: "/current-push-jobs", component: <Transactions /> },
  { path: "/history-push-job", component: <CurrencyRates /> },

  //? Corporate Transport
  { path: "/list-corporate-transport", component: <InvoiceList /> },
  { path: "/new-contract", component: <SellersListView /> },
  //? Corporate Transport ==> Programming
  { path: "/scheduling", component: <InvoiceDetails /> },
  { path: "/offers", component: <CreateInvoice /> },
  { path: "/stations", component: <SellersOverview /> },
  { path: "/trip-models", component: <SellersGridView /> },

  //? Corporate
  { path: "/schools", component: <Categories /> },
  { path: "/companies", component: <SubCategories /> },
  //? Corporate ==> Sub-Contractor
  { path: "/new-applications", component: <OrdersListView /> },
  { path: "/all-sub-contractors", component: <OrdersOverview /> },

  //? Feedback & Claims
  { path: "/feedback&claims", component: <ReviewRating /> },

  //? Reporting Management
  { path: "/reporting-management", component: <Brands /> },

  //? Email Templates
  { path: "/email-templates", component: <Statistics /> },

  //? Accounts
  { path: "/team", component: <MyAccount /> },
  { path: "/driver", component: <Settings /> },
  { path: "/vehicles", component: <Vehicles /> },

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
