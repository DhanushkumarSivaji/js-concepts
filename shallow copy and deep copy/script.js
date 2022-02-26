let a = [1,2,3,4,5]

let b = [...a];

b.push(6);

console.log("a",a)
console.log("b",b)

const obj1 = {
    a: 1,
    b: "hello",
    c: {
      d: "world"
    },
    e: {
      f: {
        g: 100
      }
    }
  };

const obj2 = JSON.parse(JSON.stringify(obj1))

obj1.c.d = "Dhanush"

console.log("obj1",obj1)
console.log("obj2",obj2)

