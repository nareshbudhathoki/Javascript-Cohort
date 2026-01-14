const arr = [1,2,4,5,6,7,8,35];

const newEven = arr.filter((Element) => (Element%2===0))

console.log(newEven);


const newarr = newEven.filter((Element) => Element>2);

console.log(newarr);