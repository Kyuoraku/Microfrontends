import { importShared } from './__federation_fn_import.js';
import { r as reactExports } from './__federation_shared_react.js';

var jsxRuntimeExports = {};
var jsxRuntime = {
  get exports(){ return jsxRuntimeExports; },
  set exports(v){ jsxRuntimeExports = v; },
};

var reactJsxRuntime_production_min = {};

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f=reactExports,k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;

(function (module) {

	{
	  module.exports = reactJsxRuntime_production_min;
	}
} (jsxRuntime));

const jsx = jsxRuntimeExports.jsx;
const jsxs = jsxRuntimeExports.jsxs;

const getCharacters = async () => {
    const response = await fetch('https://swapi.dev/api/people/');
    const data = await response.json();
    return data.results;
};

const {useState: useState$1,useEffect: useEffect$1} = await importShared('react');

const useCharacters = () => {
  const [characters, setCharacters] = useState$1([]);

  useEffect$1(() => {
    getCharacters().then(data => {
      setCharacters(data);
    });
  }, []);

  return characters;
};

const es = {
    name: "Nombre",
    height: "Altura",
    mass: "Peso",
    hairColor: "Color de cabello",
    title: "Personajes de Star Wars"
  };

const en = {
    name: "Name",
    height: "Height",
    mass: "Mass",
    hairColor: "Hair Color",
    title: "Star Wars Characters"
  };

const translations = {
    "es-ES": es,
    "en-US": en
};

const {useState,useEffect} = await importShared('react');

const useLanguageDisplay = (lang = 'es-ES') => {
  const [display, setDisplay] = useState(translations[lang]);

  useEffect(() => {
    setDisplay(translations[lang]);
  }, [lang]);

  return display;
};

await importShared('react');

const Character = ({ character, display }) => {
  return /* @__PURE__ */ jsx("div", { className: "col-3", children: /* @__PURE__ */ jsx("div", { className: "card", children: /* @__PURE__ */ jsxs("div", { className: "card__content", children: [
    /* @__PURE__ */ jsxs("h2", { className: "card__title", children: [
      display.name,
      ": ",
      character.name
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "card__text", children: [
      display.height,
      ": ",
      character.height,
      " cm"
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "card__text", children: [
      display.mass,
      ": ",
      character.mass,
      " kg"
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "card__text", children: [
      display.hairColor,
      ": ",
      character.hair_color
    ] })
  ] }) }) });
};

const List$1 = '';

await importShared('react');
const List = ({ lang = "es-ES" }) => {
  const characters = useCharacters();
  const display = useLanguageDisplay(lang);
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "col-12", children: /* @__PURE__ */ jsx("h3", { children: display.title }) }) }),
    /* @__PURE__ */ jsx("div", { className: "row", children: characters.map((character) => /* @__PURE__ */ jsx(Character, { character, display }, character.name)) })
  ] });
};

export { List, List as default, jsx as j };
