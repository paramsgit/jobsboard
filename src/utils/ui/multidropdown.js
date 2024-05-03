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
    <div className="drop_container">
      <div>
        <span className="drop_btn_span">
          <button
            onClick={toggleDropdown}
            type="button"
            className="drop_btn"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
          >
            {selectedOptions?.length > 0 ? (
              <div className="selected_options_div">
                {selectedOptions?.map((option) => (
                  <div key={option} className="selected_option">
                    <span>{option}</span>
                    <button
                      onClick={() => handleRemoveOption(option)}
                      className="cross_btn"
                    >
                      <svg className="" style={{width:"0.75rem",height:"0.75rem"}} fill="currentColor" viewBox="0 0 20 20">
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

            <div className={`rotator ${!isOpen &&"rotate-180"}`}>
            <svg fill="#c4c4c4" height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330" xmlSpace="preserve" transform='rotate(270)'  stroke="#c4c4c4"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_222_" d="M250.606,154.389l-150-149.996c-5.857-5.858-15.355-5.858-21.213,0.001 c-5.857,5.858-5.857,15.355,0.001,21.213l139.393,139.39L79.393,304.394c-5.857,5.858-5.857,15.355,0.001,21.213 C82.322,328.536,86.161,330,90,330s7.678-1.464,10.607-4.394l149.999-150.004c2.814-2.813,4.394-6.628,4.394-10.606 C255,161.018,253.42,157.202,250.606,154.389z"></path> </g></svg>
            </div>

          </button>
        </span>
      </div>

      {isOpen && (
        <div className="opened_div">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="open_search"
            />
            <div className='filter_search_opt_div'>
            {filteredOptions?.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionClick(option.value)}
                className="filter_search_opt_btn"
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
