const foods = ["pizza", "burger", "fingerChips", "donuts", "springRoll"];
const numberArray = [12,324,213,4,2,3,45,4234];
const myArray = [11, 34, 20, 5, 53, 16];

// Progression 1:
const slice = (firstItem, lastItem) => {
  let modifiedFood = []
  for(let i = firstItem; i<lastItem-1; i++){
    modifiedFood.push(foods[i])
  }
  return modifiedFood;
}

// Progression 2:
const spliced = () => {
  foods.splice(2, 0, 'noodles', 'icecream')
  return foods
}

// Progression 3:
const isEven = (number) => {
  if(number%2==0){
    return true
  } else{
    return false
  }
}

const isPrime = (number) => {
  if(number<=1){
    return false
  } 
  for(let i=2; i<number; i++){
    if(number%i==0){
      return false
    }
  }
  return true
}

const checkNumber = (numberArray, operation) =>{
  modifiedArray = numberArray.filter(num => operation(num))
  return modifiedArray
}

// Progression 4:
const reject = (numberArray) => {
  return numberArray.filter(num => !isPrime(num))
}

const nonPrime = (numberArray) => {
  return reject(numberArray)
}

// Progression 5:
const isEvenUsingLambda = (number) => {
  if(number%2==0){
    return true
  } else{
    return false
  }
}


// Progression 6:
const squareNumber = (number) => {
  return number * number
}

const findSquareOfNumbers = (myArray) =>  {
  return myArray.map(squareNumber)
}

// Progression 7:
const multiply = (myArray) => {
  return myArray.reduce((multiplierValue, number) => multiplierValue*number
)}

const sumOfSquares = (myArray) => {
  return myArray.map(squareNumber).reduce((sum, number)=> sum + number)
}
