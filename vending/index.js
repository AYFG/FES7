import ColaGenerator from "./JS/colaGenerator.js";
import VendingMachineFunc from "./js/vendingMachineFunc.js";

const colaGenerator = new ColaGenerator();
// await colaGenerator.loadData(); // top level await
await colaGenerator.setup();

const vendingMachine = new VendingMachineFunc();
vendingMachine.setup();
