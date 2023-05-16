import { CPW, DMS, administrator, approved, assetmanagement, attachment, brandingdevelop, brandingtech, dago, documentM, elibrary, getintouch1, industrial, itmasterdevelop, itmastertech, kalender, magnus, mail, mobiledevelop, mobiletech, pems1, posinrayas, presence, printer, ptlesonline, recap, restaurantbebek, serviceSoftware, servicebranding, servicemobile, servicestartup, softwaredev, softwaretech, solution17, solution20, spd, timesheetutama, user, worklist, workspace, worksummary } from "../../images";
import { solution5 } from "../../images";
import { solution15 } from "../../images";
import { solution19 } from "../../images";
import { solution14 } from "../../images";
import {
    akuntaid, dimedika, keacaracom, mytimesheet, pems, ximo, sion,
    trustedby1, trustedby2, trustedby3, trustedby4, trustedby5, trustedby6, trustedby7, trustedby8, trustedby9, trustedby10,
    solution1, solution2, solution3,
    whatsnew1, whatsnew2, whatsnew3, headerimgabout, headerimgwork, headerimgsolution, cardplaceholder, homeslider1, homeslider2, homeslider3, service1, service2, service3, service4, service5, RestaurantWebsite, lesonline1, lesonline3, lesonline4, lesonline2, restaurant1, restaurant2, restaurant3, restaurant4, solution4,
    documenM1, documenM2, documenM3, documenM4, documenM5, documenM6, documenM7, documenM8
} from "../../images";

//-----------------------------------------------------ABOUT US---------------------------------------------------//

export const aboutUs = [
    {
        text1: "We have been established since 2016 as an IT company that is ready to provide our best innovation to advance your business.",
        text2: "Our experience is a form of our best achievement in providing solutions.",
        text3: "We`ve Done with more than 60 Client,",
        text4: "and we made a long relationship partnership with more than 5 Company in Indonesia."
    }
]

//-----------------------------------------------------CATEGORIES SOLUTIONS---------------------------------------------------//

export const categoriesSolutions = [
    { label: 'All Category', value: 'all' },
    { label: 'Education', value: 'education' },
    { label: 'Oil & Gas Company', value: 'oilGas' },
    { label: 'Industry', value: 'industry' },
    { label: 'Store & Supply', value: 'storeSupply' },
    { label: 'Property & Contract Management', value: 'propertyContractor' },
    { label: 'E-Govermment', value: 'eGovermment' },
];

//-----------------------------------------------------WELCOME DATAS---------------------------------------------------//

export const welcomeDatas = {
    leftItems:
    {
        text1: "Partner of",
        text2: "DIGITAL TRANSFORMATION",
        text3: "We help businesses innovate and transform with the latest digital technologies, enabling them to stay ahead of the competition and grow faster."
    },
    rightItems: [
        { id: 1, src: homeslider3 },
        { id: 2, src: homeslider2 },
        { id: 3, src: homeslider1 },
    ]
}

//-----------------------------------------------------CAROUSEL ASSETS---------------------------------------------------//


export const carouselImages = [
    { id: 1, src: homeslider3 },
    { id: 2, src: homeslider2 },
    { id: 3, src: homeslider1 },
];

//-----------------------------------------------------SERVICE HOME---------------------------------------------------//

export const serviceHome = {
    topItems:
    {
        text1: "GANESHCOM STUDIO",
        text2: "We are an Information Technology Company that provides IT services and solutions for website design, web application development, mobile application development, and various innovative product developments. We realize the progression into the digital age has been inevitable, for businesses to survive and thrive in this era, an understanding of these innovations is key. With a mission to enhance our customers' business growth, we provide IT services and solutions with creative design and development, as well as provide high-quality solutions.",
    }
}

//-----------------------------------------------------HEADER DATAS---------------------------------------------------//


export const headerData = {
    about: {
        name: "About",
        img: headerimgabout,
        title: "About Us",
        description: "We are an Information Technology Company that provides innovative IT services and solutions to businesses. Our team of experts specializes in website design, web application development, mobile application development, and various innovative product developments. Our goal is to help businesses thrive in the digital age by providing high-quality solutions that enhance their business growth. We work closely with our clients to understand their needs and requirements, and provide creative design and development solutions that meet their goals. At our core, we believe in building long-lasting relationships with our clients and helping them achieve their full potential in the digital world.",
    },
    work: {
        name: "Our Future start from what we develop.",
        img: headerimgwork,
        title: "Our Work"
    },
    solutions: {
        name: "Solutions",
        img: headerimgsolution,
        title: "Our Solutions"
    },
    contact: {
        name: "Contact",
        img: "contact-img.jpg",
        title: "Contact Us"
    }
};

//-----------------------------------------------------WORK DATAS---------------------------------------------------//

