import React from "react";

function Subscribe() {
  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="max-w-xl mx-auto text-center">
              <a
                className="mb-6 inline-block text-3xl font-bold leading-none"
                href="#"
              >
                <img
                  className="h-12"
                  src="atis-assets/logo/atis/atis-mono-sign.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <h2 className="mb-2 text-4xl lg:text-5xl font-bold font-heading">
                So much more than a business analytics tool
              </h2>
              <p className="mb-8 text-gray-400 leading-loose">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque efficitur nisl sodales egestas lobortis.
              </p>
              <form className="mx-auto" action="">
                <div className="max-w-md mx-auto flex flex-wrap items-center">
                  <input
                    className="flex-grow py-3 px-4 mr-4 text-xs rounded leading-loose focus:outline-0"
                    type="email"
                    placeholder="example@shuffle.dev"
                  />
                  <button className="w-auto py-2 px-6 rounded-t-xl rounded-l-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200">
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
