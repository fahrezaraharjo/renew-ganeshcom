/* eslint-disable react/self-closing-comp */
/* eslint-disable react/jsx-indent */
/* eslint-disable indent */
/* eslint-disable quotes */
import React, { useState } from "react";
import { Footer, Navbar, Tabs } from "../../components";
import {
  AboutUs,
  Bali,
  CategoryList,
  FeaturedProduct,
  GetInTouch,
  Services,
  TrustedBySection,
  Welcome,
  WhatsNew,
} from "../../Sections";

const Home = () => {
  // eslint-disable-next-line no-unused-vars
  const [isHomePage, setIsHomePage] = useState(true);

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <div className="gradient-bg-transactions">
        <Services />
        <Tabs />
      </div>
      <div className="gradient-bg-footer"></div>
      <TrustedBySection />
      <div className="bg-getintouch">
        <div className="blur-outer">
          <CategoryList />
          <GetInTouch />
        </div>
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
};

export default Home;
