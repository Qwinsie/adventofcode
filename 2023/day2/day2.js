const fs = require('fs')
fs.readFile('day2/exampledata2.txt', (err, data) => {
    if(err) throw err;
    data = data.toString()
    data.split(" ")
    data = data.split("\n");
    Init(data)
})


function Init(data)
{

    red = 0
    green = 0 
    id = data[0][5]
    let blue = data[0].split(" ").indexOf("blue,") - 1
    data[blue]
    red = data[0].split(" ").indexOf("red") - 1
    green = data[0].split(" ").indexOf("gree") - 1

    
    // data = data
    console.log(data[0].split(" "))
    console.log(blue)
}