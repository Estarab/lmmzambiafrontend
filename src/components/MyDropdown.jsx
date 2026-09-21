






import React from "react";
import { Dropdown } from "flowbite-react";
import { Link } from "react-router-dom";

function MyDropdown() {
  return (
    <Dropdown label="Our Services" placement="bottom" inline>
      {/* Dropdown items */}
      <Dropdown.Item>
        <Link to="/relationship-brokering" className="text-[#46923c] hover:text-[#ffa500] text-xs">
          Relationship Brokering
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/investment-facilitation" className="text-[#46923c] hover:text-[#ffa500] text-xs">
        Investment Facilitation
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/information-management" className="text-[#46923c] hover:text-[#ffa500] text-xs">
        Information and Knowledge Management
        </Link>
      </Dropdown.Item>
      <Dropdown.Item>
        <Link to="/agr-tourism" className="text-[#46923c] hover:text-[#ffa500] text-xs">
        Agri Innovation Promotion
        </Link>
      </Dropdown.Item>

      
      
    </Dropdown>
  );
}

export default MyDropdown;



