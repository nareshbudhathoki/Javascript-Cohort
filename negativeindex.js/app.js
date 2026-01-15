
function negativeIndex(arr){
  return new Proxy(arr, {
    get(target, prop){
      const index = Number(prop)
      if(index < 0){
        return target[target.length + index]
      }
      return target[index]
    },
    set(target, prop, value){
      const index = Number(prop);
      if(index < 0){
        target[target.length + index] = value;
      }else{
        target[index] = value;
      }
      return true;
    }
  })
}

const nums = negativeIndex([1,2,3,4,5]);
console.log(nums[-1]);
nums[-1] = 6;
nums[1] = 0;
console.log(nums);