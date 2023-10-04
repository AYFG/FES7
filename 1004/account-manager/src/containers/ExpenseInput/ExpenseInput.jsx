import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addExpenseAction } from "../../store/expense/expense-slice";

export default function ExpenseInput() {
  const dispatch = useDispatch();
  // 지출 이름을 관리한다.
  const [name, setName] = useState("");
  // 지출 금액을 관리한다.
  const [price, setPrice] = useState(0);

  function submit(e) {
    e.preventDefault();
    dispatch(addExpenseAction({ name, price }));
  }

  return (
    <form onSubmit={submit}>
      <div>
        <label>
          지출 상품명:
          <input
            type="text"
            placeholder='예:"사과"'
            onChange={(e) => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          출 상품 금액:
          <input
            type="number"
            placeholder="예:5000"
            onChange={(e) => setPrice(parseInt(e.target.value))}
          />
        </label>
      </div>
      <button type="submit">추가</button>
    </form>
  );
}
