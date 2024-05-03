import React,{useEffect, useState} from 'react'
import FilterBar from './filterBar'
import CardContainer from './cardContainer'
import { useDispatch,useSelector } from 'react-redux'
import { UpdateCardsArray } from '../utils/store/dataSlice'
// import { useApi } from '../utils/hooks/useApi'




const Container = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const [filteredArray,setfilteredArray]=useState([])
    const cardsArray = useSelector(state => state?.data?.cardsArray);
   
  


  const options = {
    method: "POST",
    body: JSON.stringify({ limit: 10, offset: offset }),
    headers: { 'Content-Type': 'application/json' }
  };

  const getData = async () => {
    // Increment offset properly
    const newOffset = offset + 1;
    const newOptions = { ...options, body: JSON.stringify({ limit: 2, offset: newOffset }) };

    // Update state
    setOffset(newOffset);

    const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', newOptions);
    const data = await response.json();
    dispatch(UpdateCardsArray(data.jdList));
    console.log(data);
  };

  useEffect(() => {
console.log("filtered arr",filteredArray)  }, [filteredArray])
  

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if ( scrollTop + clientHeight >= scrollHeight - 2) {
        console.log("Calling with", offset);
        getData();
      }
    };
    if(!offset){ handleScroll()}
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]); // Include offset in dependency array


  

  return (
    <div className='mt-8 md:mt-12 flex flex-col items-center'>
        <FilterBar arr={cardsArray} setfilteredArray={setfilteredArray}/>
        <CardContainer cardsArray={filteredArray}/>
        {/* <Card/> */}
    </div>
  )
}

export default Container