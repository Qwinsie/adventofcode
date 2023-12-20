import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("strategy.txt");
    console.log(`Answer: ${start(data)}`);
})();

function start()
{
    
}

const fs = require('fs')
fs.readFile('data.txt', (err, data) => {
    if(err) throw err;
    data = data.toString()
    data.split(" ")
    data = data.split("\r");
    Init(data)
})

let regex = /[0-9]/g;

let words = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']

function SearchDigit(line) {
    for (let i = 0; i < line.length; i++) {
        if (line[i] == line[i].match(regex)) {
            return line[i];
        } else {
            console.log(SearchWord(line[i]))
        }
    }
}


function SearchWord(line)
{
    let options = []
    words.forEach(word => {
        if (line.includes(word)) {
            options.push(SearchWord(line))
            return options;
        } else {
            return false;
        }
    });
}

function Init(data){
    let answer = CurrentLine(data, 0, 0)
    // console.log(answer)
}

function CurrentLine(data, n, answer) {
    if (data.length == n) {
        return answer;
    }
    line = data[n]
    let firstDigit = SearchDigit(line)
    line = line.split("").reverse().join("")
    let lastDigit = SearchDigit(line)

    answer = Number(answer) + Number(firstDigit + lastDigit)
    return CurrentLine(data, n+1, answer)
}