var isPrime = function (num) {
    var isPrime = true;
    var num1 = parseInt(num);
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
        }
    }
    if (isPrime) {
        alert('Prime number');
    }
    else {
        alert('Not Prime number');
    }
};
isPrime(prompt('Enter the number'));
