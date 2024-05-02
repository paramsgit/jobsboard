import React, { useState } from 'react';

const SingleSelectDropdown = ({options,Name,selectedOption,setSelectedOption}) => {
  const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState(null);

    if(!options){
        return <></>
    }



  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left m-1">
      <div>
        <span className="rounded-md shadow-sm">

        <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 min-w-[9.5rem]"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {selectedOption ? selectedOption.label : Name}

            <div className={`text-gray-500 flex justify-center items-center ml-3 transition-all ease-in-out duration-300 origin-center ${!isOpen &&"rotate-180"}`}>
            <svg fill="#c4c4c4" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve" transform='rotate(270)' style={{transform:`${isOpen && "rotate(90)"}`}}  stroke="#c4c4c4"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
            </div>

          </button>

          
        </span>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 max-w-36">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
          <div className='overflow-y-auto max-h-[16rem]'>
            {options?.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className="block px-4 py-2 text-sm text-left w-full hover:bg-gray-100"
              >
                {option.label}
              </button>
            ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SingleSelectDropdown;
