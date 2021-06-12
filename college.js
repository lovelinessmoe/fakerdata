let faker = require('faker');
let db = require('./database');
let conn = db.connection;

faker.locale = "zh_CN";
let date = "{{datatype.datetime}}";

for (let i = 2; i <= 30; i++) {
    let campusNum = Math.floor(Math.random() * 2);
    let sql = "update college set timest = ? where college_id = ?";
    conn.query(sql, [
        faker.fake(date),
        i
    ])
}

