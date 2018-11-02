const assert = require('assert');
const sum = require('../js/sum');


// assert.strictEqual(sum(1), 0, '结果不等于0');
// assert.strictEqual(sum(1), 1);
// assert.strictEqual(sum(1, 2), 3);
// assert.strictEqual(sum(1, 2, 3), 6);

/** 缺点
 * 1：没法自动运行
 * 2：如果断言失败，就会报错，后面的测试无法继续执行
 *
 * */