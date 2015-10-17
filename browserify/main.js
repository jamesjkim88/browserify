/**
 * Created by mac on 10/16/15.
 */

var mail = require('./mail');

console.log(mail.getLastEmail());

console.log("hello world");

module.exports = {
    sayHello: function(){
        console.log("hello there, browserify noob!");
    }
};
