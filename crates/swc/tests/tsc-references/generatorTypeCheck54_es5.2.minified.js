import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
import regeneratorRuntime from "regenerator-runtime";
var _marked = regeneratorRuntime.mark(function() {
    return regeneratorRuntime.wrap(function(_ctx) {
        for(;;)switch(_ctx.prev = _ctx.next){
            case 0:
                return _ctx.delegateYield([
                    new Foo
                ], "t0", 1);
            case 1:
                return _ctx.delegateYield([
                    new Baz
                ], "t1", 2);
            case 2:
            case "end":
                return _ctx.stop();
        }
    }, _marked);
}), Foo = function() {
    "use strict";
    _class_call_check(this, Foo);
}, Baz = function() {
    "use strict";
    _class_call_check(this, Baz);
};
