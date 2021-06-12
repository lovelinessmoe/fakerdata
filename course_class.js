let faker = require('faker');
let db = require('./database');
let conn = db.connection;
let random = require('string-random');
faker.locale = "zh_CN";
let crouse = ['54282',
    '22047',
    '50156',
    '33768',
    '30236',
    '22979',
    '87733',
    '98809',
    '53104',
    '59151',
    '32923',
    '18055',
    '20386',
    '28819',
    '95575',
    '39611',
    '25351',
    '45005',
    '37316',
    '68634',
    '60146',
    '63243',
    '81469',
    '40259',
    '75458',
    '60704',
    '69113',
    '57839',
    '98412',
    '35160',
    '36704',
    '78687',
    '18387',
    '79747',
    '91671',
    '97188',
    '18788',
    '20428',
    '61362',
    '49806',
    '49949',
    '51579',
    '64236',
    '54796',
    '76583',
    '56159',
    '76961',
    '33638',
    '47750',
    '59272',
    ' 91806',
    ' 75842',
    '22113',
    '93017',
    '20646',
    '79852',
    '99092',
    '67296',
    '45128',
    '66394',
    '94415',
    '51559',
    '47532',
    '69350',
    '21277',
    '42745',
    '34002',
    '64574',
    '21222',
    '80261',
    '41552',
    '83371',
    '82636',
    '33100',
    '37392',
    '60638',
    '95009']

for (let i = 1; i <= 77; i++) {
    let campusNum = Math.floor(Math.random() * 2);
    let num = Math.random() * (150 - 1 + 1) + 50;
    let sql = "insert into course_class (course_id, teacher_id, contain_num, choose_num, time, classroom_id)values (?,?,?,?,?,?)";
    conn.query(sql, [

        crouse[Math.random() * (77 - 1 + 1) + 1],
        random(3, {letters: false}),
        num,
        num - random(1, {letters: false}),
        faker.fake('{{date.recent}}'),
        random(3, {letters: false})
    ])
}


// let max = 102;
// let min = 2;
// for (let i = 1; i <= 77; i++) {
//     let campusNum = Math.floor(Math.random() * 2);
//     let num=random(2,{letters:false});
//     let sql = "update course_class set classroom_id = ? WHERE  cc_id = ?";
//     conn.query(sql, [
//         Math.floor(Math.random()*(max-min+1)+min),
//         i
//
//     ])
// }

