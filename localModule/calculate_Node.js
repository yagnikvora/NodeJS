const fs = require('fs');
const http = require('http');
const calc = require('./index')
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end(fs.readFileSync("temperature.html", "utf-8"));
    }
    else if (req.url.includes('/ctof/')) {
        res.end("Fehrenhit : " + calc.celToFeh(req.url.split("/")[2]));
    }
    else if (req.url.includes('/ftoc/')) {
        res.end("Fehrenhit : " + calc.fehToCel(req.url.split("/")[2]));
    }
    else if (req.url.includes('/areaOfCircle/')) {
        res.end("Fehrenhit : " + calc.area(req.url.split("/")[2]));
    }
    else if (req.url.includes('/isOddEven/')) {
        res.end("" + calc.isOddEven(req.url.split("/")[2]));
    }
    else if (req.url.includes('/isPrime/')) {
        res.end("" + calc.isPrime(req.url.split("/")[2]));
    }
    else if (req.url.includes('/isArmstrong/')) {
        res.end("" + calc.isArmstrong(req.url.split("/")[2]));
    }
    else if (req.url.includes('/noOfDigit/')) {
        res.end("" + calc.noOfDigit(req.url.split("/")[2]));
    }
    else if (req.url.includes('/sumOfDigit/')) {
        res.end("" + calc.sumOfDigit(req.url.split("/")[2]));
    }
    else if (req.url.includes('/checkPN/')) {
        res.end("" + calc.checkPN(req.url.split("/")[2]));
    }
    else if (req.url.includes('/maxTwo/')) {
        res.end("" + calc.maxTwo(req.url.split("/")[2], req.url.split("/")[3]));
    }
    else if (req.url.includes('/maxThree/')) {
        res.end("" + calc.maxThree(req.url.split("/")[2], req.url.split("/")[3], req.url.split("/")[4]));
    }
    else if (req.url.includes('/isPalindrome/')) {
        res.end("" + calc.checkPalindrome(req.url.split("/")[2]));
    }
    else if (req.url.includes('/fibonacci/')) {
        res.end("" + calc.fibonacci(req.url.split("/")[2]));
    }
    else if (req.url.includes('/isPerfact/')) {
        res.end("" + calc.isPerfact(req.url.split("/")[2]));
    }
    else if (req.url.includes('/isHappy/')) {
        res.end("" + calc.isHappy(req.url.split("/")[2]));
    }
    else {
        res.end("Url not found!!");
    }
});

server.listen(3000, () => {
    console.log("Server started @http://localhost:3000");
});