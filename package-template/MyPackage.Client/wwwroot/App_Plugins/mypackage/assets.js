const e = [
  {
    type: "dashboard",
    name: "mypackage",
    alias: "mypackage.dashboard",
    elementName: "mypackage-dashboard",
    js: () => import("./dashboard.element-f7OFaYJh.js"),
    weight: -10,
    meta: {
      label: "MyPackage",
      pathname: "mypackage"
    },
    conditions: [
      {
        alias: "Umb.Condition.SectionAlias",
        match: "Umb.Section.Content"
      }
    ]
  }
], t = [...e], n = [
  ...t
], o = (s, a) => {
  a.registerMany(n);
};
export {
  o as onInit
};
//# sourceMappingURL=assets.js.map
