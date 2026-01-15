
function negativeIndex(arr){
  return new Proxy(arr, {
    get(target, prop){
      const index = Number(prop)
      if(index < 0){
        return target[target.length + index]
      }
      return target[index]
    }
  })
}

const nums = negativeIndex([1,2,3,4,5]);
console.log(nums[-1]);