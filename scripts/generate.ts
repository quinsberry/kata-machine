import { readdirSync, unlinkSync, mkdirSync } from "node:fs";
import { join, relative } from "node:path";
import { config } from "../ligma.config";
import { dsa } from "./utils/dsa";
import { AlgorythmGenerator } from "./utils/AlgorythmGenerator";

const src_path = join(__dirname, "..", "src");
const package_json_path = join(process.cwd(), "package.json");
const tsconfig_path = join(process.cwd(), "tsconfig.json");
export const stats_path = join(process.cwd(), "stats.json");
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

const generator = new AlgorythmGenerator({ path: day_path });

config.dsa.forEach((ds) => {
    const item = dsa[ds];
    if (!item) {
        throw new Error(`algorithm ${ds} could not be found`);
    }
    if (item.type === "class") {
        generator.create_class(ds, item);
    } else {
        generator.create_function(ds, item);
    }
});

import { ts_config, package_json, stats } from "./utils/align-configs";
Promise.all([
    ts_config(tsconfig_path, day_name),
    package_json(package_json_path, relative_day_path),
    stats(stats_path, config),
]);
