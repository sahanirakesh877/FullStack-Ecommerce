import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillHeart } from "react-icons/ai";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import data from "../EcommData/EcomData";

const Sliders = () => {
  const settings = {
    dots: true,
    infinite: false,
    arrows: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container mx-auto">
        <p className="text-2xl  ms-8  mt-8 mb-3 font-bold  inline-block border-b-2 border-red-500 ">
          Our Featured Products
        </p>
      </div>
      <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
        <Slider {...settings} className="mb-8  bg-blue-gray-200  ">
          {data.map((a, i) => {
            return (
              <div key={i}>
                <Card className="my-4  w-80 border shadow  container mx-auto ">
                  <CardBody>
                    <div className="w-[250px] h-[150px] mb-2">
                      <img
                        src={a.img}
                        alt=""
                        className="w-full h-full  object-contain  "
                      />
                    </div>
                    <Typography variant="h5" color="blue-gray" className="mb-1">
                      {a.title}
                    </Typography>
                    <div className="flex justify-between items-center">
                      <Typography>{a.company}</Typography>
                      <Typography>{a.newPrice}</Typography>
                    </div>
                  </CardBody>
                  <CardFooter className="pt-0">
                    <div className="flex justify-between items-center">
                      <Button
                        variant="outlined"
                        size="sm"
                        className="flex items-center gap-2"
                      >
                        Add to Cart
                      </Button>

                      <AiFillHeart className="text-xl text-red-300" />
                    </div>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
};

export default Sliders;
