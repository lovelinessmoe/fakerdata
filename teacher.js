let faker = require('faker');
let db = require('./database');
let conn = db.connection;
let random = require('string-random');
faker.locale = "zh_CN";

let max = 30;
let min = 1;
for (let i = 1; i <= 177; i++) {
    let campusNum = Math.floor(Math.random() * 2);
    let num=random(2,{letters:false});
    let sql = "insert into teacher(teacher_id, teacher_name, college_id) values (?,?,?)";
    conn.query(sql, [
        i,
        faker.fake('{{name.lastName}}{{name.firstName}}'),
        Math.floor(Math.random()*(max-min+1)+min)
    ])
}