export const workDatas = {
    softwareDevelopment: {
        items: [
            {
                id: "1",
                name: "Online Tutoring in PT Les Online",
                img: ptlesonline,
                desc: "Developing an application to find online tutoring service providers and private tutors for PT Les Online",
                desc2: "Developing an application to find online tutoring service providers and private tutors for PT Les Online",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Private lessons",
                        img: lesonline1,
                        desc: "private lessons"
                    },
                    {
                        id: "2",
                        name: "Group Lesson",
                        img: lesonline2,
                        desc: "Group Lesson"
                    },
                    {
                        id: "3",
                        name: "Select Schedule",
                        img: lesonline3,
                        desc: "Select Schedule"
                    },
                    {
                        id: "4",
                        name: "Find Teacher",
                        img: lesonline4,
                        desc: "Find Teacher"
                    },

                ]
            },
            {
                id: "2",
                name: "Smart POS in Rayas Store",
                img: posinrayas,
                desc: "A good system in your business will give maximum contribution in developing your business in the future. Let's start digitizing. Access our store anywhere anytime. Safe and in control",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Kategori produk",
                        img: posinrayas,
                        desc: "kategori produk"
                    },
                    {
                        id: "2",
                        name: "Kartu Stok",
                        img: posinrayas,
                        desc: "Kartu Stok"
                    },
                    {
                        id: "3",
                        name: "Laporan Transaksi",
                        img: posinrayas,
                        desc: "Laporan Transaksi"
                    },
                    {
                        id: "4",
                        name: "History Penjualan",
                        img: posinrayas,
                        desc: "History Penjualan"
                    },
                    {
                        id: "5",
                        name: "Dashboard",
                        img: posinrayas,
                        desc: "Dashboard"
                    },
                    {
                        id: "6",
                        name: "Arus Kas",
                        img: posinrayas,
                        desc: "Arus Kas"
                    },
                    {
                        id: "7",
                        name: "Data stok",
                        img: posinrayas,
                        desc: "Data stok"
                    },
                    {
                        id: "8",
                        name: "Tambah Produk",
                        img: posinrayas,
                        desc: "Tambah Produk"
                    },
                    {
                        id: "9",
                        name: "Update Stok(opname)",
                        img: posinrayas,
                        desc: "Update Stok(opname)"
                    },
                    {
                        id: "10",
                        name: "Pencarian Produk",
                        img: posinrayas,
                        desc: "Pencarian Produk"
                    },
                    {
                        id: "11",
                        name: "Atur Harga dan Diskon",
                        img: posinrayas,
                        desc: "Atur Harga dan Diskon"
                    },
                    {
                        id: "12",
                        name: "Penjualan",
                        img: posinrayas,
                        desc: "Penjualan"
                    },
                    {
                        id: "13",
                        name: "Cash In/Cash Out",
                        img: posinrayas,
                        desc: "Cash In/Cash Out"
                    },
                    {
                        id: "14",
                        name: "Laporan Harian",
                        img: posinrayas,
                        desc: "Laporan Harian"
                    },
                    {
                        id: "15",
                        name: "History Penjualan",
                        img: posinrayas,
                        desc: ""
                    },
                    {
                        id: "16",
                        name: "Kasir",
                        img: posinrayas,
                        desc: "Kasir"
                    },

                ]
            },
            {
                id: "3",
                name: "Magnus Indonesia in Azria",
                img: magnus,
                desc: "Developing an application to face the UTBK SBMPTN. The questions are presented in accordance with the Try Out and UTBK grids from LTMPT for Azria",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Work Featured 1",
                        img: magnus,
                        desc: "lorem ipsum dolor amet"
                    },
                    {
                        id: "2",
                        name: "Work Featured 2",
                        img: magnus,
                        desc: "lorem ipsum dolor amet"
                    },
                    {
                        id: "3",
                        name: "Work Featured 3",
                        img: magnus,
                        desc: "lorem ipsum dolor amet"
                    },
                    {
                        id: "4",
                        name: "Work Featured 4",
                        img: magnus,
                        desc: "lorem ipsum dolor amet"
                    }
                ]
            },
            {
                id: "4",
                name: "Property Management System (PEMS) in PT Undagi Bali Sadana",
                img: pems1,
                desc: "Developing software for operating hotel accommodation and commercial housing rental properties for PT Undagi Bali Sadana which is a land and building property provider",
                desc2: "PT Undagi Bali Sadana is a company that develops and builds a piece of land or land into a property product along with all the complete facilities and infrastructure inside into a single unit.To assist its business operations, PT Undagi Bali Sadana uses a Property Management System (PEMS). This application aims to facilitate property management and marketing.",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Master Data",
                        img: pems1,
                        desc: "Master Data"
                    },
                    {
                        id: "2",
                        name: "Project Management",
                        img: pems1,
                        desc: "Project Management"
                    },
                    {
                        id: "3",
                        name: "Logistic",
                        img: pems1,
                        desc: "Logistic"
                    },
                    {
                        id: "4",
                        name: "Selling",
                        img: pems1,
                        desc: "Selling"
                    },
                    {
                        id: "5",
                        name: "Oprational",
                        img: pems1,
                        desc: "Oprational"
                    },
                    {
                        id: "6",
                        name: "Project Cart",
                        img: pems1,
                        desc: "Project Cart"
                    },
                    {
                        id: "7",
                        name: "AR/AP",
                        img: pems1,
                        desc: "AR/AP"
                    },
                    {
                        id: "8",
                        name: "Acounting",
                        img: pems1,
                        desc: "Acounting"
                    },
                    {
                        id: "9",
                        name: "Report",
                        img: pems1,
                        desc: "Report"
                    },
                    {
                        id: "10",
                        name: "Dashboard",
                        img: pems1,
                        desc: "Dashboard"
                    }
                ]
            },
            {
                id: "5",
                name: "Online Industrial Relations System at the Department of Labor and Industry",
                img: industrial,
                desc: "Developing system to provide a harmonious relationship between employer and employees, ensuring continuous productivity at the Department of Labor and Industry",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Create mail",
                        img: mail,
                        desc: "Create mail"
                    },
                    {
                        id: "2",
                        name: "Mail Verification / Approval",
                        img: approved,
                        desc: "Mail Verification / Approval"
                    },
                    {
                        id: "3",
                        name: "Administrator Mail Protal",
                        img: administrator,
                        desc: "Administrator Mail Protal"
                    },
                    {
                        id: "4",
                        name: "Print/Export Mail",
                        img: printer,
                        desc: "Print/Export Mail"
                    },
                    {
                        id: "5",
                        name: "Attachment Upload/Download",
                        img: attachment,
                        desc: "Attachment Upload/Download"
                    },
                    {
                        id: "6",
                        name: "Recap & Report",
                        img: recap,
                        desc: "Recap & Report"
                    },
                    {
                        id: "7",
                        name: "User Management",
                        img: user,
                        desc: "User Management"
                    },
                    {
                        id: "8",
                        name: "Mail Setting",
                        img: service2,
                        desc: "Mail Setting"
                    },
                ]
            },
            {
                id: "6",
                name: "Property System in Krisna Agung Property",
                img: cardplaceholder,
                desc: "software applications for the operation of hospitality accommodation and commercial residential rental properties in Krisna Agung Property",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "7",
                name: "Property Management System (PEMS) in UD Pancer Mas Pesada",
                img: cardplaceholder,
                desc: "Developing software for operating hotel accommodation and commercial housing rental properties for UD Pancer Mas Pesada",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "8",
                name: "Lesku.id in Lesku",
                img: cardplaceholder,
                desc: "Developing an application to find online tutoring service providers and private tutors for Lesku",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "9",
                name: "SAKIRA BPSDM ESDM",
                img: cardplaceholder,
                desc: "Developing employee performance information system for the work report of the Energy and Mineral Resources Development Agency",
                desc2: "Employee performance information system for the work report of the Energy and Mineral Resources Development Agency. Each employee records their daily to-do list in the system and you can assign assignments via the admin portal. Employee performance appraisal needs to be done by a company to evaluate the performance of the employee concerned. Through performance appraisal, the company or HR team will find it easier to find out the abilities, skills, behaviors, strengths, and weaknesses of employees.SAKIRA BPSDM ESDM was developed to automatically this manual process. This web application has these following features:",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "10",
                name: "Asset Integrated Management (AIMS) in PT Pertamina Hulu Energi",
                img: cardplaceholder,
                desc: "Developing a web-based application that is used as a monitoring medium to route some data into a display that makes it easier for the management level in PT Pertamina Hulu Energi",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "11",
                name: "PHE Dashboard Project in Ministry of Marine Affairs and Fisheries Karangasem Regency",
                img: cardplaceholder,
                desc: "Developing system for PKL Registration, Commodity, and Laboratory Test - BPIUK Ministry of Marine Affairs and Fisheries Karangasem Regency",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "12",
                name: "Company Profile Website in Aditya Furniture Bali",
                img: cardplaceholder,
                desc: "Developing website to find information like services, location, hours of operation and contact info easily in Aditya Furniture Bali",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "13",
                name: "Company Profile Website in Rindu Adventures",
                img: cardplaceholder,
                desc: "Developing website to find information like services, location, hours of operation and contact info easily in Rindu Adventures",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "14",
                name: "Academic System & Online Exam in Bandung Energy and Mining Polytechnic",
                img: cardplaceholder,
                desc: "Developing Academic & Online Exam system designed to make it easier for students and teachers to prepare for exams and manage academic administration in Bandung Energy and Mining Polytechnic",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "15",
                name: "Asset Management Information System (SIMASET) in Pertamina University",
                img: assetmanagement,
                desc: "Developing a system for monitoring or tracking important assets and tracking the progress of asset maintenance requests easily",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Dashboard Statics",
                        img: assetmanagement,
                        desc: "a dashboard that contains data visualization and analytical tools displayed visually on the screen, including key performance indicators or other metrics that are important to the business."
                    },
                    {
                        id: "2",
                        name: "QR Code Technology",
                        img: assetmanagement,
                        desc: "All assets that have been registered into the system have a unique number which becomes a unique QR code making it easier to tag labeling assets."
                    },
                    {
                        id: "3",
                        name: "Asset Tracking & Audit",
                        img: assetmanagement,
                        desc: "Asset tracking and identification becomes more efficient by using smartphones and scanners and can avoid discrepancies between physical data and assets."
                    },
                    {
                        id: "4",
                        name: "Approval Workflow",
                        img: assetmanagement,
                        desc: "An approval workflow is a logical sequence of tasks, including human consent, to process data."
                    },
                    {
                        id: "5",
                        name: "Asset Reporting",
                        img: assetmanagement,
                        desc: "Provides asset reporting for all asset activity which can be exported in csv, xls and pdf formats and can be customized as needed."
                    },
                    {
                        id: "6",
                        name: "Multi User & Division",
                        img: assetmanagement,
                        desc: "Can be used simultaneously without limiting user accounts with different devices and support for multi-divisions that have different roles."
                    },
                    {
                        id: "7",
                        name: "Assets Lending",
                        img: assetmanagement,
                        desc: "The process of lending assets online can help stakeholders in applying for asset loans through the system."
                    },
                    {
                        id: "8",
                        name: "Assets Complaints",
                        img: assetmanagement,
                        desc: "Submission of a person's complaint or dissatisfaction with the use of assets can be done online"
                    },

                ]
            },
            {
                id: "16",
                name: "E-Library in Widya Pasraman Sila Kertha Raharja School",
                img: elibrary,
                desc: "Developing an application for storing, accessing, and managing magazine articles, books, and even study materials in Widya Pasraman Sila Kertha Raharja School",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Dashboards & Reports",
                        img: elibrary,
                        desc: "The dashboard is designed using a user interface (UI) design that has ever-increasing availability of data sources from libraries."
                    },
                    {
                        id: "2",
                        name: "Book Management",
                        img: elibrary,
                        desc: "The library management system has designed a library where the book management system manages the identity of each book."
                    },
                    {
                        id: "3",
                        name: "Student Management",
                        img: elibrary,
                        desc: "With login-based access, the library management system allows students to easily find and access study materials in the library."
                    },
                    {
                        id: "4",
                        name: "Library Details",
                        img: elibrary,
                        desc: "The system ensures that students and teachers are connected to each other through this library."
                    },
                ]
            },
        ],
    },
    mobileApp: {
        items: [
            {
                id: "17",
                name: "Timesheet in PT Dago Engineering",
                img: dago,
                desc: "Development of applications that assist users in recording daily work, projects and monitoring work reports for PT Dago Engineering.",
                desc2: "Timesheet Dago Eng Application will helps users in recording daily work, projects and monitoring work reports for PT Dago Engineering. Timesheet Dago Eng provides you employee attendance application system that can be use everywhere with a simple taps on mobile device. HR can monitor mobile employee more effective and the feature is usefull for evaluating employee’s performance. PT Dago Engineering has proven that using Mytimesheet can make it easier for them to be absent in their company activities.Timesheet Dago Eng was developed to automatically this manual process. This web application has these following features:",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Presence",
                        img: presence,
                        desc: "Presence"
                    },
                    {
                        id: "2",
                        name: "Work List",
                        img: worklist,
                        desc: "Work List"
                    },
                    {
                        id: "3",
                        name: "SPD",
                        img: spd,
                        desc: "SPD"
                    },
                    {
                        id: "4",
                        name: "Absence History",
                        img: user,
                        desc: "Absence History"
                    },
                    {
                        id: "5",
                        name: "Work Summary",
                        img: worksummary,
                        desc: "Work Summary"
                    },
                    {
                        id: "6",
                        name: "Work Calender",
                        img: kalender,
                        desc: "Work Calender"
                    },
                ]
            },
            {
                id: "18",
                name: "Restaurant Reservation Application in Bebek Bengil",
                img: restaurantbebek,
                desc: "Developing an application to make it easier for customers to book online reservations in Bebek Bengil",
                desc2: "Developing an application to make it easier for customers to book online reservations in Bebek Bengil",
                systemFeatures: [
                    {
                        id: "1",
                        name: "News or Blog",
                        img: restaurant1,
                        desc: "News or Blog"
                    },
                    {
                        id: "2",
                        name: "Product Or Service",
                        img: restaurant2,
                        desc: "Product Or Service"
                    },
                    {
                        id: "3",
                        name: "SEO Management",
                        img: restaurant3,
                        desc: "SEO Management"
                    },
                    {
                        id: "4",
                        name: "File Manager",
                        img: restaurant4,
                        desc: "File Manager"
                    },
                ]
            },
        ],
    },
    itMasterplan: {
        items: [
            {
                id: "19",
                name: "IT Support in PT Trihasco Utama",
                img: cardplaceholder,
                desc: "Placing IT Support to monitors and maintains the company computer systems, installs, and configures hardware and software, and solves technical issues in PT Trihasco Utama",
                desc2: "Placing IT Support to monitors and maintains the company computer systems, installs, and configures hardware and software, and solves technical issues in PT Trihasco Utama",

                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "20",
                name: "THU One Dashboard in PT Trihasco Utama",
                img: cardplaceholder,
                desc: "Developing system for keeping track of information is important in PT Trihasco Utama",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "21",
                name: "Company Profile Website in PT Trihasco Utama",
                img: cardplaceholder,
                desc: "Developing website to introduces a business's mission, goals, vision, and history in PT Trihasco Utama",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "22",
                name: "Asset Management in PT Trihasco Utama",
                img: cardplaceholder,
                desc: "Developing software that helps you manage your facilities, vehicles, assets, equipment, and machines PT Trihasco Utama",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "23",
                name: "Finance System Integration in PT Trihasco Utama",
                img: cardplaceholder,
                desc: "Developing software to supporting daily financial operations in PT Trihasco Utama",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "24",
                name: "Project Manajement (Timesheet) in PT Trihasco Utama",
                img: cardplaceholder,
                desc: "Developing software for time tracking and employee timesheets integrated with the project management system in PT Trihasco Utama            ",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "25",
                name: "HR Management in PT Trihasco Utama",
                img: cardplaceholder,
                desc: "Developing human resources software is used by businesses to combine a number of necessary HR functions in PT Trihasco Utama",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "26",
                name: "Workspace & Online Reporting in PT Trihasco Utama",
                img: workspace,
                desc: "Developing software for support work productivity that is integrated with other systems in PT Trihasco Utama",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Pipeline Mandatory Inspection",
                        img: workspace,
                        desc: "Pipeline Mandatory Inspection"
                    },
                    {
                        id: "2",
                        name: "Pressure Safety Valve Mandatory Inspection",
                        img: workspace,
                        desc: "Pressure Safety Valve Mandatory Inspection"
                    },
                    {
                        id: "3",
                        name: "Storage Tank Mandatory",
                        img: workspace,
                        desc: "Storage Tank Mandatory"
                    },
                    {
                        id: "4",
                        name: "Version 1 Form Update",
                        img: workspace,
                        desc: "Version 1 Form Update"
                    },
                    {
                        id: "5",
                        name: "Online/Offline Switch",
                        img: workspace,
                        desc: "Online/Offline Switch"
                    },
                    {
                        id: "6",
                        name: "Pressure Vessel Form",
                        img: workspace,
                        desc: "Pressure Vessel Form"
                    },
                    {
                        id: "7",
                        name: "Notification Remainder",
                        img: workspace,
                        desc: "Notification Remainder"
                    },
                    {
                        id: "8",
                        name: "Notification Mailer",
                        img: workspace,
                        desc: "Notification Mailer"
                    },
                ]
            },
            {
                id: "27",
                name: "Document Management System (DMS) in PT Trihasco Utama",
                img: DMS,
                desc: "Developing document management system to create, store, manage, and track electronic documents in PT Trihasco Utama            ",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Master Data",
                        img: documentM,
                        desc: "Master Data"
                    },
                    {
                        id: "2",
                        name: "Project Management",
                        img: documenM1,
                        desc: "Project Management"
                    },
                    {
                        id: "3",
                        name: "Logistic",
                        img: documenM2,
                        desc: "Logistic"
                    },
                    {
                        id: "4",
                        name: "Selling",
                        img: documenM3,
                        desc: "Selling"
                    },
                    {
                        id: "5",
                        name: "Oprational",
                        img: documenM4,
                        desc: "Oprational"
                    },
                    {
                        id: "6",
                        name: "Project Cart",
                        img: documenM5,
                        desc: "Project Cart"
                    },
                    {
                        id: "7",
                        name: "AR/AP",
                        img: documenM6,
                        desc: "AR/AP"
                    },
                    {
                        id: "8",
                        name: "Accounting",
                        img: documenM7,
                        desc: "Accounting"
                    },
                    {
                        id: "9",
                        name: "Accounting",
                        img: documenM8,
                        desc: "Accounting"
                    },
                    {
                        id: "10",
                        name: "Accounting",
                        img: documenM2,
                        desc: "Accounting"
                    },
                ]
            },
            {
                id: "28",
                name: "Timesheet in Trihasco Utama",
                img: timesheetutama,
                desc: "Developing of applications that assist users in recording daily work, projects and monitoring work reports for PT Trihasco Utama",
                desc2: "Timesheet Trihasco Utama Application will helps users in recording daily work, projects and monitoring work reports for PT Trihasco Utama. Timesheet Trihasco Utama provides you employee attendance application system that can be use everywhere with a simple taps on mobile device. HR can monitor mobile employee more effective and the feature is usefull for evaluating employee’s performance. PT Trihasco Utama has proven that using Mytimesheet can make it easier for them to be absent in their company activities.Timesheet Trihasco Utama was developed to automatically this manual process. This web application has these following features:",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Presence",
                        img: presence,
                        desc: "Presence"
                    },
                    {
                        id: "2",
                        name: "Work List",
                        img: worklist,
                        desc: "Work List"
                    },
                    {
                        id: "3",
                        name: "Meeting",
                        img: getintouch1,
                        desc: "Meeting"
                    },
                    {
                        id: "4",
                        name: "CheckIn",
                        img: user,
                        desc: "CheckIn"
                    },
                    {
                        id: "5",
                        name: "Work Summary",
                        img: presence,
                        desc: "Work Summary"
                    },
                    {
                        id: "6",
                        name: "Absence History",
                        img: kalender,
                        desc: "Absence History"
                    },
                    {
                        id: "7",
                        name: "Work Calender",
                        img: administrator,
                        desc: "Work Calender"
                    },
                    {
                        id: "8",
                        name: "Export & Import Project Task",
                        img: worksummary,
                        desc: "Export & Import Project Task"
                    },
                ]
            },
            {
                id: "29",
                name: "New Student Admissions Information System in AKAMIGAS Energy and Mineral Polytechnic",
                img: cardplaceholder,
                desc: "Developing an information system used to assist the AKAMIGAS Energy and Mineral Polytechnic in the process of managing new student admissions",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "30",
                name: "Academic System & Online Exam in AKAMIGAS Energy and Mineral Polytechnic",
                img: cardplaceholder,
                desc: "Developing system to make it easier to prepare for exams and assisting in the management/administration of academic activities in AKAMIGAS Energy and Mineral Polytechnic",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "31",
                name: "E-Letter in Pertamina University",
                img: cardplaceholder,
                desc: "Developing a system to facilitate the process of recording and managing correspondence within agencies at Pertamina University",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "32",
                name: "Office Manuscript Application (ANDIN) in Pertamina University",
                img: cardplaceholder,
                desc: "Developing an application that makes it easy to manage, review, create, and distribute official scripts at Pertamina University",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "33",
                name: "Managing Domain and E-Library Maintenance in Widya Pasraman Sila Kertha Raharja School",
                img: cardplaceholder,
                desc: "Manage the Domain and Maintenance of the Widya Pasraman Sila Kertha Raharja School E-Library on a regular basis",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },


        ],
    },
    brandingWebsite: {
        items: [
            {
                id: "34",
                name: "Restaurant Website in Bebek Bengil",
                img: RestaurantWebsite,
                desc: "Developing website to find information like menus, location, hours of operation and contact info easily for Bebek Bengil",
                desc2: "A restaurant website is a business website whose purpose is to provide information on menus, services, locations and other services. It also provides directions to restaurants. It can also offer promotional discounts and special offers from restaurants.Your customers will get a clear picture of the experience the restaurant has to offer and the vibe guests can expect.",
                systemFeatures: [
                    {
                        id: "1",
                        name: "User-Friendly Website",
                        img: RestaurantWebsite,
                        desc: "A user-friendly website is a website that is designed to be easily accessed by visitors."
                    },
                    {
                        id: "2",
                        name: "Pop Up",
                        img: RestaurantWebsite,
                        desc: "The use of pop ups is based on several reasons, including content promotion, lead generation, offers, and discounts."
                    },
                    {
                        id: "3",
                        name: "HomePage",
                        img: RestaurantWebsite,
                        desc: "Home or can also be referred to as the homepage is the main page of a website."
                    },
                    {
                        id: "4",
                        name: "Online Reservation",
                        img: RestaurantWebsite,
                        desc: "An online reservation system is a vital necessity for restaurant business owners because it can shorten the data collection process."
                    },
                    {
                        id: "5",
                        name: "Digital Menus",
                        img: RestaurantWebsite,
                        desc: "You can display the menus in the restaurant, either in PDF form or on pages specifically for your restaurant menu along with information and descriptions of the menu."
                    },
                    {
                        id: "6",
                        name: "Contact Us",
                        img: RestaurantWebsite,
                        desc: "It feels like your restaurant website won't be complete without a contact us button to make it easier for customers to contact your restaurant."
                    },
                    {
                        id: "7",
                        name: "News and Blogs",
                        img: RestaurantWebsite,
                        desc: "The news and blog features are in the form of articles and writings (which are loaded as posts) on a web page."
                    },
                    {
                        id: "8",
                        name: "Multilanguage",
                        img: RestaurantWebsite,
                        desc: "The multilanguage feature on the website is useful if your web visitors come from different countries."
                    },
                ]
            },

            {
                id: "35",
                name: "Company Profile Website in Bebek Bengil Football School",
                img: cardplaceholder,
                desc: "to introduces a business's mission, goals, vision, and history in Bebek Bengil Football School",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },

            {
                id: "36",
                name: "Company Profile Website in Astra Motor Dealers",
                img: cardplaceholder,
                desc: "Developing website to find information like location, hours of operation and contact info easily for Astra Motor Dealers",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },

            {
                id: "37",
                name: "Company Profile Website in Prima Media Hospital",
                img: cardplaceholder,
                desc: "Developing website to find information like services, location, hours of operation and contact info easily in Prima Media Hospital",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },

            {
                id: "38",
                name: "Company Profile Website in Adrenaline Rush Bali",
                img: cardplaceholder,
                desc: "Developing website to find information like services, location, hours of operation and contact info easily in Adrenaline Rush Bali",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },

            {
                id: "39",
                name: "Company Profile Website in Penida Point",
                img: cardplaceholder,
                desc: "Developing website to find information like services, location, hours of operation and contact info easily in Penida Point",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },

            {
                id: "40",
                name: "Company Profile Website in Balam Bali Villa",
                img: cardplaceholder,
                desc: "Developing website to find information like services, location, hours of operation and contact info easily in Balam Bali Villa",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },

            {
                id: "41",
                name: "Company Profile Website in The Nusa Penida Bali",
                img: cardplaceholder,
                desc: "Developing website to find information like services, location, hours of operation and contact info easily in The Nusa Penida Bali",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },

            {
                id: "42",
                name: "Company Profile Website in Besakih",
                img: cardplaceholder,
                desc: "Developing website to find information like services, location, hours of operation and contact info easily in Besakih",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },

            {
                id: "43",
                name: "Company Profile Website in Jaje Bali and Craft",
                img: cardplaceholder,
                desc: "Developing website to find information like services, location, hours of operation and contact info easily in Jaje Bali and Craft",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },

            {
                id: "44",
                name: "Company Profile Website in My Island Guide",
                img: cardplaceholder,
                desc: "Developing website to find information like services, location, hours of operation and contact info easily in My Island Guide",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },

            {
                id: "45",
                name: "Company Profile and Catalog Website in CV Vidjitha Group",
                img: CPW,
                desc: "Developing a website to offer products and services and find information such as location, hours of operation and contact info easily for CV Vidjitha Group  ",
                systemFeatures: [
                    {
                        id: "1",
                        name: "User-Friendly Website",
                        img: CPW,
                        desc: "A user-friendly website is a website that is designed to be easily accessed by visitors."
                    },
                    {
                        id: "2",
                        name: "Product Search",
                        img: CPW,
                        desc: "This feature serves to make it easier for customers to find the products they need."
                    },
                    {
                        id: "3",
                        name: "Product Details",
                        img: CPW,
                        desc: "Creating a product detail page serves to provide a detailed description of the appearance, features and benefits of the product that consumers will experience."
                    },
                    {
                        id: "4",
                        name: "Homepage",
                        img: CPW,
                        desc: "When accessing a website, the first page that will appear is the home page. In general, a brief company profile is on this home page."
                    },
                    {
                        id: "5",
                        name: "Related Products (Related Items)",
                        img: CPW,
                        desc: "Related products are recommendations of similar products which are usually placed at the bottom of product detail pages."
                    },
                    {
                        id: "6",
                        name: "Call-to-Action (CTA) Buttons",
                        img: CPW,
                        desc: "CTA is an 'action' button that invites visitors to do something. Can buy products, fill out forms, subscribe to newsletters, and so on."
                    },
                    {
                        id: "7",
                        name: "Important Links and Icons",
                        img: CPW,
                        desc: "At the bottom of the online shop website, or often called the footer, you will usually find links to other pages."
                    },
                    {
                        id: "8",
                        name: "Frequently Asked Questions (FAQ)",
                        img: CPW,
                        desc: "Frequently Asked Questions (FAQ) is a page that contains a collection of questions that are frequently asked by online store visitors."
                    },
                    {
                        id: "9",
                        name: "CMS (Content Management System)",
                        img: CPW,
                        desc: "Content management systems are software used to manage adding or manipulating (changing) content from a website."
                    },
                ]
            },
        ],
    },
};

