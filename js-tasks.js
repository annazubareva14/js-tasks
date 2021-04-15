////// 4

const mixedArray = [3,13,74,14,66,15,22,4];

function isEven(num) {
    if (num % 2 === 0) 
    return true;
}

console.log (mixedArray.filter(isEven));

////// с воркшопа

const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = num => {
    return num % 2 === 0;
}

const filterArray = ( arrayToFilter, filterFn ) => {
    const filteredArray = [];

  arrayToFilter.forEach(num => {
    if (filterFn(num)) {
      filteredArray.push(num);
    }
  })

  return filteredArray;
}

console.log(filterArray(mixedArray, isEven));

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


///////// 3 с воркшопа

const path = "/users/download/index.html"

const isHtml = path => {
  const requiredExt = ".html";
  const pathExt = path.slice(-5);

  return pathExt === requiredExt
}

console.log(isHtml(path));

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

////// 1 с воркшопа
const string = "Привет! Как дела?";

const vowels = ["у", "е", "ы", "а", "о", "э", "ё", "я", "и"];

const getVowels = stringToFilter => {
  let extractedVowels = "";

  for (let i = 0; i < stringToFilter.length; i++) {
    const currentLetter = stringToFilter[i].toLowerCase();

    if (vowels.includes(currentLetter)) {
      extractedVowels += currentLetter;
    }
  }

  return extractedVowels;
}

console.log(getVowels(string));


//////////с воркшопа

const workers = [
    { name: "John", salary: 500 },
    { name: "Mike", salary: 1300 },
    { name: "Linda", salary: 1500 },
  ];
  
  const getWorthyWorkers = (workersArr) => {
    const worthyWorkers = [];
  
    // for (let i = 0; i < workersArr.length; i++) {
    //   const currentWorker = workersArr[i];
  
    //   if (currentWorker.salary > 1000) {
    //     worthyWorkers.push(currentWorker.name);
    //   }
    // }
    
    workersArr.forEach(currentWorker => {
      if (currentWorker.salary > 1000) {
        worthyWorkers.push(currentWorker.name)
      }
    })
  
    return worthyWorkers;
  };
  
  console.log(getWorthyWorkers(workers));