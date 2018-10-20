const calcObject = {
    add(a,b){
      return a + b;
    },
    sub(a,b){
      return a- b;
    }
  }
  const calcObject2 = {
    mul(a,b){
      return a * b;
    }
  }
  const allObject = {calcObject,calcObject2};
  module.exports = allObject;