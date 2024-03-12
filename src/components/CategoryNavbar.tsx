import React from "react";
import { SubCategory } from "../types";

interface NavbarProps {
  setFilter: (filter: SubCategory | "") => void;
}

const CategoryNavbar: React.FC<NavbarProps> = ({ setFilter }) => {
  return (
    <nav className="p-4 bg-grey-500 text-black">
      <ul className="flex space-x-4">
        <li className="cursor-pointer" onClick={() => setFilter("")}>
          All
        </li>
        {Object.values(SubCategory).map((subCategory) => (
          <li
            className="cursor-pointer"
            key={subCategory}
            onClick={() => setFilter(subCategory)}
          >
            {subCategory}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CategoryNavbar;
