var walk = require('./walk')
var spiralArray = []

function spiral(n) {
  if (n == 1) {return [[1]]}
  else {
    spiralArray = spiral(n-1)
    var start = (n-1)*(n-1) + 1
    if (n%2 === 0) {
      start = walk.Down(spiralArray, start)
      walk.Left(spiralArray,start)
    }
    else {
      start = walk.Up(spiralArray, start)
      walk.Right(spiralArray, start)
    }
  }
  return spiralArray
}

console.log(spiral(3))
