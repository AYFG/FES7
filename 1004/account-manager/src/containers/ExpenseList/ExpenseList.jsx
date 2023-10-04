import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import List from "../../store/components/List/List";

export default function ExpenseList() {
  const expenseList = useSelector((store) => store.expense.expenseList);

  return <List items={expenseList} />;
}
