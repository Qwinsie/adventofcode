import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("strategy.txt");
    console.log(`Answer: ${start(data)}`);
})();

function start()
{
    
}