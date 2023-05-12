import React from "react";

const GetInTouch = () => {
  return (
    <section
      className="bg-cover bg-center p-14 backdrop-blur-sm "
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 p-10">
        <div className="md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-blue-500 sm:text-3xl sm:truncate">
              Have any idea?
            </h2>
            <p className="mt-1 text-green-300 text-lg">
              Share your thoughts with us!
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <a
              href="#"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Our Profile
            </a>
          </div>
        </div>
        <div className="mt-8 md:flex md:items-center md:justify-between">
          <div className="flex-1 min-w-0">
            <h2 className="text-2xl font-bold leading-7 text-blue-500 sm:text-3xl sm:truncate">
              Get in Touch with Us
            </h2>
            <p className="mt-1 text-green-300 text-lg">
              Let us know how we can help you.
            </p>
          </div>
          <div className="mt-4 flex md:mt-0 md:ml-4">
            <a
              href="#"
              className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;