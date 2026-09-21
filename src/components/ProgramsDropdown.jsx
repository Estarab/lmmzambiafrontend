



import React from "react";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";


function ProgramsDropdown() {
  return (
    <Dropdown label="Our Programs"  inline>
    <Dropdown.Header>
        <span className="block text-sm text-[#46923c]">Small Holder Farmer Accerelation Programme</span>
        {/* <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span> */}
        <Dropdown.Item>
      
        <Link to="/shfap-overview" className="text-[#46923c] hover:text-[#ffa500] text-xs">
          Over View
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/field-crop" className="text-[#46923c] hover:text-[#ffa500] text-xs">
        Field Crop Production (Eastern Province)
        
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/market" className="text-[#46923c] hover:text-[#ffa500] text-xs">
        Technology and Market Access (World Vision under Thrive)
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/mushroom" className="text-[#46923c] hover:text-[#ffa500] text-xs">
        Mushroom Value Chain
        </Link>
      </Dropdown.Item>
      </Dropdown.Header>
      {/* Dropdown items */}
      

     
     

      <Dropdown.Item>
      <Link to="/sku2farm" className="text-[#46923c] hover:text-[#ffa500]">
      <span className="block text-sm text-[#46923c] hover:text-[#ffa500]">Sku 2 Farm </span>
        </Link>
       
        {/* <span className="block truncate text-sm font-medium">bonnie@flowbite.com</span> */}
      </Dropdown.Item>
      
      
    

     
      
    </Dropdown>
  );
}

export default ProgramsDropdown;