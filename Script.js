var obj = {num: 2} ;
var obj2 = {num:5};
var addToThis = function(a,b,c){
return this.num + a + b + c;
};

//console.log(addToThis.ca11(obj, 1, 2, 3));
// functionname. call(obj, functionargumentes);
var arr = [1,2,3];
console.log(addToThis.apply(obj, arr));
console.log(addToThis.apply(obj2, arr));

var bound = addToThis.bind(obj);

console.log(bound(1,2,3));

console.dir(bound);