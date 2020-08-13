const arr = [1000,20,5,100,1,200,40,29,2];

for (let item of arr) {
  setTimeout(()=> console.log(item), item);
}