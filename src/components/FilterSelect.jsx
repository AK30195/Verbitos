import Select from "react-select";


 function FilterSelect({category, options, onChange}) {

  return (
    <Select
      isMulti
      options={options}
      className="w-64"
      placeholder={`Select ${category}`}
      onChange={onChange}
    />
  );
}

export default FilterSelect;