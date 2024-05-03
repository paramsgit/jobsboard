import React from 'react'

const Card = ({data}) => {
  return (
    <div className='card_up'>
<div className='card_width'>
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

    <div className={`${!data.minExp && "opacity-0"} exp_div`}>
        Minimum Experience
        <span className={`exp_txt ${!data.minExp && "opacity-0"}`}>{data.minExp} years</span>
    </div>

    <div className="card_buttons_div">
        <button className="apply_btn">⚡️ Easy Apply</button>
        <button className="ref_btn">
        <img className="ref_img" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Rounded avatar" />
        <img className="ref_img ref_img2" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Rounded avatar" />

            
            Unlock referral asks</button>
    </div>
</div>
</div>
    </div>
  )
}

export default Card