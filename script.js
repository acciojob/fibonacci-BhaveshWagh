function fibonacci(num) {
// your code here
	   //  if (num < 0 || num > 50) {
    //     throw new Error("Input should be between 0 and 50 inclusive.");
    // }

    if (num === 0) return 0;
    if (num === 1) return 1;

    let a = 0, b = 1;
    for (let i = 2; i <= num; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }
    return a;
}

module.exports = fibonacci;
