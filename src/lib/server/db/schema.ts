import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const family = sqliteTable('family', {
	id: integer('id').primaryKey(),
	name: text('name').notNull()
});

export const user = sqliteTable('user', {
	id: integer('id').primaryKey(),
	age: integer('age'),
	familyId: integer('family_id').references(() => family.id).notNull()
});
