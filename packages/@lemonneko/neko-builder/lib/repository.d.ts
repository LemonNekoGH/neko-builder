export interface Repository {
    type: string;
    url: string;
    username?: string;
    password?: string;
}
export declare function maven(url: string, username?: string, password?: string): Repository;
export declare function mavenCentral(): Repository;
export declare function jCenter(): Repository;
