import React from 'react'
import FilterBar from './filterBar'
import CardContainer from './cardContainer'

const Container = () => {
  return (
    <div className='mt-8 md:mt-12 flex flex-col items-center'>
        <FilterBar/>
        <CardContainer/>
    </div>
  )
}

export default Container