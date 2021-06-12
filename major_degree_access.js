let faker = require('faker');
let db = require('./database');
let conn = db.connection;
let random = require('string-random');
faker.locale = "zh_CN";

let sql = "insert into major_degree_access (major_id, degree_id, plan_id) values (?,?,?)";
for (let i = 0; i < 199; i++) {
    conn.query(sql, [
        Math.random() * (211 - 1 + 1) + 1,
        Math.random() * (199 - 1 + 1) + 1,
        Math.random() * (199 - 1 + 1) + 1,
    ]);
}

