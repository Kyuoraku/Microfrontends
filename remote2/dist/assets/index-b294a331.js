import { importShared } from './__federation_fn_import.js';
import { j as jsx, List } from './__federation_expose_ListSW-4ac7059e.js';
import { r as reactDomExports } from './__federation_shared_react-dom.js';

var client = {};

var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}

function App() {
  return /* @__PURE__ */ jsx("div", { className: "App", children: /* @__PURE__ */ jsx(List, {}) });
}

const React = await importShared('react');
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
);
