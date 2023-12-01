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
      id: "tracking",
      label: "Tracking",
      icon: "mdi mdi-map-clock",
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
          id: "mapTracking",
          label: "Map Tracking",
          link: "/map-tracking",
          icon: "mdi mdi-map",
          parentId: "tracking",
        },
        {
          id: "delays&changes",
          label: "Delays and changes",
          icon: "mdi mdi-clock",
          link: "/delays&changes",
          parentId: "tracking",
        },
      ],
    },
    {
      id: "VisitorQuote",
      label: "Quotes Management",
      icon: "mdi mdi-file-document-edit",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setIsVisitorQuote(!isVisitorQuote);
        setIscurrentState("VisitorQuote");
        updateIconSidebar(e);
      },
      stateVariables: isVisitorQuote,
      subItems: [
        {
          id: "level1.3",
          label: "Quote Requests",
          icon: "ri-suitcase-fill",
          link: "/quote-request",
          parentId: "VisitorQuote",
        },
        {
          id: "level1.4",
          label: "All Quotes",
          icon: "ri-table-fill",
          link: "/listing&management",
          parentId: "VisitorQuote",
        },
        {
          id: "level1.2",
          label: "Pushed Jobs",
          link: "/#",
          icon: "ri-briefcase-2-fill",
          isChildItem: true,
          click: function (e: any) {
            e.preventDefault();
            setIsLevel1(!isLevel1);
          },
          stateVariables: isLevel1,
          childItems: [
            {
              id: 1,
              label: "Current",
              icon: "ri-flashlight-fill",
              link: "/current-push-jobs",
            },
            {
              id: 2,
              label: "History",
              icon: "bx bxs-hourglass-top",
              link: "/history-push-job",
            },
          ],
        },
        {
          id: "level1.1",
          label: "New Quote",
          icon: "ri-file-add-fill",
          link: "/new-quote",
          parentId: "VisitorQuote",
        },
      ],
    },
    {
      id: "CorporateTransport",
      label: "Corporates Transport",
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
          id: "Listing&Management",
          label: "Management",
          icon: "ri-list-settings-fill",
          link: "/list-corporate-transport",
          parentId: "CorporateTransport",
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
              icon: "ri-calendar-check-fill",
              link: "/scheduling",
            },
            { id: 2, label: "Offers", icon: "bx bxs-megaphone", link: "/offers" },
            { id: 3, label: "Stations", icon: "ri-map-pin-add-fill", link: "/stations" },
            { id: 4, label: "Trip Models", icon: "ri-suitcase-3-fill", link: "/trip-models" },
          ],
        },
        {
          id: "NewContract",
          label: "New Contract",
          icon: "ri-file-edit-fill",
          link: "/new-contract",
          parentId: "CorporateTransport",
        },
      ],
    },
    {
      id: "Corporate",
      label: "Corporate",
      icon: "mdi mdi-handshake",
      link: "/#",
      click: function (e: any) {
        e.preventDefault();
        setIsCorporate(!isCorporate);
        setIscurrentState("Corporate");
        updateIconSidebar(e);
      },
      stateVariables: isCorporate,
      subItems: [
        {
          id: "Sub-contractors",
          label: "Sub-contractors",
          link: "/#",
          icon: "ri-group-2-fill",
          isChildItem: true,
          click: function (e: any) {
            e.preventDefault();
            setIsLevel3(!isLevel3);
          },
          stateVariables: isLevel3,
          childItems: [
            { id: 1, label: "New Applications", icon: "ri-user-add-line", link: "/new-applications" },
            {
              id: 2,
              icon: "ri-list-check",
              label: "All Subcontractors",
              link: "/all-sub-contractors",
            },
          ],
        },
        {
          id: "Schools",
          label: "Schools",
          link: "/schools",
          icon: "mdi mdi-school",
          parentId: "Corporate",
        },
        {
          id: "Companies",
          label: "Companies",
          link: "/companies",
          icon: "mdi mdi-domain",
          parentId: "Corporate",
        },
      ],
    },
    {
      id: "Feedback&Claims",
      label: "Feedback & Claims",
      icon: "mdi mdi-thumbs-up-down",
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
          id: "feedback",
          label: "Feedback",
          icon: "ri-thumb-up-fill",
          link: "/feedback",
          parentId: "Feedback&Claims",
        },
        {
          id: "claims",
          label: "Claims",
          link: "/claims",
          icon: "ri-thumb-down-fill",
          parentId: "Feedback&Claims",
        },
      ],
    },
    {
      id: "ReportingManagement",
      label: "Reporting Management",
      icon: "mdi mdi-chart-box",
      link: "/reporting-management",
    },
    {
      id: "EmailTemplates",
      label: "Email Templates",
      icon: "mdi mdi-email-edit",
      link: "/email-templates",
    },
    {
      id: "Administration",
      label: "Administration",
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
          id: "Team",
          label: "Team",
          link: "/team",
          icon: "ri-team-fill",
          parentId: "Administration",
        },
        {
          id: "Driver",
          label: "Driver",
          link: "/driver",
          icon: "ri-exchange-funds-fill",
          parentId: "Administration",
        },
        {
          id: "Vehicles",
          label: "Vehicles",
          link: "/vehicles",
          icon: "ri-bus-2-fill",
          parentId: "Administration",
        },
      ],
    },
  ];
  return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;
