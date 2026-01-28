import { dropdowns } from "../../public/data";

const DropdownGroup = () => {
  return (
    <>
      {dropdowns.map((label) => (
        <select
          key={label}
          className="rounded cursor-pointer border border-transparent hover:border hover:border-white transition"
        >
          <option value="">{label}</option>
        </select>
      ))}
    </>
  );
};

export default DropdownGroup;