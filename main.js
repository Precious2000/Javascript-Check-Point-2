function findMinMax(arr) {
    return {
      max: Math.max(...arr),
      min: Math.min(...arr)
    }
  }
  const arr = [1, 2, 3, 4, 5];

  console.log(findMinMax(arr));