import IBaseApiEntity from "./IBaseApiEntity";

export default interface IComment extends IBaseApiEntity {

    postId: number
    name: string
    email: string
    body: string
}