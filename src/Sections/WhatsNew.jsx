import React from "react";
import { Article, Headline } from "../components";

const WhatsNew = () => {
  return (
    <section id="whatsnew" className="w-full flex flex-col mx-auto justify-center items-center gap-5 ">
      <div className="lg:text-center">
        <h2 className="text-4xl font-semibold text-green-300 text-center">What's New</h2>
      </div>
      <div className="flex flex-col w-full gap-5">
        <Headline title="Headline" />
        <div className="py-4 px-2 sm:px-6 lg:px-8">
          <Article />
        </div>
      </div>
    </section>
  );
};

export default WhatsNew;