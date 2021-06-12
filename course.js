let faker = require('faker');
let db = require('./database');
let conn = db.connection;
let random = require('string-random');
faker.locale = "zh_CN";






// let max = 2;
// let min = 0;
// for (let i = 1; i <= 77; i++) {
//     let Num = Math.floor(Math.random()*(max-min+1)+min);
//     let sql = "update course set classroom_type = ? where course_id = ?";
//     conn.query(sql, [
//         Num,
//         i
//     ])
// }



for (let i = 1; i <= 77; i++) {
    let campusNum = Math.floor(Math.random() * 2);
    let sql = "update course set course_id = ? where course_id = ?";
    conn.query(sql, [
        random(5,{letters:false}),
        i
    ])
}

