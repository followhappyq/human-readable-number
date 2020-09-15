module.exports = function toReadable(number) {
    const one = [
        "",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];

    const ten = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    if (number === 0) return "zero";
    if (number < 20) return one[number];

    if (number < 100) {
        return `${ten[parseInt(number / 10)]} ${
            number % 10 !== 0 ? one[number % 10] : ""
        }`.trim();
    }

    const numberStr = number.toString();

    if (numberStr[1] === "0" && numberStr[2] === "0") {
        return `${one[parseInt(number / 100)]} hundred`;
    }

    return `${one[parseInt(number / 100)]} hundred ${toReadable(
        parseInt(numberStr[1] + numberStr[2])
    )}`.trim();
};
