// Use for loop to iterate from 0 to 100 and print only prime numbers

for (var n = 0; n <= 100; n++) {
  var prime = true;
  for (var j = 2; j < n; j++) {
    if (n % j == 0) {
      prime = false;
      break;
    }
  }
  if (n >= 2 && prime) {
    console.log(n);
  }
}
