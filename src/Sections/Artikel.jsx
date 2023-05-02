import React from "react";
import { articles } from "../utils/dummyData";
import { whatsnew4 } from "../../images";

const Artikel = () => {
  return (
    <section id="artikel" className="w-full mx-auto py-4 px-2 sm:px-6 lg:px-8">
      <div className="lg:text-center">
        <h2 className="text-3xl font-semibold text-blue-600">What's New</h2>
      </div>

      <div className="mt-10 flex flex-col md:flex-row">
        <div className="md:w-2/3 lg:w-3/5 pr-8">
          {articles.map((article) => (
            <div key={article.id} className="flex flex-col mb-8 md:flex-row">
              <div className="md:w-1/3 md:pr-4">
                <img className="object-cover w-full h-40 md:h-auto md:w-full" src={article.image} alt={article.title} />
              </div>
              <div className="md:w-2/3 pl-4">
                <h3 className="text-lg font-medium text-blue-600">{article.title}</h3>
                <p className="mt-4 text-gray-400">{article.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full md:w-1/3 lg:w-2/5">
          <h1 className="text-gray-200 mb-4">HEADLINE</h1>
          <div className="flex items-center justify-center h-64 md:h-auto">
            <img src={whatsnew4} alt="Headline" className="object-cover h-23 w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Artikel;