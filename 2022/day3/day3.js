import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("rucksacks.txt");
    console.log(`Answer: ${start(data)}`);
})();

let alphabet = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

function start(rucksacks) {
    let priorities = 0
    for (let i = 0; i < rucksacks.length; i++) {
        let first = rucksacks[i].slice(0, rucksacks[i].length / 2 ) 
        let last = rucksacks[i].slice(rucksacks[i].length / 2 ) 
        let duplicate = findDuplicate(0, first, last, 0)
        
        console.log(first + " " + last + " " + alphabet.indexOf(duplicate));
        
        priorities = priorities + Number(alphabet.indexOf(duplicate))
    }
    return priorities
}

function group(first, second, third) {
    
}

function findDuplicate(n, first, last, i) {
    i = n == first.length ? i+1 : i = i;
    n = n == first.length ? 0 : n = n;
    return first[i] == last[n] ? first[i] : findDuplicate(n+1, first, last, i);
}