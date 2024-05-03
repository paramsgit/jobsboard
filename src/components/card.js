import React from 'react'

const Card = ({data}) => {
  return (
    <div className='my-3'>
<div className='w-[20rem]'>
<div className="card_bg">
    {/* <div className=" posted_div"> <span className='posted_tag'><span className='hourglass'>⌛</span> Posted 11 days ago </span></div> */}

    <div className="company_div">
        <img src="https://medvirturials.com/img/old_logo.png" alt="Company Logo" className="company_logo" />
        <div className='company_details'>
            {/* <h1 className='company_name'>Avalara</h1> */}
            <h1 className={`${!data.jobRole && "opacity-0"} company_role`}>{data.jobRole}</h1>
            <h1 className={`company_loc ${!data.location && "opacity-0"}`}>{data.location}</h1>
            
        </div>
    </div>

    <div className={`${(!data.maxJdSalary && !data.minJdSalary) && "opacity-0"} salary`}>Estimated Salary: ₹{data.minJdSalary} - {data.maxJdSalary} LPA ✅</div>

    <div className='about_div'>
        <h3 className=' '>About Job</h3>
    <p className="about_p">
        <span className='about_s'>About role</span> <br />
       {data.jobDetailsFromCompany}
    </p>
<div className=' faded_div gradient_shaded'>
    <div></div>
    <button className="view_button">View job</button>
    </div>
    </div>

    <div className={`${!data.minExp && "opacity-0"} text-gray-600 mt-2 flex flex-col text-sm`}>
        Minimum Experience
        <span className={`text-gray-800 ${!data.minExp && "opacity-0"}`}>{data.minExp} years</span>
    </div>
    <div className="flex flex-col mt-2">
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