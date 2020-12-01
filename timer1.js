 
let input = [10, 3, 5, 15, 9];

input.forEach(element => {
  setTimeout(() => {
    process.stdout.write(".");
  }, element * 1000);
});