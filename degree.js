let faker = require('faker');
let db = require('./database');
let conn = db.connection;
let random = require('string-random');
faker.locale = "zh_CN";

let sql = "insert into degree (degree_name, school_id, recruit_num) values (?,?,?)";
for (let i = 0; i < 199; i++) {
    conn.query(sql, [
        faker.fake('{{internet.userName}}'+i),
        Math.random() * (5 - 1 + 1) + 1,
        Math.random() * (400 - 1 + 1) + 1,
    ]);
}

