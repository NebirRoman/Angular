import { IWork } from './work.interface'

export class Work implements IWork{
    constructor(
        public title: string, 
        public img: string,
        public details: string
    ){}
}