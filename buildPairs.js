// const mysql = require('mysql2');
// const mongoose = require('mongoose');

// const LinePair = require("./Models/LinePair")


// mongoose.connect(`${process.env.LOCAL_MONGODB}ShakespeareLinePairs`,{ useNewUrlParser: true, useUnifiedTopology: true })
// .then(() => {
//     return LinePair.deleteMany({})
// })
// .then(() => {
    
    
//     const connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: process.env.MYSQL_PASSWORD,
//         database: "Shakespeare"
//     });
    
//     connection.query('SELECT PlainText FROM paragraphs WHERE WorkID = "sonnets"', (err, results, fields) => {
//         for(i=0; i < 154; i++) {

//             let splitPoem = results[i].PlainText.split("[p]")
//             for(let k = 0; k < 12; k += 4) {
//                 for(let j = k; j < k + 2; j ++) {
//                     let linePair = {lineOne: splitPoem[j], lineTwo: splitPoem[j+2], SonnetNumber: i+1, lines: `${j+1}, ${j+3}`};
//                      LinePair.create(linePair)
//                 }
//             }
//             let linePair ={lineOne: splitPoem[12], lineTwo: splitPoem[13], SonnetNumber: i+1, lines: "13, 14"}
//              LinePair.create(linePair)
//         }
//         connection.close();
//         // mongoose.connection.close();
//     });
//     // console.log(connection)
// });

