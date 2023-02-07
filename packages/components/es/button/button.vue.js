import { defineComponent, openBlock, createElementBlock, createTextVNode, toDisplayString, renderSlot } from "vue";
import { buttonProps } from "./types.js";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "button",
  props: buttonProps,
  setup(__props) {
    const props = __props;
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", null, [
        createTextVNode(toDisplayString(props.size) + " " + toDisplayString(props.type) + " ", 1),
        renderSlot(_ctx.$slots, "default")
      ]);
    };
  }
});
export {
  _sfc_main as default
};
