import _async_to_generator from "@swc/helpers/src/_async_to_generator.mjs";
import _object_without_properties from "@swc/helpers/src/_object_without_properties.mjs";
import regeneratorRuntime from "regenerator-runtime";
var resolver = {
    sendSomeMessage: function sendSomeMessage(_parent, _param, _param1) {
        return _async_to_generator(/*#__PURE__*/ regeneratorRuntime.mark(function _callee() {
            var _input, toNumber, messageBody, all, dataSources;
            return regeneratorRuntime.wrap(function _callee$(_ctx) {
                while(1)switch(_ctx.prev = _ctx.next){
                    case 0:
                        _input = _param.input, toNumber = _input.toNumber, messageBody = _input.messageBody, all = _object_without_properties(_param.input, [
                            "toNumber",
                            "messageBody"
                        ]), dataSources = _param1.dataSources;
                    case 1:
                    case "end":
                        return _ctx.stop();
                }
            }, _callee);
        }))();
    }
};
export default resolver;
