import {MigrationInterface, QueryRunner} from "typeorm";

export class addedIsCorrectColumn1608485203033 implements MigrationInterface {
    name = 'addedIsCorrectColumn1608485203033'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Answers" ADD "isCorrect" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Answers" DROP COLUMN "isCorrect"`);
    }

}
