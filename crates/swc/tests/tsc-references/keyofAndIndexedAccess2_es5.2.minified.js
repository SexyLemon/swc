import _class_call_check from "@swc/helpers/src/_class_call_check.mjs";
export function getAllEntities(state) {
    var ids = state.ids, entities = state.entities;
    return ids.map(function(id) {
        return entities[id];
    });
}
export function getEntity(id, state) {
    var ids = state.ids, entities = state.entities;
    if (ids.includes(id)) return entities[id];
}
export var c = function() {
    "use strict";
    _class_call_check(this, c), this.a = "b", this.a = "b";
};
var _iteratorNormalCompletion = !0, _didIteratorError = !1, _iteratorError = void 0;
try {
    for(var _step, _loop = function() {
        var action = _step.value;
        window[action] = function(x, y) {
            window[action](x, y);
        };
    }, _iterator = [
        "resizeTo",
        "resizeBy"
    ][Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = !0)_loop();
} catch (err) {
    _didIteratorError = !0, _iteratorError = err;
} finally{
    try {
        _iteratorNormalCompletion || null == _iterator.return || _iterator.return();
    } finally{
        if (_didIteratorError) throw _iteratorError;
    }
}
