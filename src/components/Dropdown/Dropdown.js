import { useRef, useState } from "react";

import {
  DropdownSelect,
  SelectCategories,
  SelectCategoriesItem,
  SelectContainer,
} from "./Dropdown.styled";

const config = {
  showAll: "Show all",
  follow: "Follow",
  followings: "Followings",
};

const Dropdown = ({ setType, type }) => {
  const [open, setOpen] = useState(false);
  const optionsRef = useRef(null);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      setOpen(false);
    }
  });

  window.addEventListener("mousedown", (e) => {
    if (
      optionsRef.current &&
      !optionsRef.current.contains(e.target) &&
      e.target !== document.querySelector('[name="type"]')
    ) {
      setOpen(false);
    }
  });

  const handleSelectOption = (e) => {
    setOpen(false);
    setType(e.target.value);
  };

  const toggleDropdown = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  return (
    <SelectContainer>
      <DropdownSelect type="button" name="type" onClick={toggleDropdown}>
        {config[type]}
      </DropdownSelect>
      <SelectCategories
        ref={optionsRef}
        style={{ display: open ? "block" : "none" }}
      >
        <SelectCategoriesItem>
          <DropdownSelect value="showAll" onClick={handleSelectOption}>
            {config.showAll}
          </DropdownSelect>
        </SelectCategoriesItem>
        <SelectCategoriesItem>
          <DropdownSelect value="follow" onClick={handleSelectOption}>
            {config.follow}
          </DropdownSelect>
        </SelectCategoriesItem>
        <SelectCategoriesItem>
          <DropdownSelect value="followings" onClick={handleSelectOption}>
            {config.followings}
          </DropdownSelect>
        </SelectCategoriesItem>
      </SelectCategories>
    </SelectContainer>
  );
};

export default Dropdown;
