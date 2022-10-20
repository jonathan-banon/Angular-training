import { Skill } from "./skill";

export class Developer {
    constructor(
        public firstname: string,
        public lastname: string,
        public age: number,
        public gender: string,
        public bio: string,
        public skills: Skill[]
    ){}
}