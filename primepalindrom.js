var nextPrime = function(num) {
    for (let i = 3; i * i <= num; i++) {
        if (num % i === 0) {
            num += 2;
            i = 2;
        }
    }
    return num.toString();
}

var primePalindrome = function(N) {
    if (N <= 2)
        return 2;
    if (N % 2 !== 1)
        N++;
    
    let prime = nextPrime(N);
    let primeint = parseInt(prime, 10);
    
    for (let i = 0; i <= prime.length / 2; i++) {
        if (prime[i] !== prime[prime.length - i - 1]) {
            prime = nextPrime(primeint + 2, 10);
            primeint = parseInt(prime, 10);
            i = -1;
        }
    }
    return primeint;
}

console.log(primePalindrome(9989900));