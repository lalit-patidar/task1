const csv = require("csvtojson");
// const path = require("path");


async function convertCsvToJson(csvFile) {
      try { 
       const jsonData = await csv()
        .fromFile(csvFile)
        console.log(jsonData, csvFile)
        return jsonData
    } catch(error) {
        console.log(error)
    }
      
 
}

module.exports = convertCsvToJson;