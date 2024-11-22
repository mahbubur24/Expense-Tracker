import { useState } from "react";
import Header from "./assets/components/Header";
import InputData from "./assets/components/InputData";
import OutputBoard from "./assets/components/OutputBoard";

function App() {
  const [expenseItems, setExpenseItems] = useState([]);
  const [incomeItems, setIncomeItems] = useState([]);
  const [itemToEdit, setItemToEdit] = useState(null);
  const [isEdit, setIsEdit] = useState(false);

  function itemToSave(itemList, newItem) {
    return itemList.map((item) => {
      if (item.id === newItem.id) {
        return newItem;
      } else {
        return item;
      }
    });
  }

  function handleSaveItems(newitem) {
    if (newitem.type === "Expense") {
      if (!isEdit) setExpenseItems([...expenseItems, newitem]);
      else setExpenseItems(itemToSave(expenseItems, newitem));

      setIsEdit(false);
      setItemToEdit(null);
    } else {
      if (!isEdit) setIncomeItems([...incomeItems, newitem]);
      else setIncomeItems(itemToSave(incomeItems, newitem));

      setIsEdit(false);
      setItemToEdit(null);
    }
  }

  function handleEditItem(item) {
    setItemToEdit(item);
    setIsEdit(true);
  }

  function deleteFromList(itemList, deleteItem) {
    return itemList.filter((item) => item.id !== deleteItem.id);
  }

  function handleDeleteItem(item) {
    let temp = [];
    if (item.type === "Expense") {
      setExpenseItems(deleteFromList(expenseItems, item));
    } else {
      setIncomeItems(deleteFromList(incomeItems, item));
    }
  }

  return (
    <>
      <Header></Header>
      <main className="relative mx-auto mt-10 w-full max-w-7xl">
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <InputData
            handleSaveItems={handleSaveItems}
            itemToEdit={itemToEdit}
            isEdit={isEdit}
          ></InputData>
          <OutputBoard
            incomeList={incomeItems}
            expenseList={expenseItems}
            handleEditItem={handleEditItem}
            handleDeleteItem={handleDeleteItem}
          ></OutputBoard>
        </section>
      </main>
    </>
  );
}

export default App;
