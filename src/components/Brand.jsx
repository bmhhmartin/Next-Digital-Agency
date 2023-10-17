import React from "react";
import Image from "next/image";
import { getBrandList } from "@/libs/getBrandList";

const Brand = async () => {

  const brand = await getBrandList();
  console.log("Brand " + brand);


  return (
    <>
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-2">
            
              {
                 brand.map((brand, index)=>(
                  <div className="mb-4 w-full md:w-1/2 lg:w-1/4 px-2"  key={index}>
                    <div className="py-16 bg-gray-50 rounded">
                        <a href="#" className="brandImage">
                          <Image className="mx-auto h-8" src={brand.image} height={100} width={300} style={{objectFit: "contain"}} alt={brand.name} />
                        </a>
                    </div>
                  </div>
                ))
              }
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Brand;
