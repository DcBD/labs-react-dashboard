import IBaseApiEntity from "entities/api/IBaseApiEntity";
import IComment from "entities/api/IComment";
import IPhoto from "entities/api/IPhoto";
import IPost from "entities/api/IPost";
import IUser from "entities/api/IUser";
import ICollection from "entities/ICollection";

export class Api {


    public static fetchUsers = async (): Promise<ICollection<IUser>> => {
        const users = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

        return Api.makeCollection<IUser>(users);
    }

    public static fetchComments = async (): Promise<ICollection<IComment>> => {
        const comments = await fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json());

        return Api.makeCollection<IComment>(comments);
    }

    public static fetchPhotos = async (): Promise<ICollection<IPhoto>> => {
        const photos = await fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json());

        return Api.makeCollection<IPhoto>(photos);
    }

    public static fetchPosts = async (): Promise<ICollection<IPost>> => {
        const posts = await fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json());

        return Api.makeCollection<IPost>(posts);
    }




    private static makeCollection<T extends IBaseApiEntity>(data: Array<T>): ICollection<T> {
        const mappedData: ICollection<T> = {};

        data.map(entity => {
            mappedData[entity.id] = entity;
        })

        return mappedData;
    }
}