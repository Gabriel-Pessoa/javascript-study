class Math {
    sum(a, b, callback) {
        setTimeout(() => {
            callback(a + b)
        }, 2500);
        //return a + b;
    }

    multiply(a, b) {
        return a * b;
    }

    printSum(req, res, a, b) {
        console.log(res.load('index', a + b));
    }
}

module.exports = Math;