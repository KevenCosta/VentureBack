import { getRepository, Repository } from "typeorm";
import { Video } from "../entities/Video";
import { IVideoRepository } from "./IVideoRepository";


export class VideoRepository implements IVideoRepository {
    private repository: Repository<Video>;

    constructor(){
        this.repository = getRepository(Video)
    }

    async createVideo(
        titulo:string, 
        descricao:string, 
        urlThumb:string, 
        urlVideo:string): Promise<void>{
            this.repository.create({
                titulo,
                descricao,
                urlThumb,
                urlVideo
            })
        }

    async getVideos():Promise<Video[]>{
        return this.repository.find()
    }
}