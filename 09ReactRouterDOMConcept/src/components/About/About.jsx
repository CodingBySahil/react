import React from "react";

const About = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              React development is carried out by passionate developers
            </h2>
            <p className="mt-6 text-gray-600">
              I'm Muhammad Sahil, a dedicated web developer skilled in HTML,
              CSS, JavaScript, and React. My portfolio includes diverse projects
              like a Facebook clone, digital clocks, and a YouTube replica,
              highlighting my creativity and technical proficiency in building
              compelling web applications. I prioritize staying updated with the
              latest web development trends to deliver cutting-edge solutions.
            </p>
            <p className="mt-4 text-gray-600">
              Mastering React Router DOM, I focused on defining client-side
              routes efficiently using createBrowserRouter. This hands-on
              experience deepened my understanding of nested routing
              configurations and streamlined navigation between components like
              Home, About, and Contact.
            </p>
            <p className="mt-4 text-gray-600">
              Optimizing performance with ReactDOM.createRoot and integrating
              RouterProvider underscored my commitment to React's best practices
              in rendering and state management. This project not only honed my
              technical skills but also enhanced my ability to create
              user-friendly interfaces that prioritize responsiveness and
              intuitive navigation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
