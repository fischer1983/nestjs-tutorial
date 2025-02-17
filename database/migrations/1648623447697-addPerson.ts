import { MigrationInterface, QueryRunner } from 'typeorm';

export class addPerson1648623447697 implements MigrationInterface {
  name = 'addPerson1648623447697';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "public"."person" ("id" SERIAL NOT NULL, "name" character varying(255), "document_number" character varying(11), 
       "birth_date" date, "creation_date" TIMESTAMP NOT NULL DEFAULT now(), "last_modified_date" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "pk_person_id" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(`CREATE UNIQUE INDEX "idx_person_document_number" ON "public"."person" ("document_number") `);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // await queryRunner.query(`DROP INDEX "public"."IDX_b67337b7f8aa8406e936c2ff75"`);
    // await queryRunner.query(`DROP TABLE "public"."user"`);
    // await queryRunner.query(`DROP TABLE "public"."todo"`);
  }
}