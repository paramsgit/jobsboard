import React from "react";

const CardLoader = () => {
  const data={
    companyName
    : 
    "Apple",
    jdLink
    : 
    "https://weekday.works",
    jdUid
    : 
    "cfff3614-053c-11ef-83d3-06301d0a7178-92026",
    jobDetailsFromCompany
    : 
    "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment."
    ,jobRole
    : 
    "android",
    location
    : 
    "remote",
    logoUrl
    : 
    "https://logo.clearbit.com/apple.com",
    maxExp
    : 
    12,
    maxJdSalary
    : 
    5,
    minExp
    : 
    3,
    minJdSalary
    : 
    3,
    salaryCurrencyCode
    : 
    "USD"}
  return (
    <div className="Loader_Div">
      <div className="card_up">
        <div className="card_width">
          <div className="card_bg_L">
            {/* <div className=" posted_div"> <span className='posted_tag'><span className='hourglass'>⌛</span> Posted 11 days ago </span></div> */}

            <div className="company_div">
              <div
               
                className="company_logo_L skelton"
              />
              <div className="company_details">
                {/* <h1 className='company_name'>Avalara</h1> */}
                <h1 className={`${!data.jobRole && "opacity-0"} company_role_L skelton`}>
                  {data.jobRole}
                </h1>
                <h1 className={`company_loc_L skelton ${!data.location && "opacity-0"}`}>
                  {data.location}
                </h1>
              </div>
            </div>

           

            <div className="about_div_L"> 
            
            <div className="about_div_L2 skelton"> </div>
            </div>

            <div className={` exp_div_L skelton`}>
              Minimum Experience
             
            </div>

            <div className="card_buttons_div">
             <div className="big_b_L skelton"></div>
             <div className="big_b_L skelton"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card_up">
        <div className="card_width">
          <div className="card_bg_L">
            {/* <div className=" posted_div"> <span className='posted_tag'><span className='hourglass'>⌛</span> Posted 11 days ago </span></div> */}

            <div className="company_div">
              <div
               
                className="company_logo_L skelton"
              />
              <div className="company_details">
                {/* <h1 className='company_name'>Avalara</h1> */}
                <h1 className={`${!data.jobRole && "opacity-0"} company_role_L skelton`}>
                  {data.jobRole}
                </h1>
                <h1 className={`company_loc_L skelton ${!data.location && "opacity-0"}`}>
                  {data.location}
                </h1>
              </div>
            </div>

           

            <div className="about_div_L"> 
            
            <div className="about_div_L2 skelton"> </div>
            </div>

            <div className={` exp_div_L skelton`}>
              Minimum Experience
             
            </div>

            <div className="card_buttons_div">
             <div className="big_b_L skelton"></div>
             <div className="big_b_L skelton"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card_up">
        <div className="card_width">
          <div className="card_bg_L">
            {/* <div className=" posted_div"> <span className='posted_tag'><span className='hourglass'>⌛</span> Posted 11 days ago </span></div> */}

            <div className="company_div">
              <div
               
                className="company_logo_L skelton"
              />
              <div className="company_details">
                {/* <h1 className='company_name'>Avalara</h1> */}
                <h1 className={`${!data.jobRole && "opacity-0"} company_role_L skelton`}>
                  {data.jobRole}
                </h1>
                <h1 className={`company_loc_L skelton ${!data.location && "opacity-0"}`}>
                  {data.location}
                </h1>
              </div>
            </div>

           

            <div className="about_div_L"> 
            
            <div className="about_div_L2 skelton"> </div>
            </div>

            <div className={` exp_div_L skelton`}>
              Minimum Experience
             
            </div>

            <div className="card_buttons_div">
             <div className="big_b_L skelton"></div>
             <div className="big_b_L skelton"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardLoader;
