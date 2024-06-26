import React from 'react'
import { useSelector } from 'react-redux';
import Card from './card';
import CardLoader from './cardLoader';
const CardContainer = ({cardsArray,isLoading}) => {
  let index=0

  return (
    <div className='card_container_div'>

      {
        cardsArray.length==0
        ?
        <h1 className={`${isLoading && "opacity-0"}`}> No items Found </h1>
        :
      cardsArray?.map((card)=>{
        return <div key={`${card?.jdUid}${index++}`}><Card data={card}/></div>
      })}
      {isLoading && <CardLoader/>}
    </div>
  )
}

export default CardContainer