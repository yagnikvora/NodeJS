const celToFeh = (val) => {
    const result = (val * 9 / 5) + 32;
    return result;
}

const fehToCel = (val) => {
    const result = (val - 32) + 5 / 9;
    return result;
}

const area = (val) => {
    const result = 3.14 * val * val;
    return result;
}

const isOddEven = (val) => {
    if (val % 2 == 0)
        return ("Number is Even")
    else
        return ("Number is Odd")

}

const isPrime = (val) => {
    for (i = 2; i < val / 2; i++) {
        if (val % i === 0)
            return "Number is not Prime";
    }
    return "Number is Prime";
}

const isArmstrong = (val) => {
    len = val.toString().length;
    temp = val;
    sum = 0;
    while (temp > 0) {
        digit = temp % 10;
        sum = sum + Math.pow(digit, len);
        temp = parseInt(temp / 10);
    }
    if (sum == val)
        return "Number is Armstrong";
    else
        return "Number is not Armstrong";
}

const noOfDigit = (val) => {
    return val.toString().length;
}

const sumOfDigit = (val) => {
    str = val.toString();
    sum = 0;
    for (i of str)
        sum += parseInt(i);
    return "Sum of Digits " + sum;
}

const checkPN = (val) => {
    if (val < 0)
        return "Number is Negative"
    else
        return "Number is Positive"
}

const maxTwo = (num1, num2) => {
    if (num1 > num2)
        return num1;
    else
        return num2;
}

const maxThree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3)
        max = num1;
    else if (num2 > num3)
        max = num2;
    else
        max = num3;
    return max;
}

const checkPalindrome = (val) => {
    rev = val.split("").reverse().join("");

    if (rev === val)
        return "Number is palindrome";
    else
        return "Number is not palindrome";
}

const fibonacci = (val) => {
    a = 0;
    b = 1;
    seriese = "" + a + "," + b + ",";
    for (i = 2; i < val; i++) {
        temp = a + b;
        seriese += temp + ",";
        a = b;
        b = temp;
    }
    return seriese;
}

const isPerfact = (val) => {
    sum = 0
    for (i = 1; i < val; i++) {
        if (val % i === 0)
            sum += i;
    }
    if (val == sum) 
        return "Perfact";
    else
        return "Not Perfact";
}

const isHappy = (val) => {
    function getSum(num) {
        sum = 0;
        while (num > 0) {
            digit = num % 10;
            sum += digit * digit;
            num = parseInt(num / 10);
        }
        return sum;
    }

    const set = new Set();

    while (val !== 1 && !set.has(val)) {
        set.add(val);
        val = getSum(val);
    }

    if (val === 1) 
        return "Number is Happy";
    else 
        return "Number is not Happy";
}

module.exports = { celToFeh, fehToCel, area, isOddEven, isPrime, isArmstrong, noOfDigit, sumOfDigit, checkPN, maxTwo, maxThree, checkPalindrome, fibonacci, isPerfact, isHappy }
