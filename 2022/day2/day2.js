import { readToArray}  from "../fileReader.js";

(async () => {
    const commands = await readToArray("2022/day2/day2.txt");
    console.log(commands);
})();


