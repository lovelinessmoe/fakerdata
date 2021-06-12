let faker = require('faker');
let db = require('./database');
let conn = db.connection;
let random = require('string-random');
faker.locale = "zh_CN";

let sql = "insert into major ( major_name, college_id, recruit_num) values (?,?,?)";
for (let i = 0; i < 199; i++) {
    conn.query(sql, [

        faker.fake('{{internet.userName}}'+i),
        Math.random() * (30 - 1 + 1) + 1,
        random(3,{letters:false})
    ]);
}

