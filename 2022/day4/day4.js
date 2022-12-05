import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("section_assignments.txt");
    console.log(`Part 1 Answer: ${partone(data)} | Part 2 Answer: ${parttwo(data)}`);
})();

function partone(data) {
    let answer = 0
    return answer
}

function parttwo(data) {
    let answer = 0
    return answer
}