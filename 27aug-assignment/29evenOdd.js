// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let even = 0;
let odd = 0;
for (i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    // console.log(i);
    even = even + i;
  } else {
    odd = odd + i;
  }
}
console.log(even);
console.log(odd);
