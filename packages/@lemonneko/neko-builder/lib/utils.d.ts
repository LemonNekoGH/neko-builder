import { Dependency } from "./dependency";
import { Repository } from "./repository";
export declare class DependencyUtil {
    static getRepoBaseName(dependency: Dependency, repo: Repository): string;
    static getLocalCacheBaseName(dependency: any): string;
}
