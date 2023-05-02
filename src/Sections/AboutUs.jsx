import React from "react";
import { whatsnew5 } from "../../images";
import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";


const AboutUsCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl">
      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <p className="mt-1 text-white text-sm md:w-9/12">
          {subtitle}
        </p>
      </div>
    </div>
  );


const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
        <div className="md:w-1/2 mb-6 md:mb-0">
          <img src={whatsnew5} alt="About Us" className="object-cover rounded-lg shadow-md" />
        </div>
        <div className="flex-1 flex flex-col justify-start">
        <AboutUsCard
          color="bg-[#2952E3]"
          title="Security gurantee"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
          subtitle="We have been established since 2016 as an IT company that is ready to provide our best innovation to advance your business."
        />
        <AboutUsCard
          color="bg-[#8945F8]"
          title="Best exchange rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
          subtitle="Our experience is a form of our best achievement in providing solutions."
        />
        <AboutUsCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="We`ve Done with more than 60 Client,"
        />
        <AboutUsCard
          color="bg-[#F84550]"
          title="Fastest transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
          subtitle="and we made a long relationship partnership with more than 5 Company in Indonesia."
        />
        <div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default AboutUs;