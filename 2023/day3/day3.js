import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("2023/day3/games.txt");
    console.log(`Answer: ${findAnswer(data)}`);
})();

function findAnswer(lines){

}