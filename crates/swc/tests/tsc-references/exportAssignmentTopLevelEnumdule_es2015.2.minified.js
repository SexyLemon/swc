var foo;
!function(foo) {
    foo[foo.red = 0] = "red", foo[foo.green = 1] = "green", foo[foo.blue = 2] = "blue";
}(foo || (foo = {})), (foo || (foo = {})).answer = 42, module.exports = foo;
export { };
var color;
let foo = require("./foo_0");
color === foo.green && (color = foo.answer);
export { };
