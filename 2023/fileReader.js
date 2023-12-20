import { createReadStream } from "fs";
import { createInterface } from "readline";

/**
 * Read file contents to array
 *
 * @param String    filename
 * @param () => Any optional typeConverter to convert values
 *
 * @returns Array<Any>
 */
function readToArray(filename, typeConverter = null) {
  return new Promise((resolve, reject) => {
    const data = [];
    let stream = createReadStream(filename, "utf-8");
    stream.on("error", reject);

    let readLine = createInterface({
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

export {
    readToArray
  };