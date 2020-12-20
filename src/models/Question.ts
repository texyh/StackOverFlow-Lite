import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm";
import { Answer } from "./Answer";
@Entity("Questions")
export class Question {

    @PrimaryColumn('uuid')
    id: string

    @Column({type: "text"})
    text: string

    @OneToMany(() => Answer, answer => answer.question)
    answers: Answer[]
}


