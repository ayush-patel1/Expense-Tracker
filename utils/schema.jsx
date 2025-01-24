import {
  integer,numeric,pqTable,serial,varchar
} from 'drizzle-orm/pg-core'

//budget
export const Budgets = pqTable('budget',{
   id:serial('id').primaryKey(),
   name:varchar('name').notNull(),
    amount:varchar('amount').notNull(),
    Icon:varchar('Icon'),
    createdBy:varchar('createdBy').notNull(),
})

