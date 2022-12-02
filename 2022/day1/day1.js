import { readToArray}  from "../fileReader.js";

(async () => {
    const data = await readToArray("2022/day1/inventory.txt");
    console.log(start(data));
})();

function start(data) {
    let inventory = []
    let calories = 0;

    for (let i = 0; i < data.length+1; i++) {
        if (data[i] == '' || i == data.length) {
            inventory.push(calories);
            calories = 0;
        } else {
            calories = calories + Number(data[i]);
        }
    }

    inventory.sort(function(a, b){return b-a});
    return inventory[0] + " " + inventory[1]+ " " + inventory[2] ;
}