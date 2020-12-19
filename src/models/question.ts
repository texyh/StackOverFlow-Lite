import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn } from "typeorm";
@Entity("Questions")
export class Question {

    @PrimaryColumn('uuid')
    id: string

    @Column({type: "text"})
    text: string

    @OneToMany(() => Answer, answer => answer.question)
    answers: Answer[]
}

@Entity("Answers")
export class Answer {

    @PrimaryColumn('uuid')
    id: string

    @Column("text")
    text: string

    @ManyToOne(() => Question, question => question.answers)
    question: Question
}



