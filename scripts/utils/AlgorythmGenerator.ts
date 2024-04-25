import { join } from "node:path";

interface AlgorythmGeneratorConfig {
    path: string;
}
export class AlgorythmGenerator {
    path: string;

    constructor({ path }: AlgorythmGeneratorConfig) {
        this.path = path;
    }

    create_class(name: string, item: AlgorythmStructure) {
        const classGen = `
export default class ${name}${item.generic || ""} {
    ${item.properties?.map(this.generate_property).join("\n") ?? ""}
    ${this.generate_constructor(item.args)}
    ${item.getters?.map(this.generate_getter).join("\n") ?? ""}
    ${item.methods?.map(this.generate_method).join("\n") ?? ""}
}
        `;

        Bun.write(join(this.path, `${name}.ts`), classGen);
    }

    create_function(name: string, item: AlgorythmStructure) {
        const g = item.generic ? item.generic : "";
        const funcitonGen = `
export default function ${item.fn}${g}(${item.args}): ${item.return} {

}
        `;

        Bun.write(join(this.path, `${name}.ts`), funcitonGen);
    }

    private generate_constructor(args: string | undefined) {
        return `
    constructor(${args ?? ""}) {
        
    }
        `;
    }

    private generate_method(method: AlgorythmMethod) {
        return `
    ${method.name}(${method.args || ""}): ${method.return || "void"} {

    }`;
    }

    private generate_property(prop: AlgorythmProp) {
        return `${prop.scope} ${prop.name}: ${prop.type};`;
    }

    private generate_getter(getter: AlgorythmGetter) {
        return `
get ${getter.name}(): ${getter.return} {
    return this.${getter.prop_name};
}
`;
    }
}

export interface AlgorythmProp {
    name: string;
    type: string;
    scope: string;
}
export interface AlgorythmMethod {
    name: string;
    args?: string;
    return: string;
}
export interface AlgorythmGetter {
    name: string;
    prop_name: string;
    return: string;
}

export interface AlgorythmStructure {
    generic?: string;
    type: "class" | "fn";
    methods?: AlgorythmMethod[];
    properties?: AlgorythmProp[];
    getters?: AlgorythmGetter[];
    fn?: string;
    args?: string;
    return?: string;
}
