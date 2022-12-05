import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("input.txt");
    console.log(`Part 1 Answer: ${partone(data)} | Part 2 Answer: ${parttwo(data)}`);
})();