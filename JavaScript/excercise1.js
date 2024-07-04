/*Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

Examples:
Input: 42145 Output: 54421

Input: 145263 Output: 654321

Input: 123456789 Output: 987654321*/

//We use this to solve the problem: https://www.freecodecamp.org/espanol/news/ordenar-arreglos-en-javascript-como-usar-el-metodo-sort/

let numConverter = n => Number(n);

function transformHightestNumber(num = 0){

    let iter = 0;

    iter = Array.from(String(num),numConverter);
        console.log(iter);

    iter.sort((a,b) => {return b-a})
        

    num = '';

    for(let i = 0; i < iter.length; i++){

        iter[i].toString();

        num += iter[i];

    }
    
    Number(num);
        console.log(typeof(num));

    return num;

    }

console.log(transformHightestNumber(42145));