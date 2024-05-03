import React from 'react'
import { useSelector } from 'react-redux';
import Card from './card';
const CardContainer = ({cardsArray}) => {
  let index=0
  // const cardsArray = useSelector(state => state?.data?.cardsArray);
  // const filteredJobs = cardsArray.filter(job => job.jobRole === 'frontend');
  console.log(cardsArray.length)

  return (
    <div className='flex flex-wrap justify-evenly items-center my-8 px-4'>
      {cardsArray?.map((card)=>{
        return <div key={`${card?.jdUid}${index++}`}><Card data={card}/></div>
      })}
    </div>
  )
}

export default CardContainer