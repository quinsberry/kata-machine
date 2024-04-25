import { readdirSync, unlinkSync, mkdirSync } from "node:fs";
import { join, relative } from "node:path";
import { config } from "../ligma.config";
import {
    Algorythm,
    AlgorythmGetter,
    AlgorythmMethod,
    AlgorythmProp,
    AlgorythmStructure,
    dsa,
} from "./dsa";

const src_path = join(__dirname, "..", "src");
let day = 1;

try {
    day =
        +readdirSync(src_path)
            .filter((i) => i.includes("day"))
            .sort((a, b) => {
                return +b.substring(3) - +a.substring(3);
            })[0]
            .substring(3) + 1;

    if (isNaN(day)) {
        console.log("day is nan");
        day = 1;
    }
} catch (e) {
    day = 1;
}

const day_name = `day${day}`;
const day_path = join(src_path, day_name);
const relative_day_path = relative(process.cwd(), day_path);
try {
    unlinkSync(day_path);
} catch (e) {}
try {
    mkdirSync(day_path);
} catch (e) {}

function generate_method(method: AlgorythmMethod) {
    return `${method.name}(${method.args || ""}): ${method.return || "void"} {

}`;
}

function generate_property(prop: AlgorythmProp) {
    return `${prop.scope} ${prop.name}: ${prop.type};`;
}

function generate_getter(getter: AlgorythmGetter) {
    return `get ${getter.name}(): ${getter.return} {
    return this.${getter.prop_name};
}`;
}

function create_class(name: Algorythm, item: AlgorythmStructure) {
    Bun.write(
        join(day_path, `${name}.ts`),
        `export default class ${name}${item.generic || ""} {
        ${(item.properties || []).map(generate_property).join("\n    ")}
    
        ${(item.getters || []).map(generate_getter).join("\n    ")}
    
        constructor() {
        }
    
        ${(item.methods || []).map(generate_method).join("\n    ")}
    }`,
    );
}

function create_function(name: Algorythm, item: AlgorythmStructure) {
    const g = item.generic ? item.generic : "";

    Bun.write(
        join(day_path, `${name}.ts`),
        `export default function ${item.fn}${g}(${item.args}): ${item.return} {

}`,
    );
}

config.dsa.forEach((ds) => {
    const item = dsa[ds];
    if (!item) {
        throw new Error(`algorithm ${ds} could not be found`);
    }
    if (item.type === "class") {
        create_class(ds, item);
    } else {
        create_function(ds, item);
    }
});

import { ts_config, package_json, stats } from "./align-configs";
await ts_config(day_name);
await package_json(config, relative_day_path);
await stats(config, day_path);
