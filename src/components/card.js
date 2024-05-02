import React from 'react'

const Card = ({data}) => {
  return (
    <div className='my-3'>
<div className='w-[20rem]'>
<div className="bg-white rounded-lg shadow-md p-4 border-[#f3f3f3] border-solid border-[1px]">
    <div className="text-gray-500 mb-5 text-[0.6rem] "> <span className='little-shadow px-3 py-2 border-[1px] border-gray-200 rounded-full'><span className='text-xs'>⌛</span> Posted 11 days ago </span></div>
    <div className="flex items-center mb-4">
        <img src="https://www.avalara.com/etc.clientlibs/avalara/clientlibs/avalara/resources/images/ava-bug.svg" alt="Company Logo" className="w-8 h-8 mr-2" />
        <div className='px-1'>
            <h1 className='text-gray-600 text-sm'>Avalara</h1>
            <h1 className='text-gray-900 text-sm'>Software Developer</h1>
            <h1 className='text-xs text-gray-950'>Noida</h1>
        </div>
    </div>
    <div className="text-slate-800 mb-4 text-sm">Estimated Salary: ₹40 - 60 LPA ✅</div>
    <div className='overflow-hidden mb-12'>
        <h3 className=' text-gray-950'>About Company</h3>
    <p className="text-gray-700 mt-2 mb-0 pb-0 text-sm max-h-[120px] ">
        <span className='text-gray-900 font-bold'>About Us</span> <br />
        Loop is your co-pilot for running a data-driven digital food brand. Our mission is to empower food entrepreneurs to find Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, praesentium neque veritatis exercitationem est ex assumenda perferendis quibusdam dicta vitae sequi fugiat suscipit repellendus culpa? Eum iste cupiditate esse accusantium. product-market fit quickly, focus on crafting exceptional quality food, and foster strong connections with their audience.
    </p>
<div className='bg-red-600 absolute h-12 -mt-12 flex flex-col justify-between items-center w-[18rem] gradient_shaded'>
    <div></div>
    <button className="text-blue-500 hover:underline flex justify-center mt-12">View job</button>
    </div>
    </div>

    <div className="text-gray-600 mt-4 flex flex-col text-sm">
        Minimum Experience
        <span className='text-gray-800'>5 years</span>
    </div>
    <div className="flex flex-col mt-4">
        <button className="bg-[#55efc3] text-gray-900 px-4 py-2 m-1 rounded-md hover:bg-green-600">⚡️ Easy Apply</button>
        <button className="flex justify-center items-center bg-[#4943da] text-white px-4 py-2 m-1 rounded-md hover:bg-purple-600">
        <img className="w-6 h-6 blur-[1px] rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
        <img className="w-6 h-6 ml-2 mr-4 blur-[1px] rounded-full" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Rounded avatar" />

            
            Unlock referral asks</button>
    </div>
</div>
</div>
    </div>
  )
}

export default Card