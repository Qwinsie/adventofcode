import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("2023/day1/data.txt");
    console.log(`Answer: ${findAnswer(data)}`);
})();

let regex = /[0-9]/g;

function SearchDigit(line) {
    for (let i = 0; i < line.length; i++) {
        if (line[i] == line[i].match(regex)) {
            return line[i];
        }
    }
}

function findAnswer(data){
    return CurrentLine(data, 0, 0)
}

function CurrentLine(data, n, answer) {
    if (data.length == n) {
        return answer;
    }
    let line = data[n]
    let firstDigit = SearchDigit(line)
    line = line.split("").reverse().join("")
    let lastDigit = SearchDigit(line)

    answer = Number(answer) + Number(firstDigit + lastDigit)
    return CurrentLine(data, n+1, answer)
}