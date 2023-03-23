// The following is an array of 10 students ages:
//     => const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
//     - Sort the array and find the min and max age
//     - Find the median age(one middle item or two middle items divided by two)
//     - Find the average age(all items divided by number of items)
//     - Find the range of the ages(max minus min)
//     - Compare the value of (min - average) and (max - average), use abs() method

const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

ages.sort();
console.log(ages);
// [19, 19, 20, 22, 24, 24, 24, 25, 25, 26];

const minAge = ages[0];
console.log(minAge);
const maxAge = ages[ages.length - 1];
console.log(maxAge);

let mid1 = ages[ages.length / 2];
console.log(mid1);
let mid2 = ages[Math.ceil((ages.length + 1) / 2)];
console.log(mid2);
let median = (mid1 + mid2) / 2;
console.log(median);

let avg = 0;
for (let i = 0; i < ages.length; i++) {
  avg = avg + ages[i];
}
let average = avg / 10;
console.log(average);

let range = ages.sort()[ages.length - 1] - ages.sort()[0];
console.log(range);

console.log(Math.abs(ages.sort()[0] - average));
console.log(Math.abs(ages.sort()[ages.length - 1] - average));
