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

    const [iscurrentState, setIscurrentState] = useState('Dashboard');

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
        document.body.classList.remove('twocolumn-panel');
        
        if (iscurrentState !== 'Tracking') {
            setIsTracking(false);
        }
        if (iscurrentState !== 'VisitorQuote') {
            setIsVisitorQuote(false);
        }
        if (iscurrentState !== 'CorporateTransport') {
            setIsCorporateTransport(false);
        }
        if (iscurrentState !== 'Corporate') {
            setIsCorporate(false);
        }
        if (iscurrentState !== 'Feedback&Claims') {
            setIsFeedbackClaims(false);
        }
        if (iscurrentState !== 'ReportingManagement') {
            setIsReportingManagement(false);
        }
        if (iscurrentState !== 'EmailTemplates') {
            setIsEmailTemplates(false);
        }
        if (iscurrentState !== 'Administration') {
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
        isAdministration
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
            badgeName : "Hot",
            badgeColor : "danger"
        },
        {
            id: "tracking",
            label: "Tracking",
            icon: "mdi mdi-map-marker-path",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsTracking(!isTracking);
                setIscurrentState('Tracking');
                updateIconSidebar(e);
            },
            stateVariables: isTracking,
            subItems: [
                {
                    id: "mapTracking",
                    label: "Map Tracking",
                    link: "/map-tracking",
                    parentId: "tracking",
                },
                {
                    id: "delays&changes",
                    label: "Delays and changes",
                    link: "/delays&changes",
                    parentId: "tracking",
                },
            ],
        },
        {
            id: "VisitorQuote",
            label: "Visitors Quote",
            icon: "mdi mdi-file-compare",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsVisitorQuote(!isVisitorQuote);
                setIscurrentState('VisitorQuote');
                updateIconSidebar(e);
            },
            stateVariables: isVisitorQuote,
            subItems: [
                { id: "level1.1", label: "New Quote", link: "/#", parentId: "VisitorQuote" },
                { id: "level1.3", label: "Quote Request", link: "/#", parentId: "VisitorQuote" },
                { id: "level1.4", label: "Listing & Management", link: "/#", parentId: "VisitorQuote" },
                {
                    id: "level1.2",
                    label: "Push Jobs",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel1(!isLevel1);
                    },
                    stateVariables: isLevel1,
                    childItems: [
                        { id: 1, label: "Current ", link: "/#" },
                        { id: 2, label: "History ", link: "/#" },
                    ]
                },
            ],
        },
        {
            id: "CorporateTransport",
            label: "Corporates Transport",
            icon: "mdi mdi-calendar-clock",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsCorporateTransport(!isCorporateTransport);
                setIscurrentState('CorporateTransport');
                updateIconSidebar(e);
            },
            stateVariables: isCorporateTransport,
            subItems: [
                { id: "level1.1", label: "Listing & Management", link: "/#", parentId: "CorporateTransport" },
                {
                    id: "level1.2",
                    label: "Programming",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel1(!isLevel1);
                    },
                    stateVariables: isLevel1,
                    childItems: [
                        { id: 1, label: "Scheduling", link: "/#" },
                        { id: 2, label: "Offers", link: "/#" },
                        { id: 3, label: "Stations", link: "/#" },
                        { id: 4, label: "Trip Models", link: "/#" }
                    ]
                },
                { id: "level1.3", label: "New Contract", link: "/#", parentId: "CorporateTransport" },
            ],
        },
        {
            id: "Corporate",
            label: "Corporate",
            icon: "mdi mdi-handshake-outline",
            link: "/#",
            click: function (e: any) {
                e.preventDefault();
                setIsCorporate(!isCorporate);
                setIscurrentState('Corporate');
                updateIconSidebar(e);
            },
            stateVariables: isCorporate,
            subItems: [
                {
                    id: "level1.2",
                    label: "Sub-contractors",
                    link: "/#",
                    isChildItem: true,
                    click: function (e: any) {
                        e.preventDefault();
                        setIsLevel1(!isLevel1);
                    },
                    stateVariables: isLevel1,
                    childItems: [
                        { id: 1, label: "New Applications", link: "/#" },
                        { id: 2, label: "All Sub-contractors", link: "/#" },
                    ]
                },
                                { id: "level1.1", label: "Schools", link: "/#", parentId: "Corporate" },
                { id: "level1.3", label: "Companies", link: "/#", parentId: "Corporate" },
            ],
        },
        {
            id: "Feedback&Claims",
            label: "Feedback & Claims",
            icon: "mdi mdi-thumbs-up-down-outline",
            link: "/feedback&claims",
        },
        {
            id: "ReportingManagement",
            label: "Reporting Management",
            icon: "mdi mdi-chart-box-outline",
            link: "/reporting-management",
        },
        {
            id: "EmailTemplates",
            label: "Email Templates",
            icon: "mdi mdi-email-sync-outline",
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
                setIscurrentState('Administration');
                updateIconSidebar(e);
            },
            stateVariables: isAdministration,
            subItems: [
                {
                    id: "Team",
                    label: "Team",
                    link: "/team",
                    parentId: "Administration",
                },
                {
                    id: "Driver",
                    label: "Driver",
                    link: "/driver",
                    parentId: "Administration",
                },
                {
                    id: "Vehicles",
                    label: "Vehicles",
                    link: "/vehicles",
                    parentId: "Administration",
                }
            ],
        },
    ];
    return <React.Fragment>{menuItems}</React.Fragment>;
};
export default Navdata;