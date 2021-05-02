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



}