//-----------------------------------------------------FOOTER DATAS---------------------------------------------------//


export const footerData = {
    mainMenu: [
        { id: 1, title: "About", url: "https://reaplicate-ganeshcom-6r1s643t1-fahrezaraharjo.vercel.app/about" },
        { id: 2, title: "Testimonial", url: "/#" },
        { id: 3, title: "Services", url: "/#" },
        { id: 4, title: "Achievement", url: "/#" },
        { id: 5, title: "Sitemap", url: "/#" }
    ],
    otherMenu: [
        { id: 1, title: "Blog", url: "/#article" },
        { id: 2, title: "Carrers" },
        { id: 3, title: "Intership" },
        { id: 4, title: "R&D Program" },
        { id: 5, title: "Term & Condition" }
    ],
    whereWeAre: [
        {
            id: 1,
            title: "branchOffice",
            address:
                "Jl. Sunset Road No.28, Seminyak, Kuta, Kabupaten Badung, Bali 80361"
        },
        {
            id: 2,
            title: "mainOffice",
            address:
                "Jl. Kenyeri III No.82, Tonja, Kec. Denpasar Utara, Kota Denpasar, Bali 80236"
        }
    ],
    connectWithUs: [
        {
            id: 1,
            title: "Facebook",
            icon: "fab fa-facebook",
            url: "https://www.facebook.com/ganeshcomstudio/"
        },
        {
            id: 2,
            title: "Instagram",
            icon: "fab fa-instagram",
            url: "https://www.instagram.com/ganeshcomstudio/"
        },
        {
            id: 3,
            title: "Linkedin",
            icon: "fab fa-linkedin",
            url: "https://www.linkedin.com/company/ganeshcomstudio/"
        },
        {
            id: 4,
            title: "Youtube",
            icon: "fab fa-youtube",
            url: "https://www.youtube.com/channel/UCV-TnoZcw8wZ5rVgIZKo6Ig"
        }
    ]
};

