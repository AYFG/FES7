import React from "react";
import { useSelector } from "react-redux";

export default function ExpenseTotal() {
  //모든 지출 내역을 불러온다.
  const expenseList = useSelector((store) => store.expense.expenseList);

  // reduce를 이용해 모든 price를 더한다
  // reduce - 배열의 각 요소에 reducer 콜백 함수를 순서대로 실행하여 이전 요소에 대한 계산의 반환 값을 전달 , 누산기로 값을 누적
  const totalExpence = expenseList.reduce((acc, item) => {
    return acc + item.price;
  }, 0);
  const income = useSelector((store) => store.expense.income);
  // 잔액을 계산한다.
  const balance = income - totalExpence;
  return (
    <>
      <div>
        <span>총 지출 : </span>
        <span>${totalExpence}</span>
      </div>
      <div>
        <span>잔액 : </span>
        <span>$ {balance}</span>
      </div>
    </>
  );
}
