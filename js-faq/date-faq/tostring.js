var dateobj1 = new Date('1'); 
   var dateobj2 = new Date('2, 3'); 
   var dateobj3 = new Date('4, 5, 6'); 
   var dateobj4 = new Date('7, 8, 3, 4'); 
   var dateobj5 = new Date('4, 5, 6, 11:00:12'); 
   var dateobj6 = new Date('12, 5, 4, 0:0'); 
  
   // Contents of above date objects is converted 
   // into strings using toString() method. 
   var B = dateobj1.toString(); 
   var C = dateobj2.toString(); 
   var D = dateobj3.toString(); 
   var E = dateobj4.toString(); 
   var F = dateobj5.toString(); 
   var G = dateobj6.toString(); 
  
   // Printing the converted string. 
   console.log(B); 
   console.log(C); 
   console.log(D); 
   console.log(E); 
   console.log(F);

   // Result

// Mon Jan 01 2001 00:00:00 GMT+0600 (Bangladesh Standard Time)
// Sat Feb 03 2001 00:00:00 GMT+0600 (Bangladesh Standard Time)
// Wed Apr 05 2006 00:00:00 GMT+0600 (Bangladesh Standard Time)
// Invalid Date
// Wed Apr 05 2006 11:00:12 GMT+0600 (Bangladesh Standard Time)