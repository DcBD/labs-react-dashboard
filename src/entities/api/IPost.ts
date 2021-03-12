import IBaseApiEntity from "./IBaseApiEntity";

export default interface IPost extends IBaseApiEntity{

    userId: number
    title: string
    body: string

}