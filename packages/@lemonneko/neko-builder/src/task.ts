import {Project} from "./config";

export abstract class Task {
    project?: Project
    name: string
    category: string
    description?: string
    action?: () => void
    dependent?: Task[]
}

export class ResolveDependenciesTask extends Task {
    name = 'resolveDependencies'
    category = 'dependencies'
    description = 'download dependencies jar to cache.'

    action = () => {
        if (!this.project) {
            throw Error('project is undefined.')
        }
        if (this.project.repositories.length == 0) {
            throw Error('please define repositories to search artifact')
        }
        this.project.dependencies.forEach((dependency) => {
            console.log(dependency)
        })
    }
}

export function task(name: string, action: () => void): Task {
    return new class extends Task {
        name = name
        category = 'other'
        description = 'no description'
        action = action
    }
}