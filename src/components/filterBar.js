import React,{useEffect, useState} from 'react'
import MultiSelectDropdown from '../utils/ui/multidropdown'
import { RemoteOptions, RoleOptions,TechStackOptions,LocationOptions,MinSalrayOptions,MinExperienceOptions,CompanyOptions } from '../utils/ui/data'
import SingleSelectDropdown from '../utils/ui/singledropdown'
const FilterBar = ({arr,setfilteredArray}) => {
    const [RoleSOptions, setRoleSOptions] = useState([]);
    const [TechSOptions, setTechSOptions] = useState([]);
    const [SiteSOption, setSiteSOption] = useState(null);
    const [LocationSOption, setLocationSOption] = useState(null);
    const [PaySOption, setPaySOption] = useState(null);
    const [ExperienceSOption, setExperienceSOption] = useState(null);
    const [CompanySOption, setCompanySOption] = useState(null);

  
  useEffect(() => {
    console.log("calling to this",arr.length)
    const filteredJobs = arr.filter(job => {
      // Apply filters one by one
      if (RoleSOptions.length && !RoleSOptions.includes(job.jobRole)) {
          return false;
      }
      if (TechSOptions.length && !TechSOptions.includes(job.jobRole)) {
          return false;
      }
      
      
      if (SiteSOption && SiteSOption.value !== 'all' && job.location !== SiteSOption.value) {
          return false;
      }
      
      if (LocationSOption && LocationSOption.value !== 'all' && job.location !== LocationSOption.value) {
          return false;
      }
      
      if (ExperienceSOption && job.minExp && job.minExp < parseInt(ExperienceSOption.value)) {
          return false;
      }
      if (PaySOption && job.minJdSalary < PaySOption.value) {
          return false;
      }
      
      if (CompanySOption && CompanySOption!=="all"  && job.companyName !== CompanySOption.value) {
          return false;
      }
      
      return true;
  });
  
  console.log(filteredJobs);
  console.log(ExperienceSOption?.value,typeof(ExperienceSOption?.value));
  
  setfilteredArray(filteredJobs)
  }, [arr,RoleSOptions,TechSOptions,SiteSOption,LocationSOption,ExperienceSOption,PaySOption,CompanySOption])
  
  useEffect(() => {
   
  }, [PaySOption])
  
  

  return (
    <div className='filter_div'>
      
      <MultiSelectDropdown options={RoleOptions} selectedOptions={RoleSOptions} setSelectedOptions={setRoleSOptions} Name={"Role"}/>
      <MultiSelectDropdown options={TechStackOptions} selectedOptions={TechSOptions} setSelectedOptions={setTechSOptions} Name={"Tech Stack"}/>
      <SingleSelectDropdown options={RemoteOptions} selectedOption={SiteSOption} setSelectedOption={setSiteSOption} Name={"Site"}/>
      <SingleSelectDropdown options={LocationOptions} selectedOption={LocationSOption} setSelectedOption={setLocationSOption} Name={"Location"}/>
      <SingleSelectDropdown options={MinSalrayOptions} selectedOption={PaySOption} setSelectedOption={setPaySOption} Name={"Minimum Pay"}/>
      <SingleSelectDropdown options={MinExperienceOptions} selectedOption={ExperienceSOption} setSelectedOption={setExperienceSOption} Name={"Experience"}/>
      <SingleSelectDropdown options={CompanyOptions} selectedOption={CompanySOption} setSelectedOption={setCompanySOption} Name={"Company Name"}/>
    </div>
  )
}

export default FilterBar