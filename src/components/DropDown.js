import React from "react";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useNavigate } from "react-router-dom";

const DropDown = ({ onSelectOption, authorId, bookId }) => {
  const options = [
    { value: "create", label: "Create" },
    { value: "update", label: "Update" },
    { value: "delete", label: "Delete" },
  ];
  const navigate = useNavigate();

  const handleSelect = (option) => {
    if (onSelectOption) {
      onSelectOption(option.value);
    }
    const userId = localStorage.getItem("id");
    if (!userId) {
      alert("Please login first");
    } else if (userId !== authorId) {
      alert("You are not authorized to perform this action");
    } else if (option.value === "delete") {
      navigate(`/delete/${bookId}`);
    } else if (option.value === "update") {
      navigate(`/update/${bookId}`);
    } else {
      navigate(`${option.value}`);
    }
  };

  return (
    <div>
      <Dropdown
        options={options}
        onChange={handleSelect}
        value={options[0]}
        placeholder="Select an option"
      />
    </div>
  );
};

export default DropDown;
