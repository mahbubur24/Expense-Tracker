import { useState } from "react";
import Filter from "./Filter";
import ListItem from "./List-item";
import ExpenseIcon from "./ui/Expense-icon";
import FilterIcon from "./ui/Filter-icon";
import IncomeIcon from "./ui/Income-icon";
import SortIcon from "./ui/Sort-icon";
const expenseCategory = [
  "Education",
  "Food",
  "Health",
  "Bill",
  "Insurance",
  "Tax",
  "Transport",
  "Telephone",
];
const incomeCategory = ["Salary", "Outsourcing", "Bond", "Dividend"];
export default function OutputList({
  listData,
  type,
  handleEditItem,
  handleDeleteItem,
}) {
  const [showShort, setShowSort] = useState(false);
  const [showFilt, setShowFilt] = useState(false);
  const [categoryOptions, setCategoryOptions] = useState([]);
  const [isSort, setIsSort] = useState(false);

  function handleSort() {
    setShowSort(!showShort);
  }
  function handleFilter() {
    setShowFilt(!showFilt);
  }
  function handleAddRemoveCategory(e) {
    const name = e.target.name.toLowerCase();

    if (categoryOptions.includes(name)) {
      setCategoryOptions([
        ...categoryOptions.filter((item) => item.toLowerCase() !== name),
      ]);
    } else {
      setCategoryOptions([...categoryOptions, name]);
    }
  }

  function handleFilteredData() {
    if (categoryOptions.length === 0) return listData;
    return listData.filter((item) => {
      return categoryOptions.includes(item.category.toLowerCase());
    });
  }
  function handleSortData() {
    const temp = handleFilteredData();
    if (isSort) {
      temp.sort((a, b) => b.amount - a.amount);
    } else {
      temp.sort((a, b) => a.amount - b.amount);
    }
    return temp;
  }
  const sortAndFilteredData = handleSortData();

  return (
    <div className="border rounded-md relative">
      <div className="flex items-center justify-between gap-2 bg-[#F9FAFB] py-4 px-4 rounded-md">
        <div className="flex items-center gap-2">
          {type === "Income" && (
            <div className="h-10 w-10 bg-teal-600 text-white rounded-md text-center object-center place-content-center text-base">
              <IncomeIcon></IncomeIcon>
            </div>
          )}
          {type === "Expense" && (
            <div className="h-10 w-10 bg-pink-600 text-white rounded-md text-center object-center place-content-center text-base">
              <ExpenseIcon></ExpenseIcon>
            </div>
          )}

          <div>
            <h3 className="text-xl font-semibold leading-7 text-gray-800">
              {type}
            </h3>
          </div>
        </div>
        <div>
          {/* <!-- Sorting --> */}
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="menu-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={handleSort}
              >
                <SortIcon></SortIcon>
              </button>
            </div>

            {showShort && (
              <div
                className="absolute z-10 mt-2 left-5 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div className="py-1" role="none">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    onClick={() => setIsSort(false)}
                  >
                    Low to High
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-all"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                    onClick={() => setIsSort(true)}
                  >
                    High to Low
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* <!-- Filtering --> */}
          <div className="relative inline-block text-left">
            <div>
              <button
                type="button"
                className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-2 py-1 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                id="filter-button"
                aria-expanded="true"
                aria-haspopup="true"
                onClick={handleFilter}
              >
                <FilterIcon></FilterIcon>
              </button>
            </div>

            {showFilt && type === "Expense" && (
              <Filter
                filterList={expenseCategory}
                handleAddRemoveCategory={handleAddRemoveCategory}
              ></Filter>
            )}
            {showFilt && type === "Income" && (
              <Filter
                filterList={incomeCategory}
                handleAddRemoveCategory={handleAddRemoveCategory}
              ></Filter>
            )}
          </div>
        </div>
      </div>

      <div className="p-4 divide-y">
        <ListItem
          listData={sortAndFilteredData}
          handleEditItem={handleEditItem}
          handleDeleteItem={handleDeleteItem}
        ></ListItem>
      </div>
    </div>
  );
}
