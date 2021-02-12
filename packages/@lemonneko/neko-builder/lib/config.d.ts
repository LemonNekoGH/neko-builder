import { Dependency } from "./dependency";
import { Task } from "./task";
import { Repository } from "./repository";
export interface Project {
    name: string;
    version: string;
    group: string;
    tasks: Array<Task>;
    dependencies?: Dependency[];
    repositories?: Repository[];
}
export declare class DefaultProject implements Project {
    group: string;
    name: string;
    tasks: Array<Task>;
    version: string;
    dependencies?: Dependency[];
    repositories?: Repository[];
    constructor();
    private init;
}
export declare class BuildFileReader {
    static readDefault(): Project;
    private static resolve;
    static readFromFile(filePath: string): Project;
}
