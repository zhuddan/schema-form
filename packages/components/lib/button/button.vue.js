"use strict";
const vue = require("vue");
const types = require("./types.js");
const _sfc_main = /* @__PURE__ */ vue.defineComponent({
  __name: "button",
  props: types.buttonProps,
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return vue.openBlock(), vue.createElementBlock("button", null, [
        vue.createTextVNode(vue.toDisplayString(props.size) + " " + vue.toDisplayString(props.type) + " ", 1),
        vue.renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
module.exports = _sfc_main;
