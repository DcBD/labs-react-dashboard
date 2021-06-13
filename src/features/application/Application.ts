

type Currency = "$" | "€"
export interface UserInstance {
    name: string
    surname: string
    email: string
    phone: string
    company: {
        name: string
        job_title: string
        expertise: Array<Label>
        specialties: Array<Label>
        admission_to_practice_law: Array<Label>
        countries: Array<Label>
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
        internal_correspondents: Array<{ id: string, text: string }>
        terms_and_conditions: string,
        services_and_projects: string
    },
    amountOfFees: Array<{
        id: number
        year: number | string,
        cost_center: string,
        total_amount: string,
        law_firm: string

    }>


}

interface Label {
    id: string,
    label: string
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
                admission_to_practice_law: [{ label: "Paris bar association", id: "1" }, { label: "Tunisian bar association", id: "2" }],
                countries: [{ label: "Tunisia", id: "1" }],
                expertise: [{ label: "Mergers and acquisition", id: "1" }],
                specialties: [{ label: "Cross border operation", id: "1" }, { label: "Transactions over 500M€/$", id: "2" }],
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
                    { id: "1", text: "Lorem Ipsum" },
                    { id: "2", text: "Dolor amet" }
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


