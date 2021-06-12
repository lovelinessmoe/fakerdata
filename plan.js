let faker = require('faker');
let db = require('./database');
let conn = db.connection;
let random = require('string-random');
faker.locale = "zh_CN";

let sql = "insert into plan ( plan_name, create_date, edition, foreign_language, public_required, public_elective, major_required, major_elective, major_common) values (?,?,?,?,?,?,?,?,?)";
for (let i = 0; i < 199; i++) {
    conn.query(sql, [
        faker.fake('{{internet.userName}}'+i),
        faker.fake('{{date.recent}}'),
        Math.random() * (5 - 1 + 1) + 1,
        Math.random() * (40 - 1 + 1) + 1,
        Math.random() * (40 - 1 + 1) + 1,
        Math.random() * (40 - 1 + 1) + 1,
        Math.random() * (40 - 1 + 1) + 1,
        Math.random() * (40 - 1 + 1) + 1,
        Math.random() * (40 - 1 + 1) + 1
    ]);
}

