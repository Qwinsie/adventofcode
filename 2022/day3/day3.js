import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("rucksacks.txt");
    // console.log(`Answer: ${start(data)}`);
    console.log(`Answer: ${startPart2(0, data, 0)}`);
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

function startPart2(n, rucksacks, priorities) {
    let first = rucksacks[n]
    n = n + 1
    let second = rucksacks[n] 
    n = n + 1
    let third = rucksacks[n] 

    // for (let i = 0; i < rucksacks.length; i++) {
    //     let first = rucksacks[i]
    //     i = i + 1
    //     let second = rucksacks[i] 
    //     i = i + 1
    //     let third = rucksacks[i] 
    //     findDuplicateIn3(0, first, second, third, 0, 0)
    // }

    let duplicate = findDuplicateIn3(0, first, second, third, 0, 0)
    if (duplicate == 4) {
        duplicate = findDuplicateIn3(0, first, second, third, 0, duplicate+1)
        if (duplicate == 8) {
            duplicate = findDuplicateIn3(0, first, second, third, 0, duplicate+1)
            if (duplicate == 12) {
                duplicate = findDuplicateIn3(0, first, second, third, 0, duplicate+1)
                if (duplicate == 16) {
                    duplicate = findDuplicateIn3(0, first, second, third, 0, duplicate+1)
                    if (duplicate == 20) {
                        duplicate = findDuplicateIn3(0, first, second, third, 0, duplicate+1)
                        if (duplicate == 23) {
                            duplicate = findDuplicateIn3(0, first, second, third, 0, duplicate+1)
                            if (duplicate == 26) {
                                duplicate = findDuplicateIn3(0, first, second, third, 0, duplicate+1)
                                if (duplicate == 29) {
                                    duplicate = findDuplicateIn3(0, first, second, third, 0, duplicate+1)
                                    if (duplicate == 34) {
                                        duplicate = findDuplicateIn3(0, first, second, third, 0, duplicate+1)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    
    console.log(first + " " + second + " " + third + " " + alphabet.indexOf(duplicate));
    
    priorities = priorities + Number(alphabet.indexOf(duplicate))
    console.log(n + " " + rucksacks.length + " " + (n == rucksacks.length));
    // return priorities
    return n == rucksacks.length-1 ? priorities : startPart2(n+1, rucksacks, priorities)
}

function findDuplicateIn3(n, first, second, third, i, j) {
    j = i == second.length ? j+1 : j = j;
    i == second.length ? i = 0 : i = i;
    i = n == third.length ? i+1 : i = i;
    n = n == third.length ? n = 0 : n = n;
    // console.log(first[j])
    // console.log(second[i])
    // console.log(third[n])
    console.log(j)
    // console.log(i)
    // console.log(n)
    // console.log(first[j] == second[i] && first[j] == third[n])
    if (j == 4 || j == 8 || j == 12 || j == 16 || j == 20 || j == 23 || j == 26 || j == 29 || j == 34 && i == second.length-1 && n == third.length-1 && !(first[j] == second[i] && first[j] == third[n])) {
        return j
    }

    return first[j] == second[i] && first[j] == third[n] ? first[j] : findDuplicateIn3(n+1, first, second, third, i, j);
}

function findDuplicate(n, first, last, i) {
    i = n == first.length ? i+1 : i = i;
    n = n == first.length ? 0 : n = n;
    return first[i] == last[n] ? first[i] : findDuplicate(n+1, first, last, i);
}