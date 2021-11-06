import { IVideoRepository } from "modules/video/repositories/IVideoRepository";
import { inject, injectable } from "tsyringe";


@injectable()
export class CreateVideoUseCase {
    constructor(
        @inject('VideoRepository')
        private videoRepository:IVideoRepository
    ){}

    async execute(titulo:string, descricao:string, urlThumb:string, urlVideo:string){
        await this.videoRepository.createVideo(
            titulo, 
            descricao, 
            urlThumb, 
            urlVideo)
    }
}