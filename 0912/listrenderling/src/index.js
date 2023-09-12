import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
import Userlist from "./Userlist";
import DeleteButton from "./DeleteButton";
import Counter from "./Counter";
import AnimalList from "./AnimalList";
import AnimalListReview from "./AnimalListReview";
import App4 from "./App4";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App4 />);
