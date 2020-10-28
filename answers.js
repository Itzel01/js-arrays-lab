// Question 1
function average() {
  // Write your code here
 function average(num){
  let arr = [num];
  for (let i = 0; i < num.length; i++){
    arr += num;
    return num[i];
    console.log(arr);
  }
}
average(2,3,5)
}

// Question 2
function combineArrays() {
  // Write your code here
}

// Question 3
function arrayPlusArray(arr1, arr2, ...more){
  //variable for concatenated arrayPlusArray
  let newArray = arr1.concat(arr2, ...more); 
  //variable that will hold the values of the new array
  let sum = 0;
  //for loop will iterate through the new array.
  for(let i = 0; i < newArray.length; i++){
    //Will reAdd the value for each index so it gets summed automatically.
    sum += newArray[i];
  }
  return sum;
};

arrayPlusArray([1, 2, 4], [4, 5, 6])

// Question 4
function abbrevName(name) {
  //Write your code here
  let initial = '';
  for(let i = 0; i < name.length; i++){
    if (name[i] === name.toUpperCase()){
      initial += name[i];
    }
  }
}
abbrevName('Sam Sam');

// Question 5
function makeTitle() {
  // Write your code here
}

// Question 6
function gimme() {
  // Write your code here
}

// Do NOT touch or write anything below this line
module.exports = {
  average,
  combineArrays,
  arrayPlusArray,
  abbrevName,
  makeTitle,
  gimme
};
