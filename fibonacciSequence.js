function fibonacci(n) {
    // Base cases
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

    // Recursive case
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Example usage:
const n = 9;
console.log(`Fibonacci number at position ${n} is ${fibonacci(n)}`);  
