// @module: commonjs
// @Filename: foo_0.d.ts
export var x = 42;
// @Filename: foo_0.ts
export var y = 42;
// @Filename: foo_1.ts
var foo = require("./foo_0");
var z1 = foo.x + 10; // Should error, as .ts preferred over .d.ts
var z2 = foo.y + 10; // Should resolve
export { };
