import { Sort } from "shared/Types";

export class UtilsService {

    /**
     * Says hello in console.
     */
    public static SayHello(): void {
        console.info("Hello");
    }

    public static Filter(collection: Array<any>, filter: string, key: string) {
        return collection.filter(obj => obj[key].toLowerCase().indexOf(filter.toLowerCase()) >= 0)
    }

    public static Random(multiplier: number = 0.75) {
        return Math.floor((Math.random() * 100) * multiplier);
    }

    public static Sort(collection: Array<any>, sort: Sort, key: string) {
        return collection.sort(function (a, b) {
            var nameA = a[key].toUpperCase();
            var nameB = b[key].toUpperCase();
            if (nameA < nameB) {
                return sort == "desc" ? 1 : -1;
            }
            if (nameA > nameB) {
                return sort == "desc" ? -1 : 1;
            }
            return 0;
        })
    }

}