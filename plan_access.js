let faker = require('faker');
let db = require('./database');
let conn = db.connection;
let random = require('string-random');
faker.locale = "zh_CN";

let sql = "insert into plan_access(plan_id, course_id, term, type, status, score) values (?,?,?,?,?,?)";
for (let i = 0; i < 599; i++) {
    conn.query(sql, [
        Math.random() * (199 - 1 + 1) + 1,
        Math.random() * (199 - 1 + 1) + 1,
        Math.random() * (8 - 1 + 1) + 1,
        Math.random() * (2 - 1 + 1) + 1,
        Math.random() * (3 - 1 + 1) + 1,
        random(1,{letters:false})
    ]);
}

