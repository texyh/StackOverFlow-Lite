

const __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(((resolve) => { resolve(value); })); }
  return new (P || (P = Promise))(((resolve, reject) => {
    function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
    function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
    function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
    step((generator = generator.apply(thisArg, _arguments || [])).next());
  }));
};
Object.defineProperty(exports, '__esModule', { value: true });
exports.initialMigration1608364747692 = void 0;
class initialMigration1608364747692 {
  constructor() {
    this.name = 'initialMigration1608364747692';
  }

  up(queryRunner) {
    return __awaiter(this, void 0, void 0, function* () {
      yield queryRunner.query('CREATE TABLE "Questions" ("id" uuid NOT NULL, "text" text NOT NULL, CONSTRAINT "PK_8f81bcc6305787ab7dd0d828e21" PRIMARY KEY ("id"))');
      yield queryRunner.query('CREATE TABLE "Answers" ("id" uuid NOT NULL, "text" text NOT NULL, "questionId" uuid, CONSTRAINT "PK_e9ce77a9a6326d042fc833d63f5" PRIMARY KEY ("id"))');
      yield queryRunner.query('ALTER TABLE "Answers" ADD CONSTRAINT "FK_ff66967b8c32d6a22e32e5c4f66" FOREIGN KEY ("questionId") REFERENCES "Questions"("id") ON DELETE NO ACTION ON UPDATE NO ACTION');
    });
  }

  down(queryRunner) {
    return __awaiter(this, void 0, void 0, function* () {
      yield queryRunner.query('ALTER TABLE "Answers" DROP CONSTRAINT "FK_ff66967b8c32d6a22e32e5c4f66"');
      yield queryRunner.query('DROP TABLE "Answers"');
      yield queryRunner.query('DROP TABLE "Questions"');
    });
  }
}
exports.initialMigration1608364747692 = initialMigration1608364747692;
// # sourceMappingURL=1608364747692-initial-migration.js.map
