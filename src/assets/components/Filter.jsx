export default function Filter({ filterList, handleAddRemoveCategory }) {
  return (
    <div
      className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="filter-button"
      tabindex="-1"
      id="filter-dropdown"
    >
      <div className="py-1" role="none">
        {filterList.map((item) => (
          <label className="inline-flex items-center px-4 py-2 text-sm text-gray-700">
            <input
              type="checkbox"
              className="form-checkbox h-4 w-4 rounded-md text-gray-600"
              id={item}
              name={item}
              onChange={(e) => handleAddRemoveCategory(e)}
            />
            <span className="ml-2">{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
