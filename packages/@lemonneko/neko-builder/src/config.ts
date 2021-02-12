import * as fs from "fs";
import * as path from "path";
import {Dependency} from "./dependency";
import {ResolveDependenciesTask, Task} from "./task";
import {Repository} from "./repository";
import {IOException} from "./exceptions";

export interface Project {
    name: string
    version: string
    group: string
    tasks: Array<Task>
    dependencies?: Dependency[]
    repositories?: Repository[]
}

export class DefaultProject implements Project{
    group: string;
    name: string;
    tasks: Array<Task>;
    version: string;
    dependencies?: Dependency[]
    repositories?: Repository[]

    constructor() {
        this.name = 'undefined'
        this.group = 'undefined'
        this.tasks = []
        this.version = 'undefined'
        this.dependencies = []
        this.repositories = []

        this.init()
    }

    private init() {
        this.tasks.push(new ResolveDependenciesTask())
        this.tasks.forEach((task) => {
            task.project = this
        })
    }
}

export class BuildFileReader {
    static readDefault(): Project {
        if (fs.existsSync(path.resolve('neko-builder.config.js'))) {
            return this.readFromFile('neko-builder.config.js')
        }
        return new DefaultProject()
    }

    private static resolve(filePath: string): Project {
        const obj = require(filePath)
        const project = new DefaultProject()

        if (obj.name && typeof obj.name === 'string') {
            project.name = obj.name
        }
        if (obj.version && typeof obj.version === 'string') {
            project.version = obj.version
        }
        if (obj.tasks && typeof obj.tasks === 'object') {
            project.tasks.push(obj.tasks)
        }
        if (obj.group && typeof obj.group === 'string') {
            project.group = obj.group
        }
        if (obj.dependencies && typeof obj.dependencies === 'object') {
            project.dependencies.push(obj.dependencies)
        }
        if (obj.repositories && typeof obj.repositories === 'object') {
            project.repositories.push(obj.dependencies)
        }

        return project
    }

    static readFromFile(filePath: string): Project {
        const configPath = path.resolve(filePath)
        if (fs.existsSync(configPath)) {
            return this.resolve(configPath)
        } else {
            throw new IOException(`file not found: ${configPath}`)
        }
    }
}