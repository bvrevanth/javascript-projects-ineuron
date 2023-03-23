function bmiIndex(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5 && bmi > 0) {
    console.log("Underweight");
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Normal Weight");
  } else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Over Weight");
  } else {
    console.log("Obese");
  }
}
bmiIndex(80, 1);
bmiIndex(40, 7);
bmiIndex(80, 3);
bmiIndex(120, 4);
