import { join } from "node:path";
import { LigmaConfig } from "../ligma.config";

export const stats_path = join(process.cwd(), "stats.json");
export async function stats(config: LigmaConfig, day_path: string) {
    let stats: Record<string, number> = {};
    try {
        stats = await Bun.file(stats_path).json();
    } catch (e) {}

    stats = config.dsa.reduce((acc, ds) => {
        if (!acc[ds]) {
            acc[ds] = 0;
        }
        acc[ds]++;
        return acc;
    }, stats);

    await Bun.write(
        join(__dirname, "..", "stats.json"),
        JSON.stringify(stats, null, 4),
    );
}

export async function package_json(config: LigmaConfig, day_path: string) {
    const package_json = (
        await import("../package.json", {
            with: {
                type: "json",
            },
        })
    ).default;
    package_json.scripts.day = `echo ${day_path}`;

    await Bun.write(
        join(__dirname, "..", "package.json"),
        JSON.stringify(package_json, null, 4),
    );
}

export async function ts_config(set_to: string) {
    const ts_config = (
        await import("../tsconfig.json", {
            with: {
                type: "json",
            },
        })
    ).default;
    ts_config.compilerOptions.paths["@code/*"] = [`${set_to}/*`];

    await Bun.write(
        join(__dirname, "..", "tsconfig.json"),
        JSON.stringify(ts_config, null, 4),
    );
}
