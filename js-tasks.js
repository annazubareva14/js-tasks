////// 4

const mixedArray = [3,13,74,14,66,15,22,4];

function isEven(num) {
    if (num % 2 === 0) 
    return true;
}

console.log (mixedArray.filter(isEven));

///// 3
const path = "/users/download/index.html";
console.log(path.endsWith('html'));

//// 3
const path = "/users/download/index.html"
if (path.indexOf('html') !== -1) {
    console.log('true');
} else {
    console.log('false');
}

////// 1 черновик

var vowels = "аеёиоуыэюя";

const string = "Привет! Как дела?";

function getVowels(string) {
    var onlyVowels = "";
    for (var i = 0; i < string.lenght; i++) {
        if (string.indexOf(vowels[i]) !== -1) {
            return onlyVowels.join(i);
        }
    }
}

console.log(getVowels(string));

////// 1 работает


const string = "Привет! Как дела?";
let vowels = /[аеёиоуыэюя]/gi;
let getVowels = string.match(vowels);

console.log(getVowels);

//////