

type Currency = "$" | "€"
export interface UserInstance {
    name: string
    surname: string
    email: string
    phone: string
    company: {
        name: string
        job_title: string
        expertise: Array<string>
        specialties: Array<string>
        admission_to_practice_law: Array<string>
        countries: Array<string>
    },
    internalReviews: Array<{
        id: number,
        name: string
        entity: string
        location: string
        expertise: string
        date: string
    }>
    proposals: Array<{
        id: number
        name: string
        entity: string
        location: string
        expertise: string
        date: string
        firm: string
    }>
    panelInformation: {
        hourly_fee: number
        currency: Currency
        type: "" | "Negotiated",
        attachments: Array<string>
        internal_correspondents: Array<string>
        terms_and_conditions: string,
        services_and_projects: string
    },
    amountOfFees: Array<{
        id: number
        year: number,
        cost_center: string,
        total_amount: string,
        law_firm: string

    }>


}

export interface Session {
    user?: UserInstance
}

export class Application {

    public static getLoggedInUser = (): UserInstance => {
        return {
            name: "John",
            surname: "Doe",
            email: "humbertaswift@gmail.com",
            phone: "+33 (0)6 12 34 56 78",
            company: {
                job_title: "Fullstack developer",
                name: "CompInc",
                admission_to_practice_law: ["Paris bar association", "Tunisian bar association"],
                countries: ["Tunisia"],
                expertise: ["Mergers and acquisition"],
                specialties: ["Cross border operation", "Transactions over 500M€/$"],
            },
            internalReviews: [
                {
                    id: 1,
                    name: "Lorem ipsum cos tam cos bla bla bla",
                    entity: "Renault Corporation",
                    location: "France",
                    expertise: "#Tax",
                    date: "20/01/2014",
                },
                {
                    id: 2,
                    name: "Lorem ipsum cos tam cos bla bla bla",
                    entity: "Renault Corporation",
                    location: "USA",
                    expertise: "#M&A",
                    date: "20/01/2015",
                },
                {
                    id: 3,
                    name: "Lorem ipsum cos tam cos bla bla bla",
                    entity: "Renault Corporation",
                    location: "Italy",
                    expertise: "#Social",
                    date: "20/01/2018",
                },
                {
                    id: 4,
                    name: "Lorem ipsum cos tam cos bla bla bla",
                    entity: "Renault Corporation",
                    location: "Germany",
                    expertise: "#Social",
                    date: "20/01/2018",
                },
                {
                    id: 5,
                    name: "Lorem ipsum cos tam cos bla bla bla",
                    entity: "Renault Corporation",
                    location: "Poland",
                    expertise: "#Tax",
                    date: "20/01/2012",
                }
            ],
            proposals: [
                {
                    id: 1,
                    name: "Lorem ipsum cos tam cos bla bla bla",
                    entity: "Renault Corporation",
                    location: "France",
                    expertise: "#Tax",
                    date: "20/01/2011",
                    firm: "Racine"
                },
                {
                    id: 2,
                    name: "Lorem ipsum cos tam cos bla bla bla",
                    entity: "Renault Corporation",
                    location: "USA",
                    expertise: "#Tax",
                    date: "20/01/2019",
                    firm: "Racine"
                },
                {
                    id: 3,
                    name: "Lorem ipsum cos tam cos bla bla bla",
                    entity: "Renault Corporation",
                    location: "Germany",
                    expertise: "#Tax",
                    date: "20/01/2017",
                    firm: "Racine"
                },
                {
                    id: 4,
                    name: "Lorem ipsum cos tam cos bla bla bla",
                    entity: "Renault Corporation",
                    location: "France",
                    expertise: "#Tax",
                    date: "20/01/2015",
                    firm: "Racine"
                },
                {
                    id: 5,
                    name: "Lorem ipsum cos tam cos bla bla bla",
                    entity: "Renault Corporation",
                    location: "Italy",
                    expertise: "#Tax",
                    date: "20/01/2012",
                    firm: "Racine"
                },
            ],
            panelInformation: {
                attachments: ["example1.jpg"],
                currency: "€",
                hourly_fee: 610,
                internal_correspondents: [
                    "Lorem Ipsum",
                    "Dolor amet"
                ],
                type: "Negotiated",
                terms_and_conditions: "Monthly 10k€ retainer - see with Jeanny Smith",
                services_and_projects: "Corporate M&A and international acquisitions"
            },
            amountOfFees: [
                {
                    id: 1,
                    year: 2019,
                    cost_center: "CS 153",
                    total_amount: "3500€",
                    law_firm: "Clifford chance"
                },
                {
                    id: 2,
                    year: 2018,
                    cost_center: "CS 153",
                    total_amount: "9500€",
                    law_firm: "Linklaters"
                },
                {
                    id: 3,
                    year: 2017,
                    cost_center: "CS 153",
                    total_amount: "3500€",
                    law_firm: "Clifford chance"
                }
            ]

        }
    }


}


