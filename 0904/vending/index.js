import ColaGenerator from "./JS/colaGenerator";

const colaGenerator = new ColaGenerator();
await colaGenerator.loadData(); // top level await
colaGenerator.setup();
