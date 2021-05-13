
export interface UserInstance {
    name: string
    surname: string
    company: {
        name: string
        job_title: string
    }
}

export interface Session {
    user?: UserInstance
}

export class Application {

    public static getLoggedInUser = (): UserInstance => {
        return {
            name: "John",
            surname: "Doe",
            company: {
                job_title: "Fullstack developer",
                name: "CompInc"
            }
        }
    }


}