I used the nest.js frameWork to make my api with Prisma as the orm and a PostgresSQL image in docker for the database.

The front end is made with web-components with an mvc (model view controller) architecture.

The system has a registration and login instance in which the API returns the user id and a jwt for future validation of the requests.

Then the API has several endpoints that allow you to do the crud of the note and also create categories and associate them with the notes through an intermediate table.

I also managed to do some unit testing to validate registration and login.

To start the api you must run the command "npm run start:app" in a console and then
"npm run start:prisma". It is important for this to work to have the Docker engine running and installed since the database is virtualized in a postgresSQL image.

On the other hand, the frontend can run on any server that accepts the website. I use Live Server which is an extension of vsc, a local development server with live reloading feature for static and dynamic pages.

Thank you for the opportunity . Mateo Roca
