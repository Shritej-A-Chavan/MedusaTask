import { Migration } from '@mikro-orm/migrations';

export class Migration20250826062730 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`create table if not exists "xproduct" ("id" text not null, "product_expiry_date" timestamptz null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "xproduct_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_xproduct_deleted_at" ON "xproduct" (deleted_at) WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "xproduct" cascade;`);
  }

}
