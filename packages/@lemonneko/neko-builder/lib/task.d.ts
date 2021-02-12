import { Project } from "./config";
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
}
export declare function task(name: string, action: () => void): Task;
