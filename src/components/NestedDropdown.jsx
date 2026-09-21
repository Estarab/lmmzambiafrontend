// "use client"; // This is usually needed in Next.js, if you're using a client-side component, but it's optional in this context.
import { Dropdown } from "flowbite-react";

export function NestedDropdownComponent() {
  return (
    <div className="flex flex-wrap gap-4 p-6 bg-[#f0f0f0]">
     

      {/* Dropdown 5 */}
      <Dropdown label="Dropdown left start" placement="bottom">
        <Dropdown.Item>
          Dashboard
        </Dropdown.Item>
        <Dropdown.Item className="transition-opacity opacity-0 group-hover:opacity-100 duration-300">
          Settings
        </Dropdown.Item>
        <Dropdown.Item className="transition-opacity opacity-0 group-hover:opacity-100 duration-300">
          Earnings
        </Dropdown.Item>
        <Dropdown.Item className="transition-opacity opacity-0 group-hover:opacity-100 duration-300">
          Sign out
        </Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default NestedDropdownComponent;
