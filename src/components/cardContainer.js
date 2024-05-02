import React from 'react'
import { useSelector } from 'react-redux';
import Card from './card';
const CardContainer = () => {
  const cardsArray = useSelector(state => state?.data?.cardsArray);

  return (
    <div className='flex flex-wrap justify-evenly items-center my-8 px-4'>
      {cardsArray?.map((card)=>{
        return <Card data={card}/>
      })}
    </div>
  )
}

export default CardContainer