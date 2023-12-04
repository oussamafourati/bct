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
          label: "New Quote",
          link: "/new-quote",
          icon: "mdi mdi-file-document-edit",
          parentId: "jobs",
        },
        {
          id: "QuoteRequests",
          label: "Quote Requests",
          icon: "mdi mdi-format-quote-open",
          link: "/quote-request",
          parentId: "jobs",
        },
        {
          id: "AllQuotes",
          label: "All Quotes",
          icon: "mdi mdi-clipboard-list",
          link: "/all-quotes",
          parentId: "jobs",
        },
        {
          id: "NewPushedJobs",
          label: "New Pushed Jobs",
          icon: "mdi mdi-lightning-bolt",
          link: "/current-push-jobs",
          parentId: "jobs",
        },
      ],
    },
    {
      id: "Lists",
      label: "Lists",
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
          label: "Sub-Contractors",
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
          icon: "ri-exchange-funds-fill",
          parentId: "Lists",
        },
        {
          id: "Vehicles",
          label: "Vehicles",
          link: "/vehicles",
          icon: "ri-bus-2-fill",
          parentId: "Lists",
        },
        {
          id: "OldPushedJobs",
          label: "Old Pushed Jobs",
          link: "/history-push-job",
          icon: "mdi mdi-timer-sand-complete",
          parentId: "Lists",
        },
        {
          id: "Programming",
          label: "Programming",
          icon: "ri-tools-fill",
          link: "/#",
          isChildItem: true,
          click: function (e: any) {
            e.preventDefault();
            setIsLevel2(!isLevel2);
          },
          stateVariables: isLevel2,
          childItems: [
            {
              id: 1,
              label: "Scheduling",
              icon: "mdi mdi-calendar-edit",
              link: "/scheduling",
            },
            {
              id: 2,
              label: "Offers",
              icon: "bx bxs-megaphone",
              link: "/offers",
            },
            {
              id: 3,
              label: "Stations",
              icon: "ri-map-pin-add-fill",
              link: "/stations",
            },
            {
              id: 4,
              label: "Trip Models",
              icon: "ri-suitcase-3-fill",
              link: "/trip-models",
            },
          ],
        },
       
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
          parentId: "CorporateTransport",
        },
        {
          id: "Scheduling",
          label: "Scheduling",
          link: "/history-push-job",
          icon: "mdi mdi-timer-sand-complete",
          parentId: "Lists",
        },
        {
          id: "NewDriver",
          label: "New Driver",
          icon: "ri-thumb-up-fill",
          link: "/feedback",
          parentId: "Feedback&Claims",
        },
        {
          id: "NewTeam",
          label: "New Team",
          link: "/claims",
          icon: "ri-thumb-down-fill",
          parentId: "Feedback&Claims",
        },
        {
          id: "NewVehicle",
          label: "New Vehicle",
          link: "/claims",
          icon: "ri-thumb-down-fill",
          parentId: "Feedback&Claims",
        },
        {
          id: "NewSchool",
          label: "New School",
          link: "/claims",
          icon: "ri-thumb-down-fill",
          parentId: "Feedback&Claims",
        },
        {
          id: "NewCompany",
          label: "New Company",
          link: "/claims",
          icon: "ri-thumb-down-fill",
          parentId: "Feedback&Claims",
        },
        {
          id: "NewSubContractor",
          label: "New Sub-Contractor",
          link: "/claims",
          icon: "ri-thumb-down-fill",
          parentId: "Feedback&Claims",
        },
        {
          id: "Emails",
          label: "Emails",
          link: "/claims",
          icon: "ri-thumb-down-fill",
          parentId: "Feedback&Claims",
        },
      ],
    },
    {
      id: "Reporting",
      label: "Reporting",
      icon: "mdi mdi-account-tie",
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
          icon: "ri-thumb-down-fill",
          parentId: "Feedback&Claims",
        },
        {
          id: "Feedback",
          label: "Feedback",
          link: "/claims",
          icon: "ri-thumb-down-fill",
          parentId: "Feedback&Claims",
        },
        {
          id: "Claims",
          label: "Claims",
          link: "/claims",
          icon: "ri-thumb-down-fill",
          parentId: "Feedback&Claims",
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
