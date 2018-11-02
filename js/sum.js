module.exports = function (arr) {
    var sum = 0;
    arr && arr.forEach(item => {
       sum += item;
    });
    return sum;
}