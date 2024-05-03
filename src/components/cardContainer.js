import React from 'react'
import { useSelector } from 'react-redux';
import Card from './card';
import CardLoader from './cardLoader';
const CardContainer = ({cardsArray,isLoading}) => {
  let index=0
  // const cardsArray = useSelector(state => state?.data?.cardsArray);
  // const filteredJobs = cardsArray.filter(job => job.jobRole === 'frontend');
  console.log(cardsArray.length)

  return (
    <div className='card_container_div'>
      {cardsArray?.map((card)=>{
        return <div key={`${card?.jdUid}${index++}`}><Card data={card}/></div>
      })}
      {isLoading && <CardLoader/>}
    </div>
  )
}

export default CardContainer