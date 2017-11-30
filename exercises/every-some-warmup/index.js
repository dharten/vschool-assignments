function every(arr, callBack) {
  for (let i = 0; i < arr.length; i++) {
    if (!callBack(arr[i])) {
      return false
    };
  }
  return true;
}

  function some(arr, callBack) {
    for (let i = 0; i < arr.length; i++) {
      if (callBack(arr[i])) {
        return true
      };
    }
    return false;
  }

  function callBack(singleNumber) {
      return typeof singleNumber === "number"
    }

console.log("every", every([1, 2, "3"], callBack));
console.log("some", some(["1", 2, "3"], callBack));
