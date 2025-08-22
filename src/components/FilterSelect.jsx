import Select from "react-select";


 function FilterSelect({category, options, value, onChange, isMulti = true, closeMenu = false}) {

  return (
    <Select
      options={options}
      className="filter-select"
      placeholder={`Select ${category}`}
      value={value}
      onChange={onChange}
      isMulti={isMulti}
      closeMenuOnSelect={closeMenu}
    />
  );
}

export default FilterSelect;