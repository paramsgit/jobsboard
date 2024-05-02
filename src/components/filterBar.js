import React,{useState} from 'react'
import MultiSelectDropdown from '../utils/ui/multidropdown'
import { RemoteOptions, RoleOptions,TechStackOptions,LocationOptions,MinSalrayOptions,MinExperienceOptions,CompanyOptions } from '../utils/ui/data'
import SingleSelectDropdown from '../utils/ui/singledropdown'
const FilterBar = () => {
    const [RoleselectedOptions, setRoleSelectedOptions] = useState([]);
    const [TechselectedOptions, setTechSelectedOptions] = useState([]);
    const [SiteselectedOption, setSiteSelectedOption] = useState(null);
    const [LocationselectedOption, setLocationSelectedOption] = useState(null);
    const [PayselectedOption, setPaySelectedOption] = useState(null);
    const [ExperienceselectedOption, setExperienceSelectedOption] = useState(null);
    const [CompanyselectedOption, setCompanySelectedOption] = useState(null);

  return (
    <div className='flex flex-wrap justify-evenly'>
      
      <MultiSelectDropdown options={RoleOptions} selectedOptions={RoleselectedOptions} setSelectedOptions={setRoleSelectedOptions} Name={"Role"}/>
      <MultiSelectDropdown options={TechStackOptions} selectedOptions={TechselectedOptions} setSelectedOptions={setTechSelectedOptions} Name={"Tech Stack"}/>
      <SingleSelectDropdown options={RemoteOptions} selectedOption={SiteselectedOption} setSelectedOption={setSiteSelectedOption} Name={"Site"}/>
      <SingleSelectDropdown options={LocationOptions} selectedOption={LocationselectedOption} setSelectedOption={setLocationSelectedOption} Name={"Location"}/>
      <SingleSelectDropdown options={MinSalrayOptions} selectedOption={PayselectedOption} setSelectedOption={setPaySelectedOption} Name={"Minimum Pay"}/>
      <SingleSelectDropdown options={MinExperienceOptions} selectedOption={ExperienceselectedOption} setSelectedOption={setExperienceSelectedOption} Name={"Experience"}/>
      <SingleSelectDropdown options={CompanyOptions} selectedOption={CompanyselectedOption} setSelectedOption={setCompanySelectedOption} Name={"Company Name"}/>
    </div>
  )
}

export default FilterBar