import { getTeamList } from "@/libs/getTeamList";
import Image from "next/image";
import React from "react";

const TeamList = async () => {

  const members = await getTeamList();


  return (
    <>
      <section>
        <div className="py-20 bg-gray-50 radius-for-skewed">
          <div className="container px-4 mx-auto">
            <div className="max-w-xl mx-auto mb-12 text-center">
              <span className="text-green-600 font-bold">
                Dolor sit amet consectutar
              </span>
              <h2 className="text-4xl lg:text-5xl font-bold font-heading">
                Check our awesome team members
              </h2>
            </div>
            <div className="flex flex-wrap">
              {
                members.map((person, index)=>(
                  <div className="mb-6 w-full md:w-1/2 lg:w-1/4 px-3" key={index}>
                    <div className="pb-8 bg-white rounded shadow text-center overflow-hidden">
                      <Image width={300} height={200} layout="responsive" className="mb-8 w-full h-64 object-cover"
                        src={person.image}
                        alt="Team member"
                      />
                      <h4 className="mb-2 text-2xl font-bold font-heading">{person.name}</h4>
                      <p className="text-gray-500 p-5">{person.bio}</p>
                    </div>
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

export default TeamList;
