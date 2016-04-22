var walk = require('./walk')
var spiralArray = []

function spiral(n) {
  if (n == 1) {return [[1]]}
  else {
    spiralArray = spiral(n-1)
    var start = (n-1)*(n-1) + 1
    if (n%2 === 0) {
      walk.DownAndLeft(spiralArray, start)
    }
    else {
      walk.UpAndRight(spiralArray, start)
    }
  }
  return spiralArray
}

console.log(spiral(5))