//-----------------------------------------------------TESTIMONI---------------------------------------------------//

export const trustedCompanies = [
    { id: '1', image: trustedby1 },
    { id: '2', image: trustedby2 },
    { id: '3', image: trustedby3 },
    { id: '4', image: trustedby4 },
    { id: '5', image: trustedby5 },
    { id: '6', image: trustedby6 },
    { id: '7', image: trustedby7 },
    { id: '8', image: trustedby8 },
    { id: '9', image: trustedby9 },
    { id: '10', image: trustedby10 },
];

//-----------------------------------------------------PRODUCT---------------------------------------------------//


export const products = [
    {
        id: 1,
        title: 'Akunta.id',
        images: [
            akuntaid
        ],
        description: 'Simplifies the bookkeeping process for your business.',
    },
    {
        id: 2,
        title: 'SION App',
        images: [
            sion
        ],
        description:
            'Simple way to manage payments for school & others.',
    },
    {
        id: 3,
        title: 'Dimedika.id',
        images: [
            dimedika
        ],
        description:
            'The future of digital healthcare super apps.',
    },
    {
        id: 4,
        title: 'Keacara.com',
        images: [
            keacaracom
        ],
        description:
            'The future of digital healthcare super apps.',
    },
    {
        id: 5,
        title: 'My Timesheet',
        images: [
            mytimesheet
        ],
        description:
            'The future of digital healthcare super apps.',
    },
    {
        id: 6,
        title: 'PEMS',
        images: [
            pems
        ],
        description:
            'The future of digital healthcare super apps.',
    },
    {
        id: 7,
        title: 'Ximo',
        images: [
            ximo
        ],
        description:
            'The future of digital healthcare super apps.',
    },

];

//-----------------------------------------------------OUR SOLUTION---------------------------------------------------//


export const categories = [
    {
        id: 1,
        name: "education",
        photos: [
            {
                id: 1,
                title: "Library",
                url: solution2
            },
            {
                id: 2,
                title: "Classroom",
                url: solution1
            },
            {
                id: 3,
                title: "Graduation",
                url: solution3
            },
        ],
    },
    {
        id: 2,
        name: "Oil & Gas Company",
        photos: [
            {
                id: 1,
                title: "Oil Rig",
                url: solution15,
            },
            {
                id: 2,
                title: "Refinery",
                url: solution15,
            },
            {
                id: 3,
                title: "Gas Pump",
                url: solution15,
            },
        ],
    },
    {
        id: 3,
        name: "Industry",
        photos: [
            {
                id: 1,
                title: "Factory",
                url: solution14,
            },
            {
                id: 2,
                title: "Construction Site",
                url: solution14,
            },
            {
                id: 3,
                title: "Welding",
                url: solution14,
            },
        ],
    },
    {
        id: 4,
        name: "Store & Supply",
        photos: [
            {
                id: 1,
                title: "Grocery Store",
                url: solution20
            },
            {
                id: 2,
                title: "Construction Site",
                url: solution20,
            },
            {
                id: 3,
                title: "Welding",
                url: solution20,
            },
        ],
    },
    {
        id: 5,
        name: "Property & Contract",
        photos: [
            {
                id: 1,
                title: "Grocery Store",
                url: solution5
            },
            {
                id: 2,
                title: "Construction Site",
                url: solution5,
            },
            {
                id: 3,
                title: "Welding",
                url: solution5,
            },
        ],
    },
    {
        id: 6,
        name: "E- Govermment",
        photos: [
            {
                id: 1,
                title: "Grocery Store",
                url: solution20
            },
            {
                id: 2,
                title: "Construction Site",
                url: solution17
            },
            {
                id: 3,
                title: "Welding",
                url: solution17
            },
        ],
    },
]

//-----------------------------------------------------TABS SERVICE---------------------------------------------------//

export const tabsData = [
    {
        title: 'Software Development',
        photo: service1,
        paragraph: 'We develop responsive web-based applications on various platforms, with interactive design displays, powerful functionality, and dynamic software..',
    },
    {
        title: 'Mobile App',
        photo: service2,
        paragraph: 'We design a mobile app system that supports various existing operating systems and is user friendly, where you can interact adaptively with anyone..',
    },
    {
        title: 'IT Masterplan',
        photo: service3,
        paragraph: 'We develop an IT development plan that aligns with your business strategy. Realize your company`s digital transformation with the right planning.',
    },
    {
        title: 'Branding Website',
        photo: service4,
        paragraph: 'We work with different types of clients. For us, your website is not only your digital presence but also a strong digital brand through a personalized website that visitors will love.',
    },
    {
        title: 'Startup Partnership',
        photo: service5,
        paragraph: 'Partners with us. We fine tune each innovation program to enable corporate/startup collaboration and leapfrog competition by innovating faster.',
    },
];

//-----------------------------------------------------FRAMMER MOTION---------------------------------------------------//


export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true, // add autoplay property and set it to true
    autoplaySpeed: 2000, // set the autoplay speed to 2000ms (2 seconds)
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};
//-----------------------------------------------------ARTICLES---------------------------------------------------//

export const articles = [
    {
        id: 1,
        image: whatsnew1,
        title: "6 Alasan Pentingnya Teknologi di Era Kita Sekarang",
        description:
            "Tujuan pertama dan terpenting yang dilayani oleh teknologi adalah komunikasi. Media sosial dan aplikasi teknologi lainnya telah menyatukan kita.",
    },
    {
        id: 2,
        image: whatsnew2,
        title: "Pentingnya Teknologi untuk Membuat Dunia yang Lebih Baik",
        description:
            "Teknologi adalah keseluruhan sarana untuk menyediakan barang-barang yang diperlukan bagi kelangsungan dan kenyamanan hidup manusia.",
    },
    {
        id: 3,
        image: whatsnew3,
        title: "10 Web Design Trends You Should Know",
        description:
            "Vivamus finibus, massa non faucibus commodo, turpis velit vehicula elit, et commodo quam lorem ac justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod lorem vel mauris aliquam blandit.",
    },
];

//-----------------------------------------------------SOLUTION DATAS---------------------------------------------------//


