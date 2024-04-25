import { readdirSync, rmSync } from "node:fs";
import { join } from "node:path";
import { stats_path } from "./generate";

const src_path = join(__dirname, "..", "src");

try {
    readdirSync(src_path)
        .filter((f) => {
            if (f.includes("day")) {
                console.log("found", f);
                return true;
            }
            console.log("ignoring", f);
            return false;
        })
        .forEach((f) => {
            const file = join(src_path, f);
            console.log("deleting", file);
            rmSync(file, {
                recursive: true,
                force: true,
            });
        });

    console.log("deleting stats");
    rmSync(stats_path, {
        recursive: true,
        force: true,
    });
} catch (e) {
    console.log(e);
}
