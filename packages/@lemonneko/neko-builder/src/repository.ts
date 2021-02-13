export interface Repository {
    type: string
    url: string
    username?: string
    password?: string
}

export function maven (url: string, username?:string, password?:string): Repository {
  return {
    type: 'maven',
    url,
    username,
    password
  }
}

export function mavenCentral (): Repository {
  return maven('https://repo1.maven.org/maven2/')
}

export function jCenter (): Repository {
  return maven('https://jcenter.bintray.com/')
}
