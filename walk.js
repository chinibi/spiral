module.exports.DownAndLeft = function (spiralArray,n) {
  // down
  spiralArray.forEach(function(row) {
    row.push(n)
    n++
  })
  // left
  var newRow = []
  var width = spiralArray[0].length
  for (var i=0; i<width; i++) {
    newRow.unshift(n)
    n++
  }
  spiralArray.push(newRow)
  return spiralArray
}

module.exports.UpAndRight = function (spiralArray, n) {
  // up
  for(var i = spiralArray.length-1; i >= 0; i--){
    spiralArray[i].unshift(n)
    n++
  }
  // right
  var topArr = []
  for (var i = 0; i < spiralArray[0].length; i++ ) {
    topArr.push(n)
    n++
  }
  spiralArray.unshift(topArr)
  return spiralArray
}
