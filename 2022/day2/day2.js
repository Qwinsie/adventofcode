import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("strategy.txt");
    console.log(`Answer: ${start(data)}`);
})();

function start(data) {
    let points = 0

    for (let i = 0; i < data.length; i++) {
        let match = data[i].toString()
        points = points + checkWinner(match.slice(0, 1), match.slice(2))
    }
    return points
}

function checkWinner(opponent, me) {
    switch (me) {
        case "X":
            me = opponent == "A" ? "Z"
            : opponent == "B" ? "X"
            : opponent == "C" ? "Y"
            : console.log("No valid response");
            break;
        case "Y":
            me = opponent == "A" ? "X"
            : opponent == "B" ? "Y"
            : opponent == "C" ? "Z"
            : console.log("No valid response");
            break;
        case "Z":
            me = opponent == "A" ? "Y"
            : opponent == "B" ? "Z"
            : opponent == "C" ? "X"
            : console.log("No valid response");
            break;
        default:
            break;
    }

   switch (opponent) {
    case "A":
        return me == "Y" ? 8 
        : me == "X" ? 4
        : me == "Z" ? 3
        : console.log("No valid response");
    case "B":
        return me == "Y" ? 5 
        : me == "X" ? 1
        : me == "Z" ? 9
        : console.log("No valid response");
    case "C":
        return me == "Y" ? 2
        : me == "X" ? 7
        : me == "Z" ? 6
        : console.log("No valid response");
    default:
        break;
   }
}