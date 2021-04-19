import IBaseApiEntity from "entities/api/IBaseApiEntity";
import IComment from "entities/api/IComment";
import IPhoto from "entities/api/IPhoto";
import IPost from "entities/api/IPost";
import IUser from "entities/api/IUser";
import ICollection from "entities/ICollection";

export class Api {

    public static fetchData = async (): Promise<{ users: Array<IUser>, comments: Array<IComment>, photos: Array<IPhoto>, posts: Array<IPost> }> => {

        const users = await Api.fetchUsers();
        const comments = await Api.fetchComments();
        const photos = await Api.fetchPhotos();
        const posts = await Api.fetchPosts();

        return {
            users: users,
            comments: comments,
            photos: photos,
            posts: posts
        }
    }

    public static fetchUsers = async (): Promise<Array<IUser>> => {
        const users = await fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json());

        return users;
    }

    public static fetchComments = async (): Promise<Array<IComment>> => {
        const comments = await fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json());

        return comments;
    }

    public static fetchPhotos = async (): Promise<Array<IPhoto>> => {
        const photos = await fetch('https://jsonplaceholder.typicode.com/photos').then(response => response.json());

        return photos;
    }

    public static fetchPosts = async (): Promise<Array<IPost>> => {
        const posts = await fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json());

        return posts;
    }




    private static makeCollection<T extends IBaseApiEntity>(data: Array<T>): ICollection<T> {
        const mappedData: ICollection<T> = {};

        data.map(entity => {
            mappedData[entity.id] = entity;
        })

        return mappedData;
    }
}