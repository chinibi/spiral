module.exports.DownAndLeft = function (spiralArray,n) {
  spiralArray.forEach(function(row) {
    row.push(n)
    n++
  })
  var newRow = []
  var width = spiralArray[0].length
  for (var i=0; i<width; i++) {
    newRow.unshift(n)
    n++
  }
  spiralArray.push(newRow)
  return spiralArray
}

module.exports.Left = function (spiralArray,n) {
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
  for(var i = spiralArray.length-1; i >= 0; i--){
    spiralArray[i].unshift(n)
    n++
  }
  var topArr = []
  for (var i = 0; i < spiralArray[0].length; i++ ) {
    topArr.push(n)
    n++
  }
  spiralArray.unshift(topArr)
  return spiralArray
}

module.exports.Right = function (spiralArray, n) {
  var topArr = []
  for (var i = 0; i < spiralArray[0].length; i++ ) {
    topArr.push(n)
    n++
  }
  spiralArray.unshift(topArr)
  return spiralArray
}
