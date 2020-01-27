(function () {
  console.info('Hello');

  function* foo(){
    let x = 1;
    yield x++;
    yield x++;
    yield x++;
  }

  // const it = foo();
  // console.info(it.next());


  for(let it of foo()){
    console.info(it.next());
  }

  function* fibonacci() {
    let [prev, curr] = [0, 1];
    for( ;; ) {
      [prev, curr] = [curr, prev+curr];
      yield curr;
    }
  }

  let fib = fibonacci();
  console.info(fib.next());
  console.info(fib.next());
  console.info(fib.next());
  console.info(fib.next());

}());
