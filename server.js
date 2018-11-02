var express = require('express');
var assert = require('assert');

var app = express();

const PORT = 1234;

app.use(express.static('static'));
app.listen(PORT);
console.log('start server...on ' + PORT);


//assert(value, message), 或者assert.ok(value, message)  判断value是否为真，如果为真，则正常运行，如果为假，则运行中断，报出message的错误信息
// var flag = false;
// // assert(flag);
// assert.ok(flag, 'assert error');


//判断某值是否是期望的值
// var a = 3;
// assert.fail(a, 2, 'a !== 3', '<');


//判断是否相等：assert.equal(), assert.strictEqual(), assert.deepEqual()
// var a = 2;
// var b = '2';
// var c = new Buffer(1);
// var d = new Buffer(1);
// // assert.equal(a, b, 'a和b隐式相等');
// // assert.strictEqual(a, b, 'a和b严格相等');
// assert.deepEqual(c, d, 'c和d深度响度');

