import { getWorkList } from "@/libs/getWorkList";
import React from "react";

const WorkList = async () => {

  const work = await getWorkList();

  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-16 max-w-md mx-auto text-center">
              <span className="text-green-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 className="text-4xl md:text-5xl font-bold">
                Build &amp; Launch without problems
              </h2>
            </div>
            <div className="flex flex-wrap -mx-4">
              {
                work.map((list, index)=>(
                  <div className="mb-12 lg:mb-0 w-full md:w-1/2 lg:w-1/3 px-4 text-center" key={index}>
                    <span className="mb-4 md:mb-6 inline-block bg-green-100 p-3 text-green-500 rounded">
                      <svg
                        className="w-8 h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                      </svg>
                    </span>
                    <h4 className="mb-4 text-2xl font-bold font-heading">
                      {list.title.slice(0, 25)}
                    </h4>
                    <p className="text-gray-500 leading-loose">
                      {list.des}
                    </p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkList;
