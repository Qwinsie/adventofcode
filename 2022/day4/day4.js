import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("section_assignments.txt");
    console.log(`Part 1 Answer: ${partone(data)}`);
})();

function partone(data) {
    let amountOfDuplicatePairs = 0
    let amountOfOverlapPairs = 0
    let doesOverlap = false
    for (let i = 0; i < data.length; i++) {
        const pair = data[i];
        let firstElf = pair.slice(0 ,pair.indexOf(","))
        let secondElf = pair.slice(pair.indexOf(",")+1)

        let firstPair = sliceSections(firstElf)
        let secondPair = sliceSections(secondElf)

        let lowestPair = firstPair.start <= secondPair.start ? firstPair : secondPair
        let highestPair = firstPair.start >= secondPair.start ? firstPair : secondPair
        
        for (let i = 0; i < lowestPair.end+1; i++) {
            if (i >= lowestPair.start) {
                lowestPair.values.push(i)
                if (i >= highestPair.start) {
                    highestPair.values.push(i)
                    doesOverlap = true
                    if (i == highestPair.end) {
                        amountOfDuplicatePairs = amountOfDuplicatePairs + 1
                    }
                }
            }
        }
        amountOfOverlapPairs = doesOverlap ? amountOfOverlapPairs+1 : amountOfOverlapPairs
        doesOverlap = false
    }
    return `${ amountOfDuplicatePairs} | Part 2 Answer: ${amountOfOverlapPairs}`
}

function sliceSections(_section) {
    return {
        start : Number(_section.slice(0 ,_section.indexOf("-"))),
        end : Number(_section.slice(_section.indexOf("-")+1)),
        values : []
    }
}