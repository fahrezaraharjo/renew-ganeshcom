import {
    akuntaid, dimedika, keacaracom, mytimesheet, pems, ximo, sion,
    trustedby1, trustedby2, trustedby3, trustedby4, trustedby5, trustedby6, trustedby7, trustedby8, trustedby9, trustedby10,
    solution1, solution2, solution3,
    whatsnew1, whatsnew2, whatsnew3, headerimgabout, headerimgwork, headerimgsolution, cardplaceholder, homeslider1, homeslider2, homeslider3, service1, service2, service3, service4, service5, RestaurantWebsite, lesonline1, lesonline3, lesonline4, lesonline2, restaurant1, restaurant2, restaurant3, restaurant4

} from "../../images";

export const aboutUs = [
    {
        text1: "We have been established since 2016 as an IT company that is ready to provide our best innovation to advance your business.",
        text2: "Our experience is a form of our best achievement in providing solutions.",
        text3: "We`ve Done with more than 60 Client,",
        text4: "and we made a long relationship partnership with more than 5 Company in Indonesia."
    }
]

export const categoriesSolutions = [
    { label: 'All Category', value: 'all' },
    { label: 'Education', value: 'education' },
    { label: 'Oil & Gas Company', value: 'oilGas' },
    { label: 'Industry', value: 'industry' },
    { label: 'Store & Supply', value: 'storeSupply' },
    { label: 'Property & Contract Management', value: 'propertyContract' },
];

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

export const carouselImages = [
    { id: 1, src: homeslider3 },
    { id: 2, src: homeslider2 },
    { id: 3, src: homeslider1 },
];

export const serviceHome = {
    topItems:
    {
        text1: "GANESHCOM STUDIO",
        text2: "We are an Information Technology Company that provides IT services and solutions for website design, web application development, mobile application development, and various innovative product developments. We realize the progression into the digital age has been inevitable, for businesses to survive and thrive in this era, an understanding of these innovations is key. With a mission to enhance our customers' business growth, we provide IT services and solutions with creative design and development, as well as provide high-quality solutions.",
    }
}

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

