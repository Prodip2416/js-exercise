var dateobj = new Date('October 13, 1996 05:35:32:00');

dateobj.setMilliseconds(1006);
var B = dateobj.getMilliseconds();
var C = dateobj.getSeconds();

console.log(B);
console.log(C); 

// Result
// 6
// 33
