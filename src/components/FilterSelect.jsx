import Select from "react-select";


 function FilterSelect({category, options, value, onChange}) {

  return (
    <Select
      isMulti
      closeMenuOnSelect={false}
      options={options}
      className="filter-select"
      placeholder={`Select ${category}`}
      value={value}
      onChange={onChange}
    />
  );
}

export default FilterSelect;