export const workDatas = {
    softwareDevelopment: {
        items: [
            {
                id: "1",
                name: "Online Tutoring in PT Les Online",
                img: cardplaceholder,
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
                        desc: "private lessons"
                    },
                    {
                        id: "3",
                        name: "Select Schedule",
                        img: lesonline3,
                        desc: "private lessons"
                    },
                    {
                        id: "4",
                        name: "Find Teacher",
                        img: lesonline4,
                        desc: "private lessons"
                    },

                ]
            },
            {
                id: "2",
                name: "Smart POS in Rayas Store",
                img: cardplaceholder,
                desc: "A good system in your business will give maximum contribution in developing your business in the future. Let's start digitizing. Access our store anywhere anytime. Safe and in control",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Kategori produk",
                        img: headerimgabout,
                        desc: "kategori produk"
                    },
                    {
                        id: "2",
                        name: "Kartu Stok",
                        img: headerimgabout,
                        desc: "Kartu Stok"
                    },
                    {
                        id: "3",
                        name: "Laporan Transaksi",
                        img: headerimgabout,
                        desc: "Laporan Transaksi"
                    },
                    {
                        id: "4",
                        name: "History Penjualan",
                        img: headerimgabout,
                        desc: "History Penjualan"
                    },
                    {
                        id: "5",
                        name: "Dashboard",
                        img: headerimgabout,
                        desc: "Dashboard"
                    },
                    {
                        id: "6",
                        name: "Arus Kas",
                        img: headerimgabout,
                        desc: "Arus Kas"
                    },
                    {
                        id: "7",
                        name: "Data stok",
                        img: headerimgabout,
                        desc: "Data stok"
                    },
                    {
                        id: "8",
                        name: "Tambah Produk",
                        img: headerimgabout,
                        desc: "Tambah Produk"
                    },
                    {
                        id: "9",
                        name: "Update Stok(opname)",
                        img: headerimgabout,
                        desc: "Update Stok(opname)"
                    },
                    {
                        id: "10",
                        name: "Pencarian Produk",
                        img: headerimgabout,
                        desc: "Pencarian Produk"
                    },
                    {
                        id: "11",
                        name: "Atur Harga dan Diskon",
                        img: headerimgabout,
                        desc: "Atur Harga dan Diskon"
                    },
                    {
                        id: "12",
                        name: "Penjualan",
                        img: headerimgabout,
                        desc: "Penjualan"
                    },
                    {
                        id: "13",
                        name: "Cash In/Cash Out",
                        img: headerimgabout,
                        desc: "Cash In/Cash Out"
                    },
                    {
                        id: "14",
                        name: "Laporan Harian",
                        img: headerimgabout,
                        desc: "Laporan Harian"
                    },
                    {
                        id: "15",
                        name: "History Penjualan",
                        img: headerimgabout,
                        desc: ""
                    },
                    {
                        id: "16",
                        name: "Kasir",
                        img: headerimgabout,
                        desc: "Kasir"
                    },

                ]
            },
            {
                id: "3",
                name: "Magnus Indonesia in Azria",
                img: cardplaceholder,
                desc: "Developing an application to face the UTBK SBMPTN. The questions are presented in accordance with the Try Out and UTBK grids from LTMPT for Azria",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Work Featured 1",
                        img: "",
                        desc: "lorem ipsum dolor amet"
                    },
                    {
                        id: "2",
                        name: "Work Featured 2",
                        img: headerimgabout,
                        desc: "lorem ipsum dolor amet"
                    },
                    {
                        id: "3",
                        name: "Work Featured 3",
                        img: headerimgabout,
                        desc: "lorem ipsum dolor amet"
                    },
                    {
                        id: "4",
                        name: "Work Featured 4",
                        img: headerimgabout,
                        desc: "lorem ipsum dolor amet"
                    }
                ]
            },
            {
                id: "4",
                name: "Property Management System (PEMS) in PT Undagi Bali Sadana",
                img: cardplaceholder,
                desc: "Developing software for operating hotel accommodation and commercial housing rental properties for PT Undagi Bali Sadana which is a land and building property provider",
                desc2: "PT Undagi Bali Sadana is a company that develops and builds a piece of land or land into a property product along with all the complete facilities and infrastructure inside into a single unit.To assist its business operations, PT Undagi Bali Sadana uses a Property Management System (PEMS). This application aims to facilitate property management and marketing.",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Master Data",
                        img: headerimgabout,
                        desc: "Master Data"
                    },
                    {
                        id: "2",
                        name: "Project Management",
                        img: headerimgabout,
                        desc: "Project Management"
                    },
                    {
                        id: "3",
                        name: "Logistic",
                        img: headerimgabout,
                        desc: "Logistic"
                    },
                    {
                        id: "4",
                        name: "Selling",
                        img: headerimgabout,
                        desc: "Selling"
                    },
                    {
                        id: "5",
                        name: "Oprational",
                        img: headerimgabout,
                        desc: "Oprational"
                    },
                    {
                        id: "6",
                        name: "Project Cart",
                        img: headerimgabout,
                        desc: "Project Cart"
                    },
                    {
                        id: "7",
                        name: "AR/AP",
                        img: headerimgabout,
                        desc: "AR/AP"
                    },
                    {
                        id: "8",
                        name: "Acounting",
                        img: headerimgabout,
                        desc: "Acounting"
                    },
                    {
                        id: "9",
                        name: "Report",
                        img: headerimgabout,
                        desc: "Report"
                    },
                    {
                        id: "10",
                        name: "Dashboard",
                        img: headerimgabout,
                        desc: "Dashboard"
                    }
                ]
            },
            {
                id: "5",
                name: "Online Industrial Relations System at the Department of Labor and Industry",
                img: cardplaceholder,
                desc: "Developing system to provide a harmonious relationship between employer and employees, ensuring continuous productivity at the Department of Labor and Industry",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Create mail",
                        img: headerimgabout,
                        desc: "Create mail"
                    },
                    {
                        id: "2",
                        name: "Mail Verification / Approval",
                        img: headerimgabout,
                        desc: "Mail Verification / Approval"
                    },
                    {
                        id: "3",
                        name: "Administrator Mail Protal",
                        img: headerimgabout,
                        desc: "Administrator Mail Protal"
                    },
                    {
                        id: "4",
                        name: "Print/Export Mail",
                        img: headerimgabout,
                        desc: "Print/Export Mail"
                    },
                    {
                        id: "5",
                        name: "Attachment Upload/Download",
                        img: headerimgabout,
                        desc: "Attachment Upload/Download"
                    },
                    {
                        id: "6",
                        name: "Recap & Report",
                        img: headerimgabout,
                        desc: "Recap & Report"
                    },
                    {
                        id: "7",
                        name: "User Management",
                        img: headerimgabout,
                        desc: "User Management"
                    },
                    {
                        id: "8",
                        name: "Mail Setting",
                        img: headerimgabout,
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
                img: cardplaceholder,
                desc: "Developing a system for monitoring or tracking important assets and tracking the progress of asset maintenance requests easily",
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
                id: "16",
                name: "E-Library in Widya Pasraman Sila Kertha Raharja School",
                img: cardplaceholder,
                desc: "Developing an application for storing, accessing, and managing magazine articles, books, and even study materials in Widya Pasraman Sila Kertha Raharja School",
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
    mobileApp: {
        items: [
            {
                id: "17",
                name: "Timesheet in PT Dago Engineering",
                img: cardplaceholder,
                desc: "Development of applications that assist users in recording daily work, projects and monitoring work reports for PT Dago Engineering.",
                desc2: "Timesheet Dago Eng Application will helps users in recording daily work, projects and monitoring work reports for PT Dago Engineering. Timesheet Dago Eng provides you employee attendance application system that can be use everywhere with a simple taps on mobile device. HR can monitor mobile employee more effective and the feature is usefull for evaluating employee’s performance. PT Dago Engineering has proven that using Mytimesheet can make it easier for them to be absent in their company activities.Timesheet Dago Eng was developed to automatically this manual process. This web application has these following features:",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Presence",
                        img: headerimgabout,
                        desc: "Presence"
                    },
                    {
                        id: "2",
                        name: "Work List",
                        img: headerimgabout,
                        desc: "Work List"
                    },
                    {
                        id: "3",
                        name: "SPD",
                        img: headerimgabout,
                        desc: "SPD"
                    },
                    {
                        id: "4",
                        name: "Absence History",
                        img: headerimgabout,
                        desc: "Absence History"
                    },
                    {
                        id: "5",
                        name: "Work Summary",
                        img: headerimgabout,
                        desc: "Work Summary"
                    },
                    {
                        id: "6",
                        name: "Work Calender",
                        img: headerimgabout,
                        desc: "Work Calender"
                    },
                ]
            },
            {
                id: "18",
                name: "Restaurant Reservation Application in Bebek Bengil",
                img: cardplaceholder,
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
                img: cardplaceholder,
                desc: "Developing software for support work productivity that is integrated with other systems in PT Trihasco Utama",
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
                id: "27",
                name: "Document Management System (DMS) in PT Trihasco Utama",
                img: cardplaceholder,
                desc: "Developing document management system to create, store, manage, and track electronic documents in PT Trihasco Utama            ",
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
                id: "28",
                name: "Timesheet in Trihasco Utama",
                img: cardplaceholder,
                desc: "Developing of applications that assist users in recording daily work, projects and monitoring work reports for PT Trihasco Utama",
                desc2: "Timesheet Trihasco Utama Application will helps users in recording daily work, projects and monitoring work reports for PT Trihasco Utama. Timesheet Trihasco Utama provides you employee attendance application system that can be use everywhere with a simple taps on mobile device. HR can monitor mobile employee more effective and the feature is usefull for evaluating employee’s performance. PT Trihasco Utama has proven that using Mytimesheet can make it easier for them to be absent in their company activities.Timesheet Trihasco Utama was developed to automatically this manual process. This web application has these following features:",
                systemFeatures: [
                    {
                        id: "1",
                        name: "Presence",
                        img: headerimgabout,
                        desc: "Presence"
                    },
                    {
                        id: "2",
                        name: "Work List",
                        img: headerimgabout,
                        desc: "Work List"
                    },
                    {
                        id: "3",
                        name: "Meeting",
                        img: headerimgabout,
                        desc: "Meeting"
                    },
                    {
                        id: "4",
                        name: "CheckIn",
                        img: headerimgabout,
                        desc: "CheckIn"
                    },
                    {
                        id: "5",
                        name: "Absence History",
                        img: headerimgabout,
                        desc: "Absence History"
                    },
                    {
                        id: "6",
                        name: "Work Callender",
                        img: headerimgabout,
                        desc: "Work Callender"
                    },
                    {
                        id: "7",
                        name: "Export & Import Project Task",
                        img: headerimgabout,
                        desc: "Export & Import Project Task"
                    },
                    {
                        id: "8",
                        name: "Work Summary",
                        img: headerimgabout,
                        desc: "Work Summary"
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
                img: cardplaceholder,
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
                img: cardplaceholder,
                desc: "Developing a website to offer products and services and find information such as location, hours of operation and contact info easily for CV Vidjitha Group  ",
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
};

export const footerData = {
    mainMenu: [
        { id: 1, title: "About" },
        { id: 2, title: "Testimonial" },
        { id: 3, title: "Services" },
        { id: 4, title: "Achievement" },
        { id: 5, title: "Sitemap" }
    ],
    otherMenu: [
        { id: 1, title: "Blog" },
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
            icon: "fab fa-facebook"
        },
        {
            id: 2,
            title: "Instagram",
            icon: "fab fa-instagram"
        },
        {
            id: 3,
            title: "Linkedin",
            icon: "fab fa-linkedin"
        },
        {
            id: 4,
            title: "Youtube",
            icon: "fab fa-youtube"
        }
    ]
};

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

export const categories = [
    {
        id: 1,
        name: "Education",
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
                url: "https://images.unsplash.com/photo-1570597441527-f08cbbf0f0a9?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
                id: 2,
                title: "Refinery",
                url: "https://images.unsplash.com/photo-1553817343-2e1449a38d5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
                id: 3,
                title: "Gas Pump",
                url: "https://images.unsplash.com/photo-1580914734542-3f3b10ed2e7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
                url: "https://images.unsplash.com/photo-1576233450697-8ee0a91674ca?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
                id: 2,
                title: "Construction Site",
                url: "https://images.unsplash.com/photo-1542366676-0c8e69271e0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
                id: 3,
                title: "Welding",
                url: "https://images.unsplash.com/photo-1593020429818-1e49f9ddc2b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
                url: ""
            },
            {
                id: 2,
                title: "Construction Site",
                url: "https://images.unsplash.com/photo-1542366676-0c8e69271e0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
                id: 3,
                title: "Welding",
                url: "https://images.unsplash.com/photo-1593020429818-1e49f9ddc2b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
                url: ""
            },
            {
                id: 2,
                title: "Construction Site",
                url: "https://images.unsplash.com/photo-1542366676-0c8e69271e0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
                id: 3,
                title: "Welding",
                url: "https://images.unsplash.com/photo-1593020429818-1e49f9ddc2b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
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
                url: ""
            },
            {
                id: 2,
                title: "Construction Site",
                url: "https://images.unsplash.com/photo-1542366676-0c8e69271e0e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
            {
                id: 3,
                title: "Welding",
                url: "https://images.unsplash.com/photo-1593020429818-1e49f9ddc2b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
            },
        ],
    },
]

export const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
};

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

