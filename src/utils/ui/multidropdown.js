import React, { useState } from 'react';


const MultiSelectDropdown = ({options,Name,selectedOptions,setSelectedOptions}) => {
  

  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  if(!options)
  return<></>
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (value) => {
    setSelectedOptions([...selectedOptions, value]);
    setIsOpen(false);
  };

  const handleRemoveOption = (value) => {
    setSelectedOptions(selectedOptions.filter((option) => option !== value));
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredOptions = options?.filter(
    (option) =>
      !selectedOptions.includes(option.value) &&
      option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  

  return (
    <div className="relative inline-block text-left m-1">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex justify-between items-center w-full rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100 min-w-36"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {selectedOptions?.length > 0 ? (
              <div className="flex flex-wrap items-center gap-x-1">
                {selectedOptions?.map((option) => (
                  <div key={option} className="flex items-center bg-gray-100 px-2 rounded-full">
                    <span>{option}</span>
                    <button
                      onClick={() => handleRemoveOption(option)}
                      className="ml-1 text-gray-500 hover:text-gray-700 focus:outline-none"
                    >
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10 8.586l2.293-2.293a1 1 0 011.414 1.414L11.414 10l2.293 2.293a1 1 0 01-1.414 1.414L10 11.414l-2.293 2.293a1 1 0 01-1.414-1.414L8.586 10 6.293 7.707a1 1 0 011.414-1.414L10 8.586zM2 10a8 8 0 1116 0 8 8 0 01-16 0z"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              Name?Name:"Select Options"
            )}

            <div className={`text-gray-500 flex justify-center items-center ml-3 transition-all ease-in-out duration-300 origin-center ${!isOpen &&"rotate-180"}`}>
            <svg fill="#c4c4c4" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve" transform='rotate(270)' style={{transform:`${isOpen && "rotate(90)"}`}}  stroke="#c4c4c4"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
            </div>

          </button>
        </span>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 min-w-36 max-w-52 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="border border-gray-300 rounded-md px-3 py-2 mb-2 mx-2 min-w-32 max-w-[90%]"
            />
            <div className='overflow-y-auto max-h-[16rem]'>
            {filteredOptions?.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
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

export default MultiSelectDropdown;
