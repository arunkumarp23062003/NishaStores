import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import Nonveg from './BodyCarousel/Images/Nonveg';
import Navbar from '../Navbar/Navbar';
import Ayurveda from './BodyCarousel/Images/Ayurveda';
import BuyMore from './BodyCarousel/Images/BuyMore';
import DealsOfTheWeek from './BodyCarousel/Images/DealsOfTheWeek';
import Combo from './BodyCarousel/Images/Combo';
import FreshVegetable from './BodyCarousel/Images/FreshVegetable';
import SnackStores from './BodyCarousel/Images/SnackStores';
import Footer from '../Footer';
import CleaningAndHousehold from './BodyCarousel/Images/CleaningAndHousehold';
import HomeAndKitchen from './BodyCarousel/Images/HomeAndKitchen';

const PosterDescription = () => {

  const navigate = useNavigate();
  const handleOnClick = ({ item }) => {
    navigate(`/item/${item.Title}`, { state: item })
  }

  const location = useLocation();
  const state = location.state;
  const type = state.type;
  //console.log(state);
  return (
    <div>
      <Navbar />
      <div className='pt-20 md:pt-28'>
        <div className='bg-green-700 shadow-xl rounded-b-2xl text-green-100'>
          <div className='space-y-5 px-5 py-6'>
            <div className='p-5 sm:w-3/5 sm:mx-auto rounded-xl'>
              <img src={state.ImageUrl} className='w-full h-60 lg:h-96 rounded-xl shadow-xl' />
            </div>
            <div className='space-y-5 sm:px-10 md:px-28 lg:px-40'>
              <h1 className='font-bold font-serif text-xl text-white'>{state.Title}</h1>
              <h1 className='font-mono'>{state.Description}</h1>
              <div className='flex justify-between text-xl'>
                <p><span className='font-mono'>Quantity:</span> {state.TotalPiece}</p>
                <p><span className='font-mono'>Price: </span>₹{state.Price}</p>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:w-3/4 lg:mx-auto px-2 sm:px-5 py-5 font-serif'>
          <h1 className='capitalize'>Items related to the Above One</h1>
          {type === "Nonveg" &&
            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-10 py-5'>
              {Nonveg.map((item, index) => (
                <div className=''>
                  <img key={index} src={item.ImageUrl} className='w-full h-full rounded-xl cursor-pointer cursor-pointer' onClick={() => handleOnClick({ item })} />
                </div>
              ))}
            </div>
          }
          {type === "Ayurveda" &&
            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-1 sm:gap-5 lg:gap-10  py-5'>
              {Ayurveda.map((item, index) => (
                <div className=''>
                  <img key={index} src={item.ImageUrl} className='w-full h-full rounded-xl cursor-pointer cursor-pointer' onClick={() => handleOnClick({ item })} />
                </div>
              ))}
            </div>
          }
          {type === "BuyMore" &&
            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-1 sm:gap-5 lg:gap-10  py-5'>
              {BuyMore.map((item, index) => (
                <div className=''>
                  <img key={index} src={item.ImageUrl} className='w-full h-full rounded-xl cursor-pointer cursor-pointer' onClick={() => handleOnClick({ item })} />
                </div>
              ))}
            </div>
          }
          {type === "DealsOfTheWeek" &&
            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-1 sm:gap-5 lg:gap-10  py-5'>
              {DealsOfTheWeek.map((item, index) => (
                <div className=''>
                  <img key={index} src={item.ImageUrl} className='w-full h-full rounded-xl cursor-pointer cursor-pointer' onClick={() => handleOnClick({ item })} />
                </div>
              ))}
            </div>
          }
          {type === "Combo Here" &&
            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-1 sm:gap-5 lg:gap-10  py-5'>
              {Combo.map((item, index) => (
                <div className=''>
                  <img key={index} src={item.ImageUrl} className='w-full h-full rounded-xl cursor-pointer cursor-pointer' onClick={() => handleOnClick({ item })} />
                </div>
              ))}
            </div>
          }
          {type === "Fresh Vegetable" &&
            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-1 sm:gap-5 lg:gap-10  py-5'>
              {FreshVegetable.map((item, index) => (
                <div className=''>
                  <img key={index} src={item.ImageUrl} className='w-full h-full rounded-xl cursor-pointer cursor-pointer' onClick={() => handleOnClick({ item })} />
                </div>
              ))}
            </div>
          }
          {type === "SnackStores" &&
            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-1 sm:gap-5 lg:gap-10  py-5'>
              {SnackStores.map((item, index) => (
                <div className=''>
                  <img key={index} src={item.ImageUrl} className='w-full h-full rounded-xl cursor-pointer cursor-pointer' onClick={() => handleOnClick({ item })} />
                </div>
              ))}
            </div>
          }
          {type === "CleaningAndHousehold" &&
            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-1 sm:gap-5 lg:gap-10  py-5'>
              {CleaningAndHousehold.map((item, index) => (
                <div className=''>
                  <img key={index} src={item.ImageUrl} className='w-full h-full rounded-xl cursor-pointer cursor-pointer' onClick={() => handleOnClick({ item })} />
                </div>
              ))}
            </div>
          }
          {type === "HomeAndKitchen" &&
            <div className='grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-4 gap-1 sm:gap-5 lg:gap-10  py-5'>
              {HomeAndKitchen.map((item, index) => (
                <div className=''>
                  <img key={index} src={item.ImageUrl} className='w-full h-full rounded-xl cursor-pointer cursor-pointer' onClick={() => handleOnClick({ item })} />
                </div>
              ))}
            </div>
          }
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default PosterDescription;