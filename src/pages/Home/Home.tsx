import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";

const HomePage: React.FC<{}> = () => {
  return (
    <div>
        <div>Home Page</div>;
        <HeroImage imageSrc="https://embed-fastly.wistia.com/deliveries/569d582f73005f3dc2604b04f83e4a80.webp?image_crop_resized=1280x720" headerText="Header Text" buttonText="Button"></HeroImage>
    </div>
  )
}

export default HomePage;
