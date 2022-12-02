let elves = 
[
    1000,
    2000,
    3000,
    ,
    4000,
    ,
    5000,
    6000,
    ,
    7000,
    8000,
    9000,
    ,
    10000,
]

let elf = 0;

for (let i = 0; i < elves.length; i++) {
    if (elves[i] == null || i+1 == elves.length) {
        console.log(elf);
        elf = 0;
    } else {
        elf = elf + elves[i];
    }
}

function checkHighestCalories(elf) {
    
}