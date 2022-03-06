// custom reduce function

const numbers = [1,2,3]

const sumReducer = (initialValue, current) => initialValue + current;

const reduce = (reducer, initialValue, array) => {
  let value = initialValue;

  for(let i = 0; i < array.length; i++) {
    let currentValue = array[i]
    value = reducer(value, currentValue)
  }

  return value;
}

const sumOfNumbersCustom = reduce(sumReducer, 0, numbers)

console.log("Custom reduce function, " + sumOfNumbersCustom);