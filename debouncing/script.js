function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  function saveInput(){
    console.log('Saving data');
  }
  const processChange = debounce(() => saveInput());  


  function multiply(x) {
   return function(y){
     console.log(x * y)
   }
  }

  let multiplyByTwo = multiply(2)

  multiplyByTwo(3)