let arr1 = [
  "india",
  "banana",
  "chair",
  "andhra pradesh",
  "java script",
  "react",
  "banana",
  "react",
  "chair",
  6,
  7,
  6,
  8,
  9,
  4,
  4,
  5,
  9,
];
let unique = () => {
  let arr = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr.includes(arr1[i])) {
      arr.push(arr1[i]);
    }
  }
  console.log(arr);
};
unique();
