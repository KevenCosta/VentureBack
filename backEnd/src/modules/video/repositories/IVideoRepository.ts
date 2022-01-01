import { Video } from "../entities/Video";


export interface IVideoRepository {
    createVideo (titulo:string, descricao:string, urlThumb:string, urlVideo:string): Promise<void>
    getVideos (): Promise<Video[]>
}