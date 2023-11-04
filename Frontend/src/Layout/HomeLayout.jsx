import React from 'react'
import Navbar from '../Pages/Navbar/Navbar'
import SimpleSlider from '../Pages/HomePage/HeaderCarousel'
import MainCarousel from '../Pages/HomePage/MainCarousel'
import BodyMainCarousel from '../Pages/HomePage/BodyCarousel/BodyMainCarousel';
import Nonveg from '../Pages/HomePage/BodyCarousel/Images/Nonveg';
import Ayurveda from '../Pages/HomePage/BodyCarousel/Images/Ayurveda';
import BuyMore from '../Pages/HomePage/BodyCarousel/Images/BuyMore';
import DealsOfTheWeek from '../Pages/HomePage/BodyCarousel/Images/DealsOfTheWeek';
import Footer from '../Pages/Footer';
import Combo from '../Pages/HomePage/BodyCarousel/Images/Combo';
import FreshVegetable from '../Pages/HomePage/BodyCarousel/Images/FreshVegetable';
import SnackStores from '../Pages/HomePage/BodyCarousel/Images/SnackStores';
import CleaningAndHousehold from '../Pages/HomePage/BodyCarousel/Images/CleaningAndHousehold';
import HomeAndKitchen from '../Pages/HomePage/BodyCarousel/Images/HomeAndKitchen';

const HomeLayout = () => {
  return (
    <div>
        <Navbar />
        <SimpleSlider />
        <MainCarousel />
        <BodyMainCarousel heading="nonveg" Title={Nonveg}/>
        <BodyMainCarousel heading="Ayurveda" Title={Ayurveda}/>
        <BodyMainCarousel heading="BuyMore SaveMore" Title={BuyMore}/>
        <BodyMainCarousel heading="Deals of the week" Title={DealsOfTheWeek}/>
        <BodyMainCarousel heading="Combo" Title={Combo}/>
        <BodyMainCarousel heading="Fresh Vegetable" Title={FreshVegetable}/>
        <BodyMainCarousel heading="Snacks and Stores" Title={SnackStores}/>
        <BodyMainCarousel heading="Cleaning And Household" Title={CleaningAndHousehold} />
        <BodyMainCarousel heading="Home And Kitchen" Title={HomeAndKitchen} />
        <Footer />
    </div>
  )
}

export default HomeLayout