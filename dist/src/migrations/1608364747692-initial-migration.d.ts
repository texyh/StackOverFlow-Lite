import { MigrationInterface, QueryRunner } from "typeorm";
export declare class initialMigration1608364747692 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
