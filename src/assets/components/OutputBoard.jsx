import BalanceStatus from "./Balance-status";
import OutputList from "./Output-List";

export default function OutputBoard({
  incomeList,
  expenseList,
  handleEditItem,
  handleDeleteItem,
}) {
  // balance status
  function balanceStatus() {
    let sum = 0;
    let remain = 0;
    let sumOfIncome = 0;
    let sumOfExpense = 0;
    incomeList.forEach((item) => {
      sum = sum + Number(item.amount);
    });
    sumOfIncome = sum;
    sum = 0;
    expenseList.forEach((item) => {
      sum = sum + Number(item.amount);
    });
    sumOfExpense = sum;
    remain = sumOfIncome - sumOfExpense;
    return [remain, sumOfIncome, sumOfExpense];
  }

  return (
    <div className="lg:col-span-2">
      <BalanceStatus balance={balanceStatus}></BalanceStatus>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
        <OutputList
          listData={incomeList}
          type={"Income"}
          handleEditItem={handleEditItem}
          handleDeleteItem={handleDeleteItem}
        ></OutputList>
        <OutputList
          listData={expenseList}
          type={"Expense"}
          handleEditItem={handleEditItem}
          handleDeleteItem={handleDeleteItem}
        ></OutputList>
      </div>
    </div>
  );
}
