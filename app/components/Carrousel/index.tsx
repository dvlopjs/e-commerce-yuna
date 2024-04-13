"use client";
import Image from "next/image";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import alfajorCookie from "../../assets/images/alfajor_cookie.jpg";
import alfajorCordobes from "../../assets/images/alfajor_cordobes.jpg";
import { images } from "./ItemsImages";

const CustomCarousel: React.FC = () => {
  return (
    <Carousel>
      {images.map((item: any, index: number) => (
        <div key={index}>
          <Image src={item.imageUrl} alt={"asd"} />
          <div>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default CustomCarousel;
