let faker = require('faker');
let db = require('./database');
let conn = db.connection;
let random = require('string-random');
faker.locale = "zh_CN";

let sql = "insert into school (school_name) values (?)";
for (let i = 0; i < 19; i++) {
    conn.query(sql, [
        faker.fake('{{internet.userName}}'+'大学'),
    ]);
}

