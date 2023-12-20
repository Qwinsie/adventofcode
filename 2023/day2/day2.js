import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("2023/day2/games.txt");
    console.log(`Answer: ${findAnswer(data)}`);
})();

function findAnswer(lines)
{
    let sum = 0
    let power= 0

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i].split(" ");
        let red = getCubes("red", "red,", "red;", line)
        let green = getCubes("green", "green,", "green;", line)
        let blue = getCubes("blue", "blue,", "blue;", line)

        if (red <= 12 && green <= 13 && blue <= 14) {
            sum = sum + parseInt(line[1])
        }

        power = red * green * blue + power
    }
    return power;
}

function getCubes(color, color2, color3, line) {
    let currentamount = 0
    let highest = 0
    let lowest = 0
    for (let i = 0; i < line.length; i++) {
        if (line[i] === color || line[i] === color2 || line[i] === color3) { 
            currentamount = line[line.indexOf(line[i], i) - 1]
            if (parseInt(highest) < parseInt(currentamount)) {
                highest = currentamount
            }
            if (parseInt(lowest) < parseInt(currentamount)) {
                lowest = currentamount
            }
        }
    }
    return lowest
}