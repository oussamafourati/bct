import React, { useEffect, useState } from "react";

const Navdata = () => {
  //state data

  const [isTracking, setIsTracking] = useState(false);
  const [isVisitorQuote, setIsVisitorQuote] = useState(false);
  const [isCorporateTransport, setIsCorporateTransport] = useState(false);
  const [isCorporate, setIsCorporate] = useState(false);
  const [isFeedbackClaims, setIsFeedbackClaims] = useState(false);
  const [isReportingManagement, setIsReportingManagement] = useState(false);
  const [isEmailTemplates, setIsEmailTemplates] = useState(false);
  const [isAdministration, setIsAdministration] = useState(false);

  // Multi Level
  const [isLevel1, setIsLevel1] = useState(false);
  const [isLevel2, setIsLevel2] = useState(false);
  const [isLevel3, setIsLevel3] = useState(false);

  const [iscurrentState, setIscurrentState] = useState("Dashboard");

  function updateIconSidebar(e: any) {
    if (e && e.target && e.target.getAttribute("subitems")) {
      const ul: any = document.getElementById("two-column-menu");
      const iconItems: any = ul.querySelectorAll(".nav-icon.active");
      let activeIconItems = [...iconItems];
      activeIconItems.forEach((item) => {
        item.classList.remove("active");
        // var id: any = item.getAttribute("subitems");
        // if (document.getElementById(id)){
        //     document.getElementById(id).classList.remove("show");
        // }
      });
    }
  }

  useEffect(() => {
    document.body.classList.remove("twocolumn-panel");

    if (iscurrentState !== "Tracking") {
      setIsTracking(false);
    }
    if (iscurrentState !== "VisitorQuote") {
      setIsVisitorQuote(false);
    }
    if (iscurrentState !== "CorporateTransport") {
      setIsCorporateTransport(false);
    }
    if (iscurrentState !== "Corporate") {
      setIsCorporate(false);
    }
    if (iscurrentState !== "Feedback&Claims") {
      setIsFeedbackClaims(false);
    }
    if (iscurrentState !== "ReportingManagement") {
      setIsReportingManagement(false);
    }
    if (iscurrentState !== "EmailTemplates") {
      setIsEmailTemplates(false);
    }
    if (iscurrentState !== "Administration") {
      setIsAdministration(false);
    }
  }, [
    iscurrentState,
    isEmailTemplates,
    isTracking,
    isVisitorQuote,
    isCorporateTransport,
    isCorporate,
    isFeedbackClaims,
    isReportingManagement,
    isAdministration,
  ]);

  const menuItems: any = [
    {
      label: "Menu",
      isHeader: true,
    },
    {
      id: "dashboard",
      label: "Dashboard",
      icon: "mdi mdi-view-dashboard",
      link: "/dashboard",
      badgeName: "Hot",
      badgeColor: "danger",
    },
    {
      id: "mapTracking",
      label: "Live Tracking",
      icon: "mdi mdi-map",
      link: "/map-tracking",
    },
    {
      id: "jobs",
      label: "Jobs",
      icon: "mdi mdi-briefcase-edit",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setIsTracking(!isTracking);
        setIscurrentState("Tracking");
        updateIconSidebar(e);
      },
      stateVariables: isTracking,
      subItems: [
        {
          id: "newQuote",
          label: "New Job",
          link: "/new-quote",
          icon: "mdi mdi-file-document-edit",
          parentId: "jobs",
        },
        {
          id: "QuoteRequests",
          label: "Latest Quotes",
          icon: "mdi mdi-lightning-bolt",
          link: "/latest-quotes",
          parentId: "jobs",
        },
        {
          id: "AllQuotes",
          label: "Pending Quotes",
          icon: "mdi mdi-history",
          link: "/pending-quotes",
          parentId: "jobs",
        },
        {
          id: "newQuote",
          label: "Bookings",
          link: "/bookings",
          icon: "mdi mdi-calendar-clock",
          parentId: "jobs",
        },
        {
          id: "QuoteRequests",
          label: "Completed Jobs",
          icon: "mdi mdi-briefcase-check",
          link: "/completed-jobs",
          parentId: "jobs",
        },
        {
          id: "AllQuotes",
          label: "Deleted Jobs",
          icon: "mdi mdi-delete-forever",
          link: "/all-quotes",
          parentId: "jobs",
        },
        {
          id: "newQuote",
          label: "Callbacks",
          link: "/callbacks",
          icon: "mdi mdi-phone",
          parentId: "jobs",
        },
        {
          id: "newQuote",
          label: "Job Share",
          link: "/job-share",
          icon: "mdi mdi-share-variant",
          parentId: "jobs",
        },
        {
          id: "JobPush",
          label: "Job Push",
          link: "/current-push-jobs",
          icon: "mdi mdi-send",
          parentId: "jobs",
        },
        {
          id: "AllQuotes",
          label: "Partial Quotes",
          icon: "mdi mdi-format-quote-open",
          link: "/partial-quotes",
          parentId: "jobs",
        },
        {
          id: "newQuote",
          label: "Job Template",
          link: "/job-template",
          icon: "mdi mdi-briefcase-plus",
          parentId: "jobs",
        },
      ],
    },
    {
      id: "Administration",
      label: "Finance",
      icon: "mdi mdi-currency-gbp",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setIsAdministration(!isAdministration);
        setIscurrentState("Administration");
        updateIconSidebar(e);
      },
      stateVariables: isAdministration,
      subItems: [
        {
          id: "Report",
          label: "Contracts",
          link: "/contract",
          icon: "mdi mdi-file-document",
          parentId: "Reporting",
        },
        {
          id: "Feedback",
          label: "Outstanding",
          link: "/outstanding",
          icon: "mdi mdi-star-half-full",
          parentId: "Reporting",
        },
        {
          id: "Claims",
          label: "Aged Debtors",
          link: "/aged-debtors",
          icon: "mdi mdi-timer-sand",
          parentId: "Reporting",
        },
        {
          id: "Claims",
          label: "Payments",
          link: "/payments",
          icon: "mdi mdi-wallet",
          parentId: "Reporting",
        },
        {
          id: "Claims",
          label: "Dowload Invoices",
          link: "/invoices",
          icon: "mdi mdi-tray-arrow-down",
          parentId: "Reporting",
        },
      ],
    },
    {
      id: "Lists",
      label: "Contacts",
      icon: "mdi mdi-office-building-cog",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setIsCorporateTransport(!isCorporateTransport);
        setIscurrentState("CorporateTransport");
        updateIconSidebar(e);
      },
      stateVariables: isCorporateTransport,
      subItems: [
        {
          id: "Schools",
          label: "Schools",
          link: "/schools",
          icon: "mdi mdi-school",
          parentId: "Lists",
        },
        {
          id: "Companies",
          label: "Companies",
          link: "/companies",
          icon: "mdi mdi-domain",
          parentId: "Lists",
        },
        {
          id: "Subcontractors",
          label: "Affiliate",
          link: "/all-sub-contractors",
          icon: "mdi mdi-account-supervisor",
          parentId: "Lists",
        },
        {
          id: "Team",
          label: "Team",
          link: "/team",
          icon: "ri-team-fill",
          parentId: "Lists",
        },
        {
          id: "Driver",
          label: "Driver",
          link: "/driver",
          icon: "mdi mdi-account-tie-hat",
          parentId: "Lists",
        },
        // {
        //   id: "OldPushedJobs",
        //   label: "Old Pushed Jobs",
        //   link: "/history-push-job",
        //   icon: "mdi mdi-timer-sand-complete",
        //   parentId: "Lists",
        // },
      ],
    },
    {
      id: "Management",
      label: "Management",
      icon: "mdi mdi-tools",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setIsFeedbackClaims(!isFeedbackClaims);
        setIscurrentState("Feedback&Claims");
        updateIconSidebar(e);
      },
      stateVariables: isFeedbackClaims,
      subItems: [
        {
          id: "NewContract",
          label: "New Contract",
          icon: "ri-file-edit-fill",
          link: "/new-contract",
          parentId: "Management",
        },
        {
          id: "Scheduling",
          label: "Scheduling",
          link: "/scheduling",
          icon: "mdi mdi-calendar-edit",
          parentId: "Management",
        },
        {
          id: "NewTeam",
          label: "New Team",
          link: "/new-team",
          icon: "mdi mdi-account-multiple-plus",
          parentId: "Management",
        },
        {
          id: "NewVehicle",
          label: "Vehicle",
          link: "/vehicles",
          icon: "mdi mdi-car-side",
          parentId: "Management",
        },
        {
          id: "NewSchool",
          label: "New School",
          link: "/new-school",
          icon: "mdi mdi-town-hall",
          parentId: "Management",
        },
        {
          id: "NewCompany",
          label: "New Company",
          link: "/new-company",
          icon: "mdi mdi-table-large-plus",
          parentId: "Management",
        },
        {
          id: "NewSubContractor",
          label: "New Sub-Contractor",
          link: "/new-applications",
          icon: "mdi mdi-handshake",
          parentId: "Management",
        },
        {
          id: "Emails",
          label: "Emails",
          link: "/email-templates",
          icon: "mdi mdi-email-plus",
          parentId: "Management",
        },
        {
          id: "Stations",
          label: "Stations",
          link: "/stations",
          icon: "mdi mdi-map-marker-plus",
          parentId: "Management",
        },
        {
          id: "Offers",
          label: "Offers",
          link: "/offers",
          icon: "mdi mdi-bullhorn",
          parentId: "Management",
        },
        {
          id: "TripModels",
          label: "Trip Models",
          link: "/trip-models",
          icon: "mdi mdi-bag-suitcase",
          parentId: "Management",
        },
      ],
    },
    {
      id: "Reporting",
      label: "Relevance",
      icon: "mdi mdi-star-cog",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setIsAdministration(!isAdministration);
        setIscurrentState("Administration");
        updateIconSidebar(e);
      },
      stateVariables: isAdministration,
      subItems: [
        {
          id: "Report",
          label: "Report",
          link: "/claims",
          icon: "mdi mdi-chart-bar",
          parentId: "Reporting",
        },
        {
          id: "Feedback",
          label: "Feedback",
          link: "/claims",
          icon: "mdi mdi-thumb-up",
          parentId: "Reporting",
        },
        {
          id: "Claims",
          label: "Claims",
          link: "/claims",
          icon: "mdi mdi-thumb-down",
          parentId: "Reporting",
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
