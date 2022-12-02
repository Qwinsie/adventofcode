let fs = require("fs");
let readline = require("readline");

/**
 * Read file contents to array
 *
 * @param String    filename
 * @param () => Any optional typeConverter to convert values
 *
 * @returns Array<Any>
 */
 const readToArray = async (filename, typeConverter = null) => {
    return new Promise((resolve, reject) => {
      const data = [];
      let stream = fs.createReadStream(filename, "utf-8");
      stream.on("error", reject);
  
      let readLine = readline.createInterface({
        input: stream,
      });
  
      readLine
        .on("line", (chunk) => {
            data.push(typeConverter ? typeConverter(chunk) : chunk);

        })
        .on("close", () => {
          resolve(data);
        });
    });
  };
  
  (async () => {
    const data = await readToArray("./2022/day1/day1.txt");

    console.log(start(data));
  })();

let elf = 0;
let tutorialData = 
[
    "1000",
    "2000",
    "3000",
    "",
    "4000",
    "",
    "5000",
    "6000",
    "",
    "7000",
    "8000",
    "9000",
    "",
    "10000"
]

function start(data) {
    let list = []

    for (let i = 0; i < data.length+1; i++) {
        if (data[i] == '' || i == data.length) {
            list.push(elf);
            elf = 0;
        } else {
            elf = elf + Number(data[i]);
            if (elf == 69626 || elf == 68657) {
                elf = 0
            }
        }
    }

    let answer = checkHighestCalories(list)
    return answer;
}

function checkHighestCalories(list) {
    let answer = 0;
    for (let i = 0; i < list.length; i++) {
        if (list[i] > answer) {
            answer = list[i];
        }
    }
    return answer;
}