export const solutionDatas = {
    education: {
        items: [
            {
                id: "1",
                name: "Lesku.id",
                img: solution1,
                desc: "Lesku.id is a platform that brings together tutoring or private tutoring service providers (teachers/teachers) with students/students whose learning process is carried out online and in real time through interactive videos. This application is able to run algorithms for planning private group lessons online with automatic scheduling",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Les Private",
                        img: solution1,
                        desc: "Les Private",
                    },
                    {
                        id: "2",
                        name: "Les Group",
                        img: solution1,
                        desc: "Les Group",
                    },
                    {
                        id: "3",
                        name: "Pilih jadwal",
                        img: solution1,
                        desc: "Pilih jadwal",
                    },
                    {
                        id: "4",
                        name: "Cari Guru",
                        img: solution1,
                        desc: "Cari Guru",
                    },
                ]

            },
            {
                id: "2",
                name: "Sistem Akademik & Online Exam",
                img: solution1,
                desc: "Computer-based exams require adequate preparation from both the teacher's and student's sides. Control exams easily with the Academic & Online Exam System which is designed to make it easier for students and teachers to prepare for midterm exams, final exams, and national exams by simulating national exams. In addition, this system also helps the management/administration of academic activities in schools.",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "3",
                name: "Magnus Indonesia",
                img: solution1,
                desc: "The Magnus application is very easy to access by all students anywhere and anytime without burdening the capacity of the smartphone. With this application you will be able to feel the convenience of studying online and of course all learning will be more efficient. This application provides a discussion of UTBK questions, Try Outs with HOTS question levels and an analysis of the competition map, to face the SBMPTN.",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Authentication",
                        img: solution1,
                        desc: "Authentication"
                    },
                    {
                        id: "2",
                        name: "Dashboard",
                        img: solution1,
                        desc: "Dashboard"
                    },
                    {
                        id: "3",
                        name: "Materi",
                        img: solution1,
                        desc: "Materi"
                    },
                    {
                        id: "4",
                        name: "Bank Soal",
                        img: solution1,
                        desc: "Bank Soal"
                    },
                    {
                        id: "5",
                        name: "User Management",
                        img: solution1,
                        desc: "User Management"
                    },
                    {
                        id: "6",
                        name: "Target Belajar",
                        img: solution1,
                        desc: "Target Belajar"
                    },
                    {
                        id: "7",
                        name: "Kelas Online",
                        img: solution1,
                        desc: "Kelas Online"
                    },
                    {
                        id: "8",
                        name: "Management Transaksi",
                        img: solution1,
                        desc: "Management Transaksi"
                    },
                    {
                        id: "9",
                        name: "Online Payment",
                        img: solution1,
                        desc: "Online Payment"
                    },

                    {
                        id: "10",
                        name: "FIle Manager",
                        img: solution1,
                        desc: "FIle Manager"
                    },
                    {
                        id: "11",
                        name: "Management Tryout",
                        img: solution1,
                        desc: "Management Tryout"
                    },
                    {
                        id: "12",
                        name: "Bloging",
                        img: solution1,
                        desc: "Bloging"
                    },
                    {
                        id: "13",
                        name: "Web CMS",
                        img: solution1,
                        desc: "Web CMS"
                    },
                ]

            },
            {
                id: "4",
                name: "PMB (New Student Admission Information System)",
                img: solution1,
                desc: "PMB is an information system used to assist the AKAMIGAS Energy and Mineral Polytechnic in the process of managing new student admissions. The increasing number of prospective AKAMIGAS Energy and Mineral Polytechnic students every year makes the manual system no longer effective.",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]

            },
        ]
    },
    oilGas: {
        items: [
            {
                id: "1",
                name: "AIMS (Assets Integrity Management System)",
                img: solution5,
                desc: "The AIMS application is a web-based application used by PT Pertamina Hulu Energi as a monitoring medium for several route data into a display that makes it easier for management levels to capture data according to actual situations and conditions.",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Assets Register",
                        img: solution5,
                        desc: "Assets Register"
                    },
                    {
                        id: "2",
                        name: "Static Piping(SFIMS)",
                        img: solution5,
                        desc: "Static Piping(SFIMS)"
                    },
                    {
                        id: "3",
                        name: "Pipeline(PIMS)",
                        img: solution5,
                        desc: "Pipeline(PIMS)"
                    },
                    {
                        id: "4",
                        name: "Structure(SIMS)",
                        img: solution5,
                        desc: "Structure(SIMS)"
                    },
                    {
                        id: "5",
                        name: "Inspection Management",
                        img: solution5,
                        desc: "Inspection Management"
                    },
                    {
                        id: "6",
                        name: "Field Register",
                        img: solution5,
                        desc: "Field Register"
                    },
                    {
                        id: "7",
                        name: "Home Dashboard",
                        img: solution5,
                        desc: "Home Dashboard"
                    },
                    {
                        id: "8",
                        name: "Report",
                        img: solution5,
                        desc: "Report"
                    },
                    {
                        id: "9",
                        name: "User & Role Management",
                        img: solution5,
                        desc: "User & Role Management"
                    },
                    {
                        id: "10",
                        name: "Notification",
                        img: solution5,
                        desc: "Notification"
                    },
                    {
                        id: "11",
                        name: "Setting",
                        img: solution5,
                        desc: "Setting"
                    },
                ]

            },
            {
                id: "2",
                name: "AIMS (Assets Integrity Management System)",
                img: solution5,
                desc: "The AIMS application is a web-based application used by PT Pertamina Hulu Energi as a monitoring medium for several route data into a display that makes it easier for management levels to capture data according to actual situations and conditions.",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]

            },
            {
                id: "3",
                name: "AIMS (Assets Integrity Management System)",
                img: solution5,
                desc: "The AIMS application is a web-based application used by PT Pertamina Hulu Energi as a monitoring medium for several route data into a display that makes it easier for management levels to capture data according to actual situations and conditions.",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]

            },
        ],
    },
    industry: {
        items: [
            {
                id: "1",
                name: "HR Management",
                img: solution14,
                desc: "HR Management was developed to automatically this manual process. This web application has these following features:",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Sistem Informasi Pegawai",
                        img: solution14,
                        desc: "Sistem Informasi Pegawai"
                    },
                    {
                        id: "2",
                        name: "Dashboard HR",
                        img: solution14,
                        desc: "Dashboard HR"
                    },
                    {
                        id: "3",
                        name: "Pengajuan Pegawai",
                        img: solution14,
                        desc: "Pengajuan Pegawai"
                    },
                    {
                        id: "4",
                        name: "Update Form & Rekap Standar ISO",
                        img: solution14,
                        desc: "Update Form & Rekap Standar ISO"
                    },
                    {
                        id: "5",
                        name: "Absence Monitoring & Report",
                        img: solution14,
                        desc: "Absence Monitoring & Report"
                    },
                    {
                        id: "6",
                        name: "E-Sign & Approval",
                        img: solution14,
                        desc: "E-Sign & Approval"
                    },
                    {
                        id: "7",
                        name: "KPI Tools",
                        img: solution14,
                        desc: "KPI Tools"
                    },
                ]

            },
            {
                id: "2",
                name: "Project Management",
                img: solution14,
                desc: "Project Management was developed to automatically this manual process. This web application has these following features:",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Presence",
                        img: solution14,
                        desc: "Presence"
                    },
                    {
                        id: "1",
                        name: "Work List",
                        img: solution14,
                        desc: "Work List"
                    },
                    {
                        id: "1",
                        name: "Meetings",
                        img: solution14,
                        desc: "Meetings"
                    },
                    {
                        id: "1",
                        name: "Check-in",
                        img: solution14,
                        desc: "Check-in"
                    },
                    {
                        id: "1",
                        name: "Work Summary",
                        img: solution14,
                        desc: "Work Summary"
                    },
                    {
                        id: "1",
                        name: "Absence History",
                        img: solution14,
                        desc: "Absence History"
                    },
                    {
                        id: "1",
                        name: "Work Calender",
                        img: solution14,
                        desc: "Work Calender"
                    },
                    {
                        id: "1",
                        name: "Export & Import Project Task",
                        img: solution14,
                        desc: "Export & Import Project Task"
                    },
                ]

            },
            {
                id: "3",
                name: "Finance system Integration",
                img: solution14,
                desc: "Finance System Integration System was developed to automatically this manual process. This web application has these following features:",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Approval Process",
                        img: solution14,
                        desc: "Approval Process"
                    },
                    {
                        id: "2",
                        name: "Procurement Management - Purchasing",
                        img: solution14,
                        desc: "Procurement Management - Purchasing"
                    },
                    {
                        id: "3",
                        name: "Budgeting Control - project",
                        img: solution14,
                        desc: "Budgeting Control - project"
                    },
                    {
                        id: "4",
                        name: "E- Sign Document",
                        img: solution14,
                        desc: "E- Sign Document"
                    },
                    {
                        id: "5",
                        name: "Digital Invoicing",
                        img: solution14,
                        desc: "Digital Invoicing"
                    },
                ]

            },
            {
                id: "4",
                name: "Assets Management",
                img: solution14,
                desc: "Asset Management System was developed to automatically this manual process. This web application has these following features:",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Assets Register",
                        img: solution14,
                        desc: "Assets Register"
                    },
                    {
                        id: "2",
                        name: "Assets Monitoring",
                        img: solution14,
                        desc: "Assets Monitoring"
                    },
                    {
                        id: "3",
                        name: "Assets Managerial & Maintenance",
                        img: solution14,
                        desc: "Assets Managerial & Maintenance"
                    },
                    {
                        id: "4",
                        name: "Assets Loading & Distribution",
                        img: solution14,
                        desc: "Assets Loading & Distribution"
                    },
                ]

            },
            {
                id: "5",
                name: "Company Profile Website",
                img: solution14,
                desc: "Company Profile Website System was developed to automatically this manual process. This web application has these following features:",
                systemFeatures: [
                    {
                        id: "1",
                        name: "News atau Blog",
                        img: solution14,
                        desc: "News atau Blog"
                    },
                    {
                        id: "2",
                        name: "Produk atau service",
                        img: solution14,
                        desc: "Produk atau service"
                    },
                    {
                        id: "3",
                        name: "SEO Management",
                        img: solution14,
                        desc: "SEO Management"
                    },
                    {
                        id: "4",
                        name: "File Manager",
                        img: solution14,
                        desc: "File Manager"
                    },
                    {
                        id: "5",
                        name: "Content Management System (CMS)",
                        img: solution14,
                        desc: "Content Management System (CMS)"
                    },
                ]

            },
            {
                id: "6",
                name: "Single Sign On",
                img: solution14,
                desc: "Single Sign On (SSO) System was developed to automatically this manual process. This web application has these following features:",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Intergrated Login & sistem portal",
                        img: solution14,
                        desc: "Intergrated Login & sistem portal"
                    }
                ]

            },
            {
                id: "7",
                name: "The One Dashboard",
                img: solution14,
                desc: "THU One Dashboard System was developed to automatically this manual process. This web application has these following features:",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]

            },
            {
                id: "8",
                name: "Workspace & Online Reporting",
                img: solution14,
                desc: "Online Reporting is an online web base application with flexibility of space and work scheme.Online Reporting was developed to automatically this manual process. This web application has these following features:",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Pipeline Mandatory Inspection",
                        img: solution14,
                        desc: "Pipeline Mandatory Inspection"
                    },
                    {
                        id: "2",
                        name: "Pressure Safety Valve Mandatory Inspection",
                        img: solution14,
                        desc: "Pressure Safety Valve Mandatory Inspection"
                    },
                    {
                        id: "3",
                        name: "Storage Tank Mandatory",
                        img: solution14,
                        desc: "Storage Tank Mandatory"
                    },
                    {
                        id: "4",
                        name: "Version 1 Form Update",
                        img: solution14,
                        desc: "Version 1 Form Update"
                    },
                    {
                        id: "5",
                        name: "Online/Offline Switch",
                        img: solution14,
                        desc: "Online/Offline Switch"
                    },
                    {
                        id: "6",
                        name: "Pressure Vessel Form",
                        img: solution14,
                        desc: "Pressure Vessel Form"
                    },
                    {
                        id: "7",
                        name: "Notification Remainder",
                        img: solution14,
                        desc: "Notification Remainder"
                    },
                    {
                        id: "8",
                        name: "Notification Mailer",
                        img: solution14,
                        desc: "Notification Mailer"
                    },

                ]

            },
        ],
    },
    storeSupply: {
        items: [
            {
                id: "1",
                name: "Sistem POS (Point of Sale)",
                img: solution20,
                desc: "A good system in your business will give maximum contribution in developing your business in the future. The POS system is integrated with your marketing, sales, inventory and e-commerce. Let's start digitizing. Access our store anywhere anytime. Safe and in control",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Kategori Produk",
                        img: solution20,
                        desc: "Kategori Produk"
                    },
                    {
                        id: "2",
                        name: "Kartu Stok",
                        img: solution20,
                        desc: "Kartu Stok"
                    },
                    {
                        id: "3",
                        name: "Laporan Transaksi",
                        img: solution20,
                        desc: "Laporan Transaksi"
                    },
                    {
                        id: "4",
                        name: "History Penjualan",
                        img: solution20,
                        desc: "History Penjualan"
                    },
                    {
                        id: "5",
                        name: "Dashboard",
                        img: solution20,
                        desc: "Dashboard"
                    },
                    {
                        id: "6",
                        name: "Arus Kas",
                        img: solution20,
                        desc: "Arus Kas"
                    },
                    {
                        id: "7",
                        name: "Data Stok",
                        img: solution20,
                        desc: "Data Stok"
                    },
                    {
                        id: "8",
                        name: "Tambah Produk",
                        img: solution20,
                        desc: "Tambah Produk"
                    },
                    {
                        id: "9",
                        name: "Update Stok (opname)",
                        img: solution20,
                        desc: "Update Stok (opname)"
                    },
                    {
                        id: "10",
                        name: "Pencarian Produk",
                        img: solution20,
                        desc: "Pencarian Produk"
                    },
                    {
                        id: "11",
                        name: "Atur Harga dan Diskon",
                        img: solution20,
                        desc: "Atur Harga dan Diskon"
                    },
                    {
                        id: "12",
                        name: "Penjualan",
                        img: solution20,
                        desc: "Penjualan"
                    },
                    {
                        id: "13",
                        name: "Cashin/Cashout",
                        img: solution20,
                        desc: "Cashin/Cashout"
                    },
                    {
                        id: "14",
                        name: "Laporan Harian",
                        img: solution20,
                        desc: "Laporan Harian"
                    },
                    {
                        id: "15",
                        name: "History Penjualan",
                        img: solution20,
                        desc: "History Penjualan"
                    },
                    {
                        id: "16",
                        name: "Kasir",
                        img: solution20,
                        desc: "Kasir"
                    },
                ]
            }
        ],
    },
    propertyContractor: {
        items: [
            {
                id: "1",
                name: "PEMS (Property Management System)",
                img: solution15,
                desc: "A Property Management Systems (PEMS) are software applications for the operation of hospitality accommodation and commercial residential rental properties. This application aims to facilitate property management and marketing. PMS is also used in the manufacturing industry, local government and manufacturing.",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Master Data",
                        img: solution15,
                        desc: "Master Data"
                    },
                    {
                        id: "2",
                        name: "Project Management",
                        img: solution15,
                        desc: "Project Management"
                    },
                    {
                        id: "3",
                        name: "Logistic",
                        img: solution15,
                        desc: "Logistic"
                    },
                    {
                        id: "4",
                        name: "Selling",
                        img: solution15,
                        desc: "Selling"
                    },
                    {
                        id: "5",
                        name: "Oprational",
                        img: solution15,
                        desc: "Oprational"
                    },
                    {
                        id: "6",
                        name: "Project Cart",
                        img: solution15,
                        desc: "Project Cart"
                    },
                    {
                        id: "7",
                        name: "AR/Ap",
                        img: solution15,
                        desc: "AR/Ap"
                    },
                    {
                        id: "8",
                        name: "Accounting",
                        img: solution15,
                        desc: "Accounting"
                    },
                    {
                        id: "9",
                        name: "Report",
                        img: solution15,
                        desc: "Report"
                    },
                    {
                        id: "10",
                        name: "Dashboard",
                        img: solution15,
                        desc: "Dashboard"
                    },
                ]
            },
            {
                id: "2",
                name: "DMS (Document Management System))",
                img: solution15,
                desc: "Within the company, of course, there are various types of affairs with documents or letters of approval. However, what if you are a busy boss and don't have time to go to the office because of certain business? With DMS, you can easily share, send, archive documents more easily, quickly and securely. You can even approve it online, anytime and anywhere!",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Create Document",
                        img: solution15,
                        desc: "Create Document"
                    },
                    {
                        id: "1",
                        name: "Manage Document Struture",
                        img: solution15,
                        desc: "Manage Document Struture"
                    },
                    {
                        id: "1",
                        name: "E-filling",
                        img: solution15,
                        desc: "E-filling"
                    },
                    {
                        id: "1",
                        name: "Sharing File",
                        img: solution15,
                        desc: "Sharing File"
                    },
                    {
                        id: "1",
                        name: "File Indexing",
                        img: solution15,
                        desc: "File Indexing"
                    },
                    {
                        id: "1",
                        name: "File Hierarchy by Folder",
                        img: solution15,
                        desc: "File Hierarchy by Folder"
                    },
                ]
            },

        ],
    },
    eGovermment: {
        items: [
            {
                id: "1",
                name: "SAKIRA BPSDM ESDM",
                img: solution14,
                desc: "Employee performance information system for the work report of the Energy and Mineral Resources Development Agency. Each employee records their daily to-do list in the system and you can assign assignments via the admin portal. Employee performance appraisal needs to be done by a company to evaluate the performance of the employee concerned. Through performance appraisal, the company or HR team will find it easier to find out the abilities, skills, behaviors, strengths, and weaknesses of employees.",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Rekap Kinerka",
                        img: solution14,
                        desc: "Rekap Kinerka"
                    },
                    {
                        id: "2",
                        name: "Validasi",
                        img: solution14,
                        desc: "Validasi"
                    },
                    {
                        id: "3",
                        name: "My Team",
                        img: solution14,
                        desc: "My Team"
                    },
                    {
                        id: "4",
                        name: "Berita",
                        img: solution14,
                        desc: "Berita"
                    },
                    {
                        id: "5",
                        name: "Notification",
                        img: solution14,
                        desc: "Notification"
                    },
                ]
            },
            {
                id: "2",
                name: "PHE Dashboard Project",
                img: solution14,
                desc: "The PHE Dashboard Project is a development project for the PKL Registration System, Commodity, and Laboratory Testing of the BPIUK Ministry of Marine Affairs and Fisheries, Karangasem Regency.",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "3",
                name: "HIO Disnaker",
                img: solution14,
                desc: "The process of submitting a letter is easier by using HIO Disnaker. Data submissions are organized and easy to select. Create harmonious and sweet industrial/employment relationships with HIO Disnaker. Industrial relations complaints can be submitted online and well organized at the Manpower Office.",
                systemFeatures: [
                    {
                        id: "",
                        name: "",
                        img: "",
                        desc: ""
                    }
                ]
            },
            {
                id: "4",
                name: "ANDIN (Aplikasi Naskah Dinas)",
                img: solution14,
                desc: "In this all-digital era, everything is electronic, as well as Pertamina University which applies the Electronic Service Manuscript. Now Pertamina University uses the Official Manuscript Application (ANDIN) which is an application that makes it easy to manage, review, create and share official manuscript arrangements. This application is very suitable for an agency that does a lot of correspondence.",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Mobile Friendly",
                        img: solution19,
                        desc: "Mobile Friendly"
                    }
                ]
            },
        ],
    },
};


