// task 1

// const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];

// let positiveNums = 0;
// let negativeSum = 0;
// let newSum = [];

// for (let i = 0; i < nums.length; i++) {
//   if (nums[i] >= 0) {
//     positiveNums += 1;
//   }
//   if (nums[i] < 0) {
//     negativeSum += nums[i];
//   }
// }
// newSum.push(positiveNums, negativeSum);

// console.log(newSum);

//task 2

// const nums = [12, 43, 87, 29, 56, 74, 91, 33, 68, 25];

// for (let i = 0; i < nums.length; i++) {
//   nums[i] *= 2;
// }

// const newArray = nums.filter((num) => num % 3 == 0);

// console.log(newArray);

// task 3

// const nums = [19, 5, 42, 2, 77];

// nums.sort((a, b) => a - b);
// console.log(nums[0] + nums[1]);

// task 4

// function getLargerNumbers(arr1, arr2) {
//   const resultArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (arr1[i] >= arr2[i]) resultArray.push(arr1[i]);
//     else resultArray.push(arr2[i]);
//   }

//   return resultArray;
// }

// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// console.log(getLargerNumbers(arr1, arr2));

// task 5

const characters = [
  {
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    eye_color: 'blue',
    gender: 'male',
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    eye_color: 'yellow',
    gender: 'male',
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    eye_color: 'brown',
    gender: 'female',
  },
  {
    name: 'Anakin Skywalker',
    height: '188',
    mass: '84',
    eye_color: 'blue',
    gender: 'male',
  },
];

// const eyeColors = characters.reduce((acc, curr) => {
//   const color = curr.eye_color;
//   console.log(curr);
//   if (!acc[color]) acc[color] = 1;
//   else acc[color] += 1;
//   return acc;
// }, {});

// console.log(eyeColors);

//! names
// const names = characters.reduce((acc, curr) => {
//   acc.push(curr.name.split(' ')[0]);
//   return acc;
// }, []);

// console.log(names);

//!last names
const lastNames = characters.reduce((acc, curr) => {
  acc.push(curr.name.split(' ')[1]);
  return acc;
}, []);

console.log(lastNames);
