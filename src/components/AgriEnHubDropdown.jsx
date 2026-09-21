import React from "react";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

function AgriEnHubDropdown() {
  return (
    <Dropdown label="AgriEn Hub" placement="bottom" inline>
      
      <Dropdown.Item>
        <Link to="/co-working-space" className="text-[#46923c] hover:text-[#ffa500] text-xs">
          Co-Working Space
        </Link>
      </Dropdown.Item>
      
      
    </Dropdown> 
  );
}

export default AgriEnHubDropdown;