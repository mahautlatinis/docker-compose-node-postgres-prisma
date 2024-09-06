# node-compose

This project may help you when starting your Node / Express projects with Docker Compose (Postgres DB and Prisma ORM, mac OS).

You can use the Makefile and simply do a `make` command to start your project.
Make sure you create a `.env` file and add the correct `DATABASE_URL` (it should be included in a `.gitignore` file). It should be placed in the `backend` folder (or equivalent if you want to rename it).

Example :
`DATABASE_URL="postgresql://youruser:yourpassword@db:5432/mydb?schema=public"`

Make sure the docker compose file is edited as well so the database's user and password are properly defined.

## Migrations

```yml
# Command to run migrations
docker-compose exec <server_container_name> npx prisma migrate dev
```

I made a little change in the schema.prisma so you can see that migrations are working file.
