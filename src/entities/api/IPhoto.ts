import IBaseApiEntity from "./IBaseApiEntity";

export default interface IPhoto extends IBaseApiEntity {
    albumId : number
    title: string
    url: string
    thumbnailUrl: string
}