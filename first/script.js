//fundamentals of javascript

//arrays
var arr = [1, 2, 3, 4, 'hi', {}, true, function () {}, []]; //arrays in javascript can have different types of values

//foreach
arr.forEach(function (val) {
  //val=1,2,3,... (transverses through the array)
  console.log(val + ' hello');
});

//map: creates another another which has the same number of element as the array which has been mapped such that a given operation is applied to each element of the original array(the one that is mapped) to get a new array with the desired elements.
//differenece between map and foreach: map creates a new array itself
var a = [1, 2, 3, 4];
var ans1 = a.map(function (val) {
  //return 13; //[13,13,13,13]
  return val * 2;
});
console.log(ans1);

//filter: used when the new array which is to be created can be smaller than or equal to the size of the given array on whose elements we plan to apply some condition or operation. Gives a new array like map
var ans2 = arr.filter(function (val) {
  if (val >= 3) {
    return true; //filter returns the element into the array only when the given condition is true
  } else {
    return false;
  }
});
console.log(ans2);

//find: finds given value from an array that satisfies a given condition. Returns the first occurance of the element. If element not found, it returns undefined.
var ans3 = arr.find(function (val) {
  if (val === 2) return val;
});
console.log(ans3);

//indexof: finds the index(starting from zero) of a given element. If element not present in array, it returns -1.
var ans4 = arr.indexOf(2);
console.log(ans4);

//objects
{
} //a blank object
var obj1 = {
  name: 'Megha',
  age: 19,
}; //objects are anything in the format {key:value} ie key-value pairs
obj1.name;
obj1['name']; //ways to access the properties inside the object
obj1.age = 20; //changes the property value
Object.freeze(obj1); //freezes the object such that the object cant be modified
obj1.age = 25; //wont affect the age. it remains 20

//how to find out the length of a function
function lengthfinder(a, b, c, d) {} //length=4
function lengthfinder2() {} //length=0
//length of a function= number of arguments
console.log(lengthfinder.length);
console.log(lengthfinder2.length);
//functions are objects in javascript even though typeof function gives 'function' as output

//function return
function newfunc() {
  return 13; //this line returns '13' to line no 68
}

newfunc(); //when this line is executed, the control flows to line no 63 from 68.

//async js coding

//note: to use await, you do not need an async funtion(some modifications needed in system)
/*
var blob = await fetch('https://randomuser.me/api/');
var res = blob.json();

console.log(res);
*/

//for all the code which are asynchronous in nature, push it to side stack and execute the next lines of code if they are synchronous in nature. When the synchronous code is done executing, check if the asynchronous code is completed or not. If it is, then bring it to main stack and run it
async function abcd() {
  var blob = await fetch('https://randomuser.me/api/'); //fetch is asynchronous(default) by nature (non-blocking)
  var ans = await blob.json();
  console.log(ans.results[0].name);
}
abcd();
