import { useState } from "react";
export default function InputField({
  category,
  handleSaveItems,
  type,
  itemToEdit,
  isEdit,
}) {
  const defaultItem = itemToEdit ?? {
    id: "",
    category: "",
    amount: "",
    date: "",
    type: "",
  };

  // const [data, setData] = useState({ ...item });
  const [data, setData] = useState(defaultItem);

  // Handle manual reset of data if edit mode changes or itemToEdit changes

  if (isEdit && itemToEdit && data.id !== itemToEdit.id) {
    setData(itemToEdit);
  }

  /*   function handleChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value, id: crypto.randomUUID(), type: type });
  } */

  function handleChange(e) {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
      id: isEdit ? itemToEdit.id : crypto.randomUUID(), // Keep the same id if editing
      type: type,
    }));
  }

  /* 
  function handleSave(e) {
    e.preventDefault();
    handleSaveItems(data);
    setData(item);
  } */

  function handleSave(e) {
    e.preventDefault();
    handleSaveItems(data);
    setData(defaultItem); // Reset form after saving
  }
  // if (isEdit) setData(itemToEdit);
  // console.log(isEdit, itemToEdit);

  return (
    <form>
      <div className="mt-3">
        <label
          for="category"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Category
        </label>
        <div className="mt-2">
          <select
            id="category"
            name="category"
            autocomplete="category-name"
            value={data.category}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          >
            {category.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-3">
        <label
          for="amount"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Amount
        </label>
        <div className="mt-2">
          <input
            type="number"
            name="amount"
            id="amount"
            value={data.amount}
            autocomplete="off"
            placeholder="12931"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="mt-3">
        <label
          for="date"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Date
        </label>
        <div className="mt-2">
          <input
            type="date"
            name="date"
            id="date"
            value={data.date}
            autocomplete="off"
            placeholder="12931"
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-teal-600 sm:text-sm sm:leading-6"
            onChange={handleChange}
          />
        </div>
      </div>

      <button
        type="submit"
        className="mt-6 rounded-md bg-teal-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 w-full"
        onClick={handleSave}
      >
        {isEdit ? "Update" : "save"}
      </button>
    </form>
  );
}
