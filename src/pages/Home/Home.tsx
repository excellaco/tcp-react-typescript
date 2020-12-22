import React from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import covidVacImage from '../../assets/images/covid_vac_img.png'
import healthCareImage from '../../assets/images/healthcare.png'
import educationImage from '../../assets/images/education.png'
import disabiltyImage from '../../assets/images/disability.png'
import recordsImage from '../../assets/images/records.png'
import housingImage from '../../assets/images/housing.png'
import CategoryCard from "../../components/CategoryCard/CategoryCard";
import * as styles from './home.module.scss' ;
const HomePage: React.FC<{}> = () => {
  return (
    <div>
        <h2>Home Page</h2>;
        <HeroImage 
          imageSrc={covidVacImage} 
          headerText="Covid-19 Vaccine Information" 
          buttonText="Learn More" 
        />
        <div className={styles.categoriesContainer}>
          <CategoryCard image={healthCareImage} category="Health Care" />
          <CategoryCard image={educationImage} category="Education" />
          <CategoryCard image={disabiltyImage} category="Disability" />
          <CategoryCard image={recordsImage} category="Records" />
          <CategoryCard image={housingImage} category="Housing" />
        </div>
    </div>
  )
}

export default HomePage;
