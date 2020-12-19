import {MigrationInterface, QueryRunner} from "typeorm";

export class initialMigration1608364747692 implements MigrationInterface {
    name = 'initialMigration1608364747692'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Questions" ("id" uuid NOT NULL, "text" text NOT NULL, CONSTRAINT "PK_8f81bcc6305787ab7dd0d828e21" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Answers" ("id" uuid NOT NULL, "text" text NOT NULL, "questionId" uuid, CONSTRAINT "PK_e9ce77a9a6326d042fc833d63f5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "Answers" ADD CONSTRAINT "FK_ff66967b8c32d6a22e32e5c4f66" FOREIGN KEY ("questionId") REFERENCES "Questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "Answers" DROP CONSTRAINT "FK_ff66967b8c32d6a22e32e5c4f66"`);
        await queryRunner.query(`DROP TABLE "Answers"`);
        await queryRunner.query(`DROP TABLE "Questions"`);
    }

}
