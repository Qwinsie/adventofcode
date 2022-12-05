let fs = require("fs");
let readline = require("readline");

let totalOverlaps = 0;
let wrongAnswers = 0;
let end = false;
let dimension = 10;
let dummydata = ["0,9 -> 5,9","8,0 -> 0,8","9,4 -> 3,4","2,2 -> 2,1","7,0 -> 7,4","6,4 -> 2,0","0,9 -> 2,9","3,4 -> 1,4","0,0 -> 8,8","5,5 -> 8,2"]

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

let diagram = [];

(async () => {
  const data = await readToArray("input.txt");
  init(data);
})();

function init(data) {
  createGrid(dimension, dimension);

  for (let i = 0; i < dummydata.length; i++) {
    let current = dummydata[i].split(" ");

    let total1 = splitNumber(current[0]);
    let total2 = splitNumber(current[2]);

    _x1 = total1[0];
    _y1 = total1[1];
    _x2 = total2[0];
    _y2 = total2[1];

    // console.log(_x1, _y1, _x2, _y2);

    writeLine(_x1, _y1, _x2, _y2);
  }

  console.log(diagram);
  counting(dimension, dimension);
  console.log(
    "Total overlaps " + totalOverlaps + " Wronganswers: " + wrongAnswers
  );
}

function splitNumber(input) {
  return input.split(",").map((input) => parseInt(input));
}

function counting(ver, hor) {
  for (let j = 0; j < ver; j++) {
    for (let i = 0; i < hor; i++) {
      if (diagram[j][i] >= 2) {
        totalOverlaps++;
      } else {
        wrongAnswers++;
      }
    }
  }
}

function createGrid(ver, hor) {
  for (let j = 0; j < ver; j++) {
    diagram.push(j);
    diagram[j] = [];
    for (let i = 0; i < hor; i++) {
      diagram[j].push(0);
    }
  }
}

function writeLine(x1, y1, x2, y2) {
  //   console.log(x1, y1, x2, y2);
  if (x1 == x2 || y1 == y2) {
    if (x1 < x2) {
      diagram[y1][x1]++;
      writeLine(x1 + 1, y1, x2, y2);
    } else if (x1 > x2) {
      diagram[y2][x2]++;
      writeLine(x1, y1, x2 + 1, y2);
    } else if (y1 < y2) {
      diagram[y1][x1]++;
      writeLine(x1, y1 + 1, x2, y2);
    } else if (y1 > y2) {
      diagram[y2][x2]++;
      writeLine(x1, y1, x2, y2 + 1);
    } else if (x1 == x2 && y1 == y2) {
      console.log("Klaar");
      diagram[y1][x1]++;
      end = true;
    }
  } else {
    console.log("Dit is voor puzzel twee "+ x1, x2, y1, y2);
    writeDiaganolLine(x1, y1, x2, y2)
  }
}

function writeDiaganolLine(x1, y1, x2, y2) {
  if (x1 < x2 && y1 < y2) {
    diagram[y1][x1]++;
    writeLine(x1 + 1, y1 + 1, x2, y2);
  } else if (x1 > x2 && y1 < y2) {
    diagram[y1][x2]++;
    writeLine(x1, y1 + 1, x2 + 1, y2);
  } else if (x1 > x2 && y1 > y2) {
    diagram[y2][x2]++;
    writeLine(x1, y1, x2 + 1, y2 + 1);
  } else if (x1 < x2 && y1 > y2) {
    diagram[y2][x1]++;
    writeLine(x1 + 1, y1, x2, y2 + 1);
  }
}
