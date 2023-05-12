import React, { useState } from 'react';
import { Footer, Navbar, Tabs } from '../../components';
import { AboutUs, Bali, CategoryList, FeaturedProduct, GetInTouch, Services, TrustedBySection, Welcome, WhatsNew } from '../../Sections';

const Home = () => {
    const [isHomePage, setIsHomePage] = useState(true);

    return (
        <div className="min-h-screen w-full">
            <div className="gradient-bg-welcome">
                <Navbar />
                <Welcome />
            </div>
            <div className="gradient-bg-transactions">
                <Services />
                <Tabs />
            </div>
            <div className="gradient-bg-footer">
            </div>
            <TrustedBySection />
            <div className="bg-getintouch">
                <CategoryList />
                <GetInTouch />
            </div>
            <div className="gradient-bg-product">
                <FeaturedProduct />
                <WhatsNew />
            </div>
            <div className="gradient-bg-contactus">
                <AboutUs />
                <Bali />
            </div>
            <div className="gradient-bg-footer">
                <Footer isHomePage={isHomePage} />
            </div>
        </div>
    );
}

export default Home;