import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("rucksacks.txt");
    console.log(`Part 1 Answer: ${partone(data)} | Part 2 Answer: ${parttwo(data)}`);
})();

let alphabet = " abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

function partone(rucksacks) {
    let priorities = 0

    for (let i = 0; i < rucksacks.length; i++) {
        let firstHalf = rucksacks[i].slice(0, rucksacks[i].length / 2 ) 
        let lastHalf = rucksacks[i].slice(rucksacks[i].length / 2 ) 
        let itemType = findItemType(0, firstHalf, lastHalf, 0)

        priorities = priorities + Number(alphabet.indexOf(itemType))
    }
    return priorities
}

function parttwo(rucksacks) {
    let sum = 0

    for (let i = 0; i < rucksacks.length; i++) {
        let first = rucksacks[i]
        let second = rucksacks[i+=1] 
        let third = rucksacks[i+=1] 
        let badge = findBadge(first, second, third)

        sum = sum + Number(alphabet.indexOf(badge))
    }
    return sum
}

// Recursion function
function findItemType(n, first, last, i) {
    i = n == first.length ? i+1 : i = i;
    n = n == first.length ? 0 : n = n;
    return first[i] == last[n] ? first[i] : findItemType(n+1, first, last, i);
}

function findBadge(first, second, third) {
    for (let q = 0; q < first.length; q++) {
        for (let r = 0; r < second.length; r++) {
            for (let t = 0; t < third.length; t++) {
                if (first[q] == second[r] && first[q] == third[t]) {
                    return first[q]
                }
            }
        }
    }
}