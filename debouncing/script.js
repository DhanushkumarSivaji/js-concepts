function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      console.log("args",args)
      console.log("this",this)

      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }
  function saveInput(val){
    console.log('Saving data',val);
  }
  const processChange = debounce(() => saveInput("hello"));  
