
// You should implement your task here.

module.exports = function towelSort (matrix) {
if (matrix == undefined) return [];
let arrayNew = []
matrix.map(function(el, index) {
  if (index % 2 !== 0) {
    el.sort((a,b) => b - a)
    return el.map((elem) => arrayNew.push(elem))
  } else {
    return el.map((elem) => arrayNew.push(elem))
  }
  }
)
return arrayNew
}
