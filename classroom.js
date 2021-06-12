let faker = require('faker');
let db = require('./database');
let conn = db.connection;

faker.locale = "zh_CN";
let name = "{{name.lastName}}{{name.firstName}}";

let campus = ['盛乐校区', '赛罕校区'];
let building = ['行知楼','科技楼','理工楼','大数据楼','学院楼'];
let type = ['','科技楼'];
for (let i = 0; i <= 100; i++) {
    let campusNum = Math.floor(Math.random() * 2);
    let sql = "Insert into classroom (campus, building, room_num, type, people_num) values (?,?,?,?,?)";
    conn.query(sql, [campus[campusNum],
        building[Math.floor(Math.random() * 2)],
        Math.floor(Math.random() * 41),
        Math.floor(Math.random() * 2),
        60
    ])
}


console.log(name);
