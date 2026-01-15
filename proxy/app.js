const user = {
  name:"jen",
  age:40,
  password:"123",
}

const proxyUser = new Proxy(user, {
  get(target, prop){
    if(prop === 'password'){
      throw new Error("Access Denied");
    }
    return target[prop]
  },

  set(target, prop, value){
    return target[prop] = value;
  }
});

// console.log(proxyUser.name);
proxyUser.name = "kiya";

console.log(proxyUser);