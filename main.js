function doSomething() {
  console.log("start!");
  let a = 3;
  let b = 2;

  if (a > b) {
    console.log("a is bigger than b!");
    return;
  }

  console.log("I am the last console.log!"); //실행되지 않음
}

doSomething();
