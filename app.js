const numbers = [
    19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,
  ];

const prime_element = []

for(let i = 0; i< numbers.length;i++){
    let prime = true;

    if (numbers[i]<2){
        prime = false
    }
    else{
        for(let j = 2;j<=Math.sqrt(numbers[i]);j++){
            if(numbers[i] % j === 0){
                prime= false;
                break;
            }
        }
    }
    if (prime){
        prime_element.push(numbers[i])
    }
}

console.log(prime_element)

const maxNumber = Math.max(...prime_element);
console.log(maxNumber)

const minNumber = Math.min(...prime_element);
console.log(minNumber)

let sum = 0

for(let i = 0; i< prime_element.length;i++){
    sum = sum + prime_element[i]
}
console.log(sum)