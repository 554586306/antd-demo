const getReference = (el, binding, vnode) => {
  const _ref = binding.expression ? binding.value : binding.arg;
  const contextmenu = vnode.context.$refs[_ref];
  if (contextmenu) {
    if (Array.isArray(contextmenu)) {
      contextmenu[0].$refs.reference = el;
    } else {
      contextmenu.$refs.reference = el;
    }
  }
};

export default {
//   bind(el, binding, vnode) {
//     getReference(el, binding, vnode);
//   },
  inserted(el, binding, vnode) {
    getReference(el, binding, vnode);
  }
};
