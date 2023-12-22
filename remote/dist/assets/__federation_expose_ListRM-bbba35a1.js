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

const es = {
    "title": "Lista de personajes de Rick y Morty",
    "name": "Nombre",
    "race": "Raza",
    "alive": "Estado"
};

const en = {
    "title": "List of Characters from Rick and Morty",
    "name": "Name",
    "race": "Race",
    "alive": "Status"
};

const translations = {
    "es-ES": es,
    "en-US": en
};

await importShared('react');
const Character = ({ character, lang }) => {
  const display = translations[lang];
  const truncateName = (name) => {
    return name.length > 15 ? `${name.substring(0, 15)}...` : name;
  };
  return /* @__PURE__ */ jsx("div", { className: "col-3", children: /* @__PURE__ */ jsxs("div", { className: "card", children: [
    /* @__PURE__ */ jsx("div", { className: "card__image", children: /* @__PURE__ */ jsx("img", { src: character.image, alt: character.name }) }),
    /* @__PURE__ */ jsxs("div", { className: "card__content", children: [
      /* @__PURE__ */ jsxs("h2", { className: "card__title", children: [
        display.name,
        ": ",
        truncateName(character.name)
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "card__text", children: [
        /* @__PURE__ */ jsxs("span", { children: [
          display.race,
          ": ",
          character.species
        ] }),
        " -",
        /* @__PURE__ */ jsxs("span", { children: [
          " ",
          display.alive,
          ": ",
          character.status
        ] })
      ] })
    ] })
  ] }) }, character.id);
};

const getCharacters = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character/");
    const data = await response.json();
    return data;
};

const {useState: useState$1,useEffect: useEffect$1} = await importShared('react');

const useCharacters = () => {
  const [characters, setCharacters] = useState$1([]);

  useEffect$1(() => {
    getCharacters().then(data => {
      console.log("🚀 ~ file: useCharacters.js:9 ~ getCharacters ~ data:", data);
      setCharacters(data.results);
    });
  }, []);

  return characters;
};

const {useState,useEffect} = await importShared('react');

const useLanguageDisplay = (lang = 'es-ES') => {
  const [display, setDisplay] = useState(translations[lang]);

  useEffect(() => {
    setDisplay(translations[lang]);
  }, [lang]);

  return display;
};

const List$1 = '';

await importShared('react');
const List = ({ lang = "es-ES" }) => {
  const characters = useCharacters();
  const display = useLanguageDisplay(lang);
  return /* @__PURE__ */ jsxs("div", { className: "container", children: [
    /* @__PURE__ */ jsx("div", { className: "row", children: /* @__PURE__ */ jsx("div", { className: "col-12", children: /* @__PURE__ */ jsx("h3", { children: display.title }) }) }),
    /* @__PURE__ */ jsx("div", { className: "row", children: characters?.map((character) => /* @__PURE__ */ jsx(Character, { character, lang }, character.name)) })
  ] });
};

export { List, List as default, jsx as j };
