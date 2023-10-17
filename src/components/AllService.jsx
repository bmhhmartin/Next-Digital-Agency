import { getAllService } from "@/libs/getAllService";
import Image from "next/image";
import React from "react";


const AllService = async () => {

  const data = await getAllService();

  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            {
              data.map((service, index)=>(
              <div className="flex flex-wrap items-center -mx-4 mb-[100px]" key={index}>
                <div className="mb-12 lg:mb-0 w-full lg:w-1/2 flex px-4">
                  <div className="max-w-md">
                    <span className="text-green-600 font-bold">
                      Dolor sit amet consectutar
                    </span>
                    <h2 className="mb-6 text-4xl lg:text-5xl font-bold font-heading">
                      Build &amp; Launch without problems
                    </h2>
                    <div className="mb-6 max-w-sm">
                      <p className="text-gray-500 leading-loose">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Pellentesque efficitur nisl sodales egestas lobortis.
                      </p>
                    </div>
                    <div className="flex flex-wrap lg:-ml-5">
                      <button className="lg:w-auto py-2 px-6 leading-loose lg:ml-5 text-gray-50 font-bold bg-green-600 hover:bg-green-700 transition duration-200 rounded-l-xl rounded-t-xl">
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full lg:w-1/2">
                  <div className="mb-4 flex flex-wrap items-end">
                    <div className="mb-4 lg:mb-0 w-full lg:w-2/3 px-3">
                      <Image width={300} height={200} layout="responsive"
                        className="w-full h-32 lg:h-48 object-cover rounded"
                        src={service.image1}
                        alt={service.title}
                      />
                    </div>
                    <div className="w-full lg:w-1/3 px-3">
                      <Image width={300} height={200} layout="responsive"
                        className="w-full h-32 object-cover rounded"
                        src={service.image2}
                        alt={service.title}
                      />
                    </div>
                  </div>
                  <div className="flex flex-wrap items-start">
                    <div className="mb-4 lg:mb-0 w-full lg:w-1/3 px-3">
                    <Image width={300} height={200} layout="responsive"
                        className="w-full h-32 object-cover rounded"
                        src={service.image3}
                        alt={service.title}
                      />
                    </div>
                    <div className="w-full lg:w-2/3 px-3">
                    <Image width={300} height={200} layout="responsive"
                        className="w-full h-32 lg:h-48 object-cover rounded"
                        src={service.image4}
                        alt={service.title}
                      />
                    </div>
                  </div>
                </div>
              </div>
              ))
              
            }
          </div>
        </div>
      </section>
    </>
  );
}
export default AllService;
