var dateobj =  new Date('October 13, 1996 05:35:32 GMT-3:00'); 

dateobj.setUTCMinutes(52); 
var B = dateobj.getUTCMinutes(); 

console.log(B); 

// Result
//52