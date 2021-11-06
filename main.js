let firstNum = null ;
let secondNum = null ;
let resultNum = null ;

const saveFirstNumber = (num) => {
  firstNum = parseInt(num)  
}

const saveSecondNumber = (num) => {
  secondNum = parseInt(num)  
}

const add = (numA, numB) => {
  const value = numA + numB
  return value
}

const subtract = (numA, numB) => {
  const value = numA - numB
  return value
}

const multiply = (numA, numB) => {
  const value = numA * numB
  return value
}

const divide = (numA, numB) => {
  const value = numA / numB
  return value
}

// const modulus = (numA, numB) =>{
//   const value = numA % numB
//   // console.log("modulus")
//   return value
// }
const changeOperation(chosenOperation) => {
  operation = chosenOperation
  console.log("operation")
  return changeOperation
}
