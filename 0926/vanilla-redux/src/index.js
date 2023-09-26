import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import rootReducer from "./modules";
// 컴포넌트에서 store에 접근 할 수 있게 {Provider}를 react-redux에서
import { Provider } from "react-redux";

const store = createStore(rootReducer);
console.log(store.getState());

const container = document.getElementById("root");
const root = createRoot(container);

// Provider 를 통해 APP 컴포넌트 안의 모든 컴포넌트가 store에 접근할 수 있도록 한다.
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

/////////////////////////////////////////////////////////////////////////
// VANILLA JS

// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const number = document.getElementById("number");
// const quantity = document.getElementById("quantity");
// const totalPrice = document.getElementById("total");

// const PRICE = 17500;

// let count = 0;

// // UI update -text
// const updateResult = (c) => {
//   number.textContent = count;
//   quantity.textContent = c;
//   totalPrice.textContent = c * PRICE;
// };
// // State Change
// const addNumber = () => {
//     count += 1;
//     minus.disabled = false;
//     updateResult(count);
// };

// // State Change
// const substarctNumber = () => {
//     count -= 1;
//     plus.disabled = false;
//     updateResult(count);
// };

// // Init
// number.textContent = count;
// updateResult(count);

// // Event
// plus.addEventListener("click", addNumber);
// minus.addEventListener("click", substarctNumber);
////////////////////////////////////////////////////////////////////////////
// REDUX
// import { createStore } from "redux";

// const plus = document.getElementById("plus");
// const minus = document.getElementById("minus");
// const number = document.getElementById("number");
// const quantity = document.getElementById("quantity");
// const totalPrice = document.getElementById("total");

// const PRICE = 17500;

// // Action
// const addNumber = () => {
//   store.dispatch({ type: "ADD" });
// };
// const substarctNumber = () => {
//   store.dispatch({ type: "SUBSTRACT" });
// };

// function countReducer(state = 0, action) {
//   switch (action.type) {
//     case "ADD":
//       minus.disabled = false;
//       return state + 1;
//     case "SUBSTRACT":
//       return state - 1;
//     default:
//       return state;
//   }
// }

// // create Store
// const store = createStore(countReducer);

// // render 함수
// const handleWrite = () => {
//   number.textContent = store.getState();
//   quantity.textContent = store.getState();
//   totalPrice.textContent = store.getState() * PRICE;
//   console.log(store.getState());
// };

// // Update UI
// store.subscribe(handleWrite);

// // Event
// plus.addEventListener("click", addNumber);
// minus.addEventListener("click", substarctNumber);
