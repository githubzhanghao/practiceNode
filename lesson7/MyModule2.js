/**
 * Created by Administrator on 2016/8/15.
 */

function Hello() {
    var name;

    this.setName = function (theName) {
        name = theName;
    }

    this.sayHello = function () {
        console.log(name);
    }
}

module.exports = Hello

//exports是 module.exports的引用