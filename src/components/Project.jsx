import { getAllProjects } from "@/libs/getAllProjects";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Project = async () => {

  const data = await getAllProjects();

  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container mx-auto px-4">
            <div className="mb-16 flex flex-wrap justify-center md:justify-between items-center">
              <div className="text-center lg:text-left">
                <span className="text-green-600 font-bold">
                  Dolor sit amet consectutar
                </span>
                <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                  All Projects
                </h2>
              </div>
              <a
                className="hidden md:inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
                href="#"
              >
                View More Projects
              </a>
            </div>
            <div className="flex flex-wrap -mx-4 mb-4">

              {
                data.map((project, index)=>(
                  <div className="mb-8 w-full md:w-1/2 lg:w-1/4 px-4 relative" key={index}>
                    {project.remark == "regular" ? <div><span className="text-white absolute top-5 left-10  px-3 py-1 bg-green-600" >{project.remark}</span></div> : <div><span className="text-white absolute top-5 left-10  px-3 py-1 bg-orange-600" >{project.remark}</span></div>} 
                    <div className="bg-white rounded">
                      <Image height={200} width={300} layout="responsive"
                        className="rounded-t object-cover h-128"
                        src={project.image}
                        alt={project.title}
                      />
                      <div className="p-6">
                        <h3 className="mb-4 text-2xl font-bold font-heading">{project.title}</h3>
                        <Link
                          className="flex text-green-600 hover:text-green-700 font-bold"
                          href={project.live}
                        >
                          <svg
                            className="mr-3 w-6 h-6"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>Live Link</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              }


            </div>
            <div className="text-center">
              <a
                className="md:hidden inline-block py-2 px-6 rounded-l-xl rounded-t-xl bg-green-600 hover:bg-green-700 text-gray-50 font-bold leading-loose transition duration-200"
                href="#"
              >
                View More Projects
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
