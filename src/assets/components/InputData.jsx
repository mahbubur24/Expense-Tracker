import { useState } from "react";
import InputField from "./InputField";

const expenseCategory = [
  "Select a category",
  "Education",
  "Food",
  "Health",
  "Bill",
  "Insurance",
  "Tax",
  "Transport",
  "Telephone",
];
const incomeCategory = [
  "Select a category",
  "Salary",
  "Outsourcing",
  "Bond",
  "Dividend",
];

export default function InputData({ handleSaveItems, itemToEdit, isEdit }) {
  const active = "bg-teal-600 text-white hover:bg-teal-800 hover:text-white";
  const [expense, SetExpense] = useState(active);
  const [income, SetIncome] = useState("");
  const [categoryData, setCatgoryData] = useState(expenseCategory);
  const [type, setType] = useState("Expense");

  function handleActive(flag) {
    if (flag === "e") {
      SetExpense(active);
      SetIncome("");
      setCatgoryData(expenseCategory);
      setType("Expense");
    } else {
      SetExpense("");
      SetIncome(active);
      setCatgoryData(incomeCategory);
      setType("Input");
    }
  }

  return (
    <InputDataView
      handleActive={handleActive}
      income={income}
      expense={expense}
      categoryData={categoryData}
      type={type}
      handleSaveItems={handleSaveItems}
      itemToEdit={itemToEdit}
      isEdit={isEdit}
    ></InputDataView>
  );
}

function InputDataView({
  handleActive,
  income,
  expense,
  categoryData,
  type,
  handleSaveItems,
  itemToEdit,
  isEdit,
}) {
  return (
    <>
      <div className="p-6 py-8 bg-[#F9FAFB] border rounded-md">
        <h2 className="text-3xl font-semibold leading-7 text-gray-800 text-center">
          Expense Tracker
        </h2>
        <div className="flex divide-x divide-slate-400/20 overflow-hidden rounded-md bg-white text-[0.8125rem] font-medium leading-5 text-slate-700 shadow-sm ring-1 ring-slate-700/10 mt-6">
          <div
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${expense}`}
            onClick={() => handleActive("e")}
          >
            Expense
          </div>
          <div
            className={`cursor-pointer text-center flex-1 px-4 py-2 hover:bg-slate-50 hover:text-slate-900 ${income}`}
            onClick={() => handleActive("i")}
          >
            Income
          </div>
        </div>

        <InputField
          category={categoryData}
          type={type}
          handleSaveItems={handleSaveItems}
          itemToEdit={itemToEdit}
          isEdit={isEdit}
        ></InputField>
      </div>
    </>
  );
}