export const solutionDatas = {
    education: {
        items: [
            {
                id: "1",
                name: "Online Tutoring in PT Les Online",
                img: cardplaceholder,
                desc: "Developing an application to find online tutoring service providers and private tutors for PT Les Online",
                desc2: "Developing an application to find online tutoring service providers and private tutors for PT Les Online",
            },
        ]
    },
    oilGas: {
        items: [
            {
                id: "2",
                name: "Timesheet in PT Dago Engineering",
                img: cardplaceholder,
                desc: "Development of applications that assist users in recording daily work, projects and monitoring work reports for PT Dago Engineering.",
                desc2: "Timesheet Dago Eng Application will helps users in recording daily work, projects and monitoring work reports for PT Dago Engineering. Timesheet Dago Eng provides you employee attendance application system that can be use everywhere with a simple taps on mobile device. HR can monitor mobile employee more effective and the feature is usefull for evaluating employee’s performance. PT Dago Engineering has proven that using Mytimesheet can make it easier for them to be absent in their company activities.Timesheet Dago Eng was developed to automatically this manual process. This web application has these following features:",
            },
        ],
    },
    industry: {
        items: [
            {
                id: "3",
                name: "IT Support in PT Trihasco Utama",
                img: cardplaceholder,
                desc: "Placing IT Support to monitors and maintains the company computer systems, installs, and configures hardware and software, and solves technical issues in PT Trihasco Utama",
                desc2: "Placing IT Support to monitors and maintains the company computer systems, installs, and configures hardware and software, and solves technical issues in PT Trihasco Utama",
            }
        ],
    },
    storeSupply: {
        items: [
            {
                id: "4",
                name: "Restaurant Website in Bebek Bengil",
                img: cardplaceholder,
                desc: "Developing website to find information like menus, location, hours of operation and contact info easily for Bebek Bengil",
                desc2: "A restaurant website is a business website whose purpose is to provide information on menus, services, locations and other services. It also provides directions to restaurants. It can also offer promotional discounts and special offers from restaurants.Your customers will get a clear picture of the experience the restaurant has to offer and the vibe guests can expect.",
            }
        ],
    },
    propertyConstractor: {
        items: [
            {
                id: "5",
                name: "Restaurant Website in Bebek Bengil",
                img: cardplaceholder,
                desc: "Developing website to find information like menus, location, hours of operation and contact info easily for Bebek Bengil",
                desc2: "A restaurant website is a business website whose purpose is to provide information on menus, services, locations and other services. It also provides directions to restaurants. It can also offer promotional discounts and special offers from restaurants.Your customers will get a clear picture of the experience the restaurant has to offer and the vibe guests can expect.",
            }
        ],
    },
    eGovermment: {
        items: [
            {
                id: "6",
                name: "Restaurant Website in Bebek Bengil",
                img: cardplaceholder,
                desc: "Developing website to find information like menus, location, hours of operation and contact info easily for Bebek Bengil",
                desc2: "A restaurant website is a business website whose purpose is to provide information on menus, services, locations and other services. It also provides directions to restaurants. It can also offer promotional discounts and special offers from restaurants.Your customers will get a clear picture of the experience the restaurant has to offer and the vibe guests can expect.",
            }
        ],
    },
};