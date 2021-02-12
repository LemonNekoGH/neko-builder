interface Dependency {
    type: string;
    group: string;
    name: string;
    version: string;
}
declare function isId(str: string): boolean;
declare function compile(id: string): Dependency;
declare function compile(group: string, name: string, version: string): Dependency;
export { compile, isId, Dependency };
