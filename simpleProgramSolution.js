function foo() {
  // The function scope
  let count = 0;
  console.log(count); // logs 0
}
foo();
console.log(count);

function foo() {
  // "foo" function scope
  let count = 0;
  console.log(count); // logs 0
}
function bar() {
  // "bar" function scope
  let count = 1;
  console.log(count); // logs 1
}
foo();
bar();
