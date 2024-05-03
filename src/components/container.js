import React,{useEffect, useState} from 'react'
import FilterBar from './filterBar'
import CardContainer from './cardContainer'
import { useDispatch,useSelector } from 'react-redux'
import { UpdateCardsArray } from '../utils/store/dataSlice'
// import { useApi } from '../utils/hooks/useApi'




const Container = () => {
  const dispatch = useDispatch();
  const [offset, setOffset] = useState(0);
  const [isLoading, setisLoading] = useState(false);
  const [filteredArray,setfilteredArray]=useState([])
    const cardsArray = useSelector(state => state?.data?.cardsArray);
   
  


  const options = {
    method: "POST",
    body: JSON.stringify({ limit: 10, offset: offset }),
    headers: { 'Content-Type': 'application/json' }
  };

  const getData = async () => {
    // Increment offset properly
    setisLoading(true)
    const newOffset = offset + 1;
    const newOptions = { ...options, body: JSON.stringify({ limit: 2, offset: newOffset }) };

    // Update state
    setOffset(newOffset);

    const response = await fetch('https://api.weekday.technology/adhoc/getSampleJdJSON', newOptions);
    const data = await response.json();
    dispatch(UpdateCardsArray(data.jdList));
    setisLoading(false)
  };

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if ( scrollTop + clientHeight >= scrollHeight - 12) {
        setisLoading(true)
        setTimeout(() => {
          getData()
        }, 500);
      }
    };
    if(!offset){ handleScroll()}
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [offset]); // Include offset in dependency array


  

  return (
    <div className='container'>
        <FilterBar arr={cardsArray} setfilteredArray={setfilteredArray}/>
        <CardContainer cardsArray={filteredArray} isLoading={isLoading}/>
        {/* <Card/> */}
    </div>
  )
}

export default Container