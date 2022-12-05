import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("input.txt");
    console.log(`Part 1 Answer: ${partOne(data)} | Part 2 Answer: ${partTwo(data)}`);
})();

function partOne(data) {
    data = data
    let procedure = data.slice(data.indexOf("")+1)
    console.log(procedure);

    let answer = 0
    return answer
}


function partTwo(data) {
    let answer = 0
    return answer
}