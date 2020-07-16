import vegemite from "vegemite"

interface EventMap {
    "theme:change": undefined;
}

const store = vegemite<EventMap, {}>();

export default store;