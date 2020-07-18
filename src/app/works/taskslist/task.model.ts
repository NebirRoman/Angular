import { ITask } from './task.interface'

export class Task implements ITask{
    constructor(
        public name: string,
        public status: boolean
    ){}
}