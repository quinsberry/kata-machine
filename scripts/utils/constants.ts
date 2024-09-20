import { join } from "node:path";
import { Algorythm } from "./types";

export const src_path = join(process.cwd(), "src");
export const package_json_path = join(process.cwd(), "package.json");
export const tsconfig_path = join(process.cwd(), "tsconfig.json");
export const stats_path = join(process.cwd(), "stats.json");
