const calc = require('./index');
const express = require('express');
const fs = require('fs');
const app = express();

app.get("/", (req, res) => {
    res.write(fs.readFileSync("temperature.html", "utf-8"));
    res.end();
})

app.get("/ctof/:cel", (req, res) => {
    res.write("Fehrenhit : " + calc.celToFeh(req.params.cel));
    res.end();
})

app.get("/ftoc/:cel", (req, res) => {
    res.write("Celcius : " + calc.fehToCel(req.params.cel));
    res.end();
})

app.get("/areaOfCircle/:r", (req, res) => {
    res.write("Area of Circle : " + calc.area(req.params.r));
    res.end();
})

app.get("/isOddEven/:r", (req, res) => {
    res.write(calc.isOddEven(req.params.r));
    res.end();
})

app.get("/isPrime/:r", (req, res) => {
    res.write(calc.isPrime(req.params.r));
    res.end();
})

app.get("/isArmstrong/:r", (req, res) => {
    res.write(calc.isArmstrong(req.params.r));
    res.end();
})

app.get("/noOfDigit/:r", (req, res) => {
    res.write(""+calc.noOfDigit(req.params.r));
    res.end();
})

app.get("/sumOfDigit/:r", (req, res) => {
    res.write("" + calc.sumOfDigit(req.params.r));
    res.end();
})

app.get("/checkPN/:r", (req, res) => {
    res.write("" + calc.checkPN(req.params.r));
    res.end();
})

app.get("/maxTwo/:n1/:n2", (req, res) => {
    res.write("" + calc.maxTwo(req.params.n1,req.params.n2));
    res.end();
})

app.get("/maxThree/:n1/:n2/:n3", (req, res) => {
    res.write("" + calc.maxThree(req.params.n1, req.params.n2, req.params.n3));
    res.end();
})

app.get("/isPalindrome/:val",(req,res)=>{
    res.write("" + calc.checkPalindrome(req.params.val));
    res.end();
})

app.get("/fibonacci/:val", (req, res) => {
    res.write("" + calc.fibonacci(req.params.val));
    res.end();
})

app.get("/isPerfact/:val", (req, res) => {
    res.write("" + calc.isPerfact(req.params.val));
    res.end();
})

app.get("/isHappy/:val", (req, res) => {
    res.write("" + calc.isHappy(req.params.val));
    res.end();
})

app.listen(3000, () => {
    console.log("Server Started @http:/localhost:3000")
})
