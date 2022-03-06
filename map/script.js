Array.prototype.mymap = function(callback) {
    const resultArray = [];
    for (let index = 0; index < this.length; index++) {
        resultArray.push(callback(this[index], index, this));
    }
    return resultArray;
}


var sample = [1,2,3]

var newSample = sample.mymap((val,i,arr) => val*2)

console.log("newSample",newSample)


//https://dev.to/dhilipkmr/implementing-our-own-array-map-method-in-javascript-553m