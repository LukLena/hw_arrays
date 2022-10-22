function compareArrays(arr1, arr2) {
 if (arr1.length !== arr2.length) {
     return false;
 }
    return arr1.every((item,index) => item === arr2[index] )
}

function advancedFilter(arr) {
   let resultArr = arr.filter(element => element > 0).filter(element => element % 3 == 0).map(element => element * 10)

  return resultArr; // array
}
