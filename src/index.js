module.exports = function toReadable (number) {
    let oneDigit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let tenToNineteen = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let dozens = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let stringNumber = number.toString();

    switch (stringNumber.length) {

        case 1: 
            return oneDigit[number];
        case 2:
            if ((number / 10) < 2) {
                return tenToNineteen[number % 10];
            } else if ((number % 10) !== 0) {
                return dozens[stringNumber[0]-2] + ' ' + oneDigit[stringNumber[1]];
            } else {
                return dozens[stringNumber[0]-2];
            }
        case 3: 
            if ((number % 100) === 0) {
                return oneDigit[stringNumber[0]] + ' hundred';
            } else if ((number % 10) === 0 && parseInt(stringNumber.slice(-2), 10) !== 10)  {
                return oneDigit[stringNumber[0]] + ' hundred ' + dozens[stringNumber[1]-2];
            } else if (parseInt(stringNumber.slice(-2), 10) < 20 && parseInt(stringNumber.slice(-2), 10) > 9) {
                return oneDigit[stringNumber[0]] + ' hundred ' + tenToNineteen[stringNumber[2]];
            } else if (parseInt(stringNumber[1], 10) === 0) {
                return oneDigit[stringNumber[0]] + ' hundred ' + oneDigit[stringNumber[2]];
            }

        default:
            return oneDigit[stringNumber[0]] + ' hundred ' + dozens[stringNumber[1]-2] + ' ' + oneDigit[stringNumber[2]];
    }
    
//
   
}

// let number = 710;
// console.log(toReadable(number));
