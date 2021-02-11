import * as fs from "fs";
import * as path from "path";

export class Config {

}

export class ConfigReader {
    static readConfig(): Config {
        return this.readConfigFromFile('neko-builder.config.js')
    }
    static readConfigFromFile(filePath: string): Config {
        const configPath = path.resolve(filePath)
        if (fs.existsSync(configPath)) {
            return require(configPath)
        } else {
            return new Config()
        }
    }
}