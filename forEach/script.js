Array.prototype.myForEach = function(callback) {
    // callback here is the callback function
    // which actual .forEach() function accepts
    for (var i = 0; i < this.length; i++) {
      callback(this[i], i, this) // currentValue, index, array
    }
  }

  var logicAlbums = [
    'Bobby Tarantino',
    'The Incredible True Story',
    'Supermarket',
    'Under Pressure',
  ]

  logicAlbums.myForEach(function(word) {
    console.log(word)
  })