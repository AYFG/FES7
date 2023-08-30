let hello = "first hello";
// hello = "second hello";

// let 재정의 가능

if (true) {
  let hello = "second hello";
  console.log(hello); //second hello
}
console.log(hello); // first hello
