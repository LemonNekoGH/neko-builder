import { Project } from "./config";
import { Dependency } from "./dependency";
import { Repository } from "./repository";
export declare abstract class Task {
    project?: Project;
    name: string;
    category: string;
    description?: string;
    action?: () => void;
    dependent?: Task[];
}
export declare class ResolveDependenciesTask extends Task {
    name: string;
    category: string;
    description: string;
    action: () => void;
    /**
     * Download dependency file to cache dir
     * @param dependency
     * @param repo
     * @return boolean Download success full
     */
    downloadDependencyFromRepo(dependency: Dependency, repo: Repository): boolean;
}
export declare function task(name: string, action: () => void): Task;
