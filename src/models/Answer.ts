import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./Question";

@Entity("Answers")
export class Answer {

    @PrimaryColumn('uuid')
    id: string

    @Column("text")
    text: string

    @ManyToOne(() => Question, question => question.answers)
    question: Question
}