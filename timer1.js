 
let input = [1, -1, 3];

input.forEach(element => {
  if (element >= 0 && typeof element === "number") {
    setTimeout(() => {
      process.stdout.write(".");  //(`${element}`)
    }, element * 1000);
  }
});