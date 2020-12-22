import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import covidVacImage from '../../assets/images/covid_vac_img.png'
const HomePage: React.FC<{}> = () => {
  return (
    <div>
        <h2>Home Page</h2>;
        <HeroImage 
          imageSrc={covidVacImage} 
          headerText="Covid-19 Vaccine Information" 
          buttonText="Learn More" 
        />
    </div>
  )
}

export default HomePage;
