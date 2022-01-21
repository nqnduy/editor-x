function create() {
  let x = 0;
  function increase() {
    return ++x;
  }
  return increase;
}
console.log(increase());
