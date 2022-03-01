import { Request, Response } from 'express';
import { container } from "tsyringe";
import { CreateVideoUseCase } from './CreateVideoUseCase';



export class CreateVideoController {
    async execute(request:Request, response:Response){
        const {titulo, descricao, urlThumb, urlVideo} = request.body;

        const createVideo = container.resolve(CreateVideoUseCase);

        await createVideo.execute(
            titulo,
            descricao,
            urlThumb,
            urlVideo
        );
    }
}