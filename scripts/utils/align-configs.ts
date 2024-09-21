import { LigmaConfig } from "./types";

export async function stats(stats_path: string, config: LigmaConfig) {
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

    return Bun.write(stats_path, JSON.stringify(stats, null, 4));
}

export async function package_json(
    package_json_path: string,
    day_path: string,
) {
    const package_json = (
        await import(package_json_path, {
            with: {
                type: "json",
            },
        })
    ).default;
    package_json.scripts.day = `echo ${day_path}`;
    package_json.scripts['format:day'] = `prettier --write --ignore-path .prettierignore ./${day_path}`;

    return Bun.write(package_json_path, JSON.stringify(package_json, null, 4));
}

export async function ts_config(ts_config_path: string, set_to: string) {
    const ts_config = (
        await import(ts_config_path, {
            with: {
                type: "json",
            },
        })
    ).default;
    ts_config.compilerOptions.paths["@code/*"] = [`${set_to}/*`];

    return Bun.write(ts_config_path, JSON.stringify(ts_config, null, 4));
}