/*-------------------------------------ServicesDatas-------------------------------*/

export const serviceDatas = {
    softwareDevelopment: {
        items: [
            {
                id: "112",
                name: "Software Development",
                img: serviceSoftware,
                desc: "Software development is the process of conceiving, specifying, designing, programming, documenting, testing, and bug fixing involved in creating and maintaining applications, frameworks, or other software components. We develop responsive web-based applications on various platforms, with interactive design displays, powerful functionality, and dynamic software. We work with a team of professional practitioners to develop web-based applications with standard and highly competitive prices. We have served more than 60 clients on a small to large scale.",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Development Method",
                        img: softwaredev,
                        desc: "We are Using Agile Software Development Life Cycle That Contains:Requirements Collection,Analysis,Designing,Coding,Testing,Maintenance"
                    },
                    {
                        id: "2",
                        name: "Technology",
                        img: softwaretech,
                        desc: "We have used up to date technology and various platforms in software development created by our development team, ensuring our work is representative of your brand"
                    },
                ]
            },
        ]
    },
    mobileApp: {
        items: [
            {
                id: "211",
                name: "Mobile App",
                img: servicemobile,
                desc: "A mobile application, most commonly referred to as an app, is a type of application software designed to run on a mobile device, such as a smartphone or tablet computer. A mobile app itself is application software developed for smartphones or tablets with various operating systems: iOS, Android, KaiOS, Harmony OS, Tizen, and others.We design a mobile app system that supports various existing operating systems and is user friendly, where you can interact adaptively with anyone.",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Development Method",
                        img: mobiledevelop,
                        desc: "The Developement Method We Use On Mobile Are:Planning,Analysis UI/UX Design,Development,Testing,Release,Maintenance"
                    },
                    {
                        id: "2",
                        name: "Technology",
                        img: mobiletech,
                        desc: "We have used up to date technology such as React Native, Flutter,etc in our mobile apps created by our development team, ensuring our work is representative of your brand"
                    },
                ]
            },
        ]
    },
    itMasterplan: {
        items: [
            {
                id: "311",
                name: "IT Masterplan",
                img: servicebranding,
                desc: "To face competition, various business processes in the company need to be adapted to the conditions of technological development. Finding IT solutions that will support companies in determining, controlling, and applying technology to business transformation is crucial for company effectiveness.We develop an IT development plan that aligns with your business strategy. Realize your company's digital transformation with the right planning.",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Development Method",
                        img: itmasterdevelop,
                        desc: "We have used up to date technology Such as:html, css, js for web and Framework :Laravel,react (Next JS),Nest JS,ASP.Net"
                    },
                    {
                        id: "2",
                        name: "Technology",
                        img: itmastertech,
                        desc: "Development Method :Data Collection,Public Scoping,Resource Analysis,Development of Resource Objective,Public Review,Finalize Master Plan,Adoption of Master Plan Revision"
                    },
                ]
            },
        ]
    },
    brandingWebsite: {
        items: [
            {
                id: "411",
                name: "Branding Website",
                img: servicebranding,
                desc: "Website is the first impression of your brand or company and devising it correctly should be your first action if you want to give a kick start to your business today. Developing engaging websites and e-commerce with great user experience is what we aim to do. We work with different types of clients. For us, your website is not only your digital presence but also a strong digital brand through a personalized website that visitors will love.",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Development Method",
                        img: brandingdevelop,
                        desc: "Planning,Analysis,Prototyping,Development,Testing,Release,SEO"
                    },
                    {
                        id: "2",
                        name: "Technology",
                        img: brandingtech,
                        desc: "The Technology We Use To Branding Website Such As: Web: html, css, js, Framework: Laravel, front End = react (Next JS), Back end = Nest JS, Back ASP.Net"
                    },
                ]
            },
        ]
    },
    startupPartnership: {
        items: [
            {
                id: "511",
                name: "Startup Partnership",
                img: servicestartup,
                desc: "When scanning business opportunities, corporations often approach startups for partnership, as these entities hold the advantage for the landscape – refreshing novelties. Collaborations between startups and established corporate players are pivotal for fostering innovation. Driven from determination, startups have introduced an unprecedented capacity to reshape the existing business models and invent new ones altogether.We provide opportunities to enhance each innovation program to enable enterprise/startup collaboration, enable our partners to find new revenue paths, provide solutions for their customers, gain innovation insights, improve internal processes and leapfrog the competition by innovating faster.",
                systemFeatures: [
                    {
                        id: "1",
                        name: " ",
                        img: servicestartup,
                        desc: " "
                    },
                    {
                        id: "2",
                        name: " ",
                        img: servicestartup,
                        desc: " "
                    },
                ]
            },
        ]
    },

}