import React from 'react'

const Navbar = () => {
  return (
    <div >
        <div className="Navbar flex justify-between items-center py-[0.4rem] px-4 rounded-lg shadow-md">
        <div className='Navbar_Username font-[Lexend] font-medium'>Username</div>
        <button className='Navbar_Button w-[35px] h-[35px] rounded-full border-none bg-[#55efc3] flex justify-center items-center'>
        <svg id="woot-widget-bubble-icon" width="17" height="17" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M240.808 240.808H122.123C56.6994 240.808 3.45695 187.562 3.45695 122.122C3.45695 56.7031 56.6994 3.45697 122.124 3.45697C187.566 3.45697 240.808 56.7031 240.808 122.122V240.808Z" fill="#FFFFFF"></path></svg>
        </button>
        </div>

    </div>
  )
}

export default Navbar