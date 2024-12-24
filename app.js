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

