## Working with Prisma

Clone the repo first then you can run the following commands

#### To `execute` the index.ts file (typescript):

```
pnpm exec ts-node index.ts // or equivalent
```

to make things easer you can run the `start` script also

```
pnpm start
```

---

If you want to run a migration to create your database tables use `Prisma Migrate` command

```
npx prisma migrate dev --name init
```
This command will do two things:

- It creates a new SQL migration file for this migration in the prisma/migrations directory.
- It runs the SQL migration file against the database.

⚠️ If an SQLite database file didn't exist before, the command will create it inside the prisma directory with the name dev.db as defined via the environment variable in the .env file.
