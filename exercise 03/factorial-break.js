let n = 10;
let factorial = 1;
let i = 1;
while(true) {
    factorial *= i;
    i++
    if(i > n) {
        break;
    }
}
console.log(factorial)
