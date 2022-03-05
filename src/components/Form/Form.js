import { useState } from "react";

const Form = ({ onSubmit, existingFormData }) => {
  const initFormData = {
    searchText: "",
    status: "OPEN",
  };
  const [formData, setFormData] = useState(
    existingFormData ? existingFormData : initFormData
  );

  const handleOnChange = (event) => {
    setFormData({ ...formData, [event.target.id]: event.target.value });
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <form autoComplete="off" onSubmit={handleOnSubmit}>
      <input
        type="text"
        id="searchText"
        value={formData.searchText}
        onChange={handleOnChange}
      />
      <select id="status" value={formData.status} onChange={handleOnChange}>
        <option value="OPEN">OPEN</option>
        <option value="CLOSED">CLOSED</option>
      </select>
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
