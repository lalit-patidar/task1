const csv = require("csvtojson");
const path = require("path");


async function convertCsvToJson(csvFile) {
    const filePath = path.join(__dirname, "../incomingCsvs")
    // console.log(filePath, "thi 4545", csvFile)
      try { 
       const jsonData = await csv()
        .fromString(csvFile)
        console.log(jsonData, csvFile)
        return jsonData
    } catch(error) {
        console.log(error)
    }
      
 
}

module.exports = convertCsvToJson;