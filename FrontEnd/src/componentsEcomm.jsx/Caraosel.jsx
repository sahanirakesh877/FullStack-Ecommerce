import React from "react";
import { Carousel } from "@material-tailwind/react";
const Caraosel = () => {
  return (
    <>
    
      <Carousel style={{ 'height': "83vh", 'marginBottom':'20px'}}>
      <img
src="https://cdn.dribbble.com/userupload/9083969/file/original-fd541196d1809aa125fbd2e5d2ac9dcd.png?resize=1024x341"          className="h-full w-full object-cove object-center"
        />
        <img
src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"          className="h-full w-full object-cover object-center "
        />

 

        <img
src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"          alt="img 3"
          className="h-full w-full object-cover object-center"
        />
      </Carousel>
    </>
  );
};

export default Caraosel;
