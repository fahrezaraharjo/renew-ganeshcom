export const trustedCompanies = [
    { image: '../../../images/trustedby-230317.193521.png' },
    { image: '../../../images/trustedby-230317.200105.png' },
    { image: '../../../images/trustedby-230317.200608.png' },
    { image: '../../../images/trustedby-230317.200759.png' },
    { image: '../../../images/trustedby-230317.200825.png' },
    { image: '../../../images/trustedby-230317.200759.png' },
    { image: '../../../images/trustedby-230317.200914.png' },
    { image: '../../../images/trustedby-230317.201026.png' },
    { image: '../../../images/trustedby-230317.201046.png' },
    { image: '../../../images/trustedby-230317.201106.png' },
];

export const categories = [
    {
        id: 1,
        name: "Education",
        photos: [
            {
                id: 1,
                title: "Library",
                url: "../../images/solusion-230317.213659.jpeg",
            },
            {
                id: 2,
                title: "Classroom",
                url: "../../images/solusion-230317.213659.jpeg",
            },
            {
                id: 3,
                title: "Graduation",
                url: "../../images/solusion-230317.213659.jpeg",
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
        photo: '	https://ganeshcomstudio.com/uploads/images/service-230326.175925.png',
        paragraph: 'We develop responsive web-based applications on various platforms, with interactive design displays, powerful functionality, and dynamic software..',
    },
    {
        title: 'Mobile App',
        photo: '	https://ganeshcomstudio.com/uploads/images/service-230326.175935.png',
        paragraph: 'We design a mobile app system that supports various existing operating systems and is user friendly, where you can interact adaptively with anyone..',
    },
    {
        title: 'IT Masterplan',
        photo: 'https://ganeshcomstudio.com/uploads/images/service-230326.175944.png',
        paragraph: 'We develop an IT development plan that aligns with your business strategy. Realize your company`s digital transformation with the right planning.',
    },
    {
        title: 'Branding Website',
        photo: 'https://ganeshcomstudio.com/uploads/images/service-230326.175955.png',
        paragraph: 'We work with different types of clients. For us, your website is not only your digital presence but also a strong digital brand through a personalized website that visitors will love.',
    },
    {
        title: 'Startup Partnership',
        photo: 'https://ganeshcomstudio.com/uploads/images/service-230326.180003.png',
        paragraph: 'Partners with us. We fine tune each innovation program to enable corporate/startup collaboration and leapfrog competition by innovating faster.',
    },
];

