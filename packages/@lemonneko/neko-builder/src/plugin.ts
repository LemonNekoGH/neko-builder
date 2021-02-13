import { DefaultProject } from './config'

export interface Plugin {
    apply(project: DefaultProject): void
}
