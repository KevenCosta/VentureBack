import { 
    Column, 
    CreateDateColumn, 
    Entity, 
    PrimaryGeneratedColumn } from "typeorm";

import {v4 as uuid} from 'uuid'


@Entity('video')
export class Video{
    @PrimaryGeneratedColumn('uuid')
    id?: string;

    @Column()
    titulo:string;

    @Column()
    descricao:string;

    @Column()
    urlThumb:string;

    @Column()
    urlVideo:string;

    @CreateDateColumn()
    created_at?: Date;

    constructor() {

        if(!this.id) {
            this.id = uuid();
          }
    }
}
