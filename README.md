# MyFace

## Getting started.
To get setup, download this code, and then run the following commands in the root directory of the app.

```shell
npm install
npm run migrate
npm run seed
```

- `npm install` downloads all the libraries that we depend on.
- `npm run migrate` setups a database for us to use.
- `npm run seed` adds some sample data to our database.

Once you have run all of those, we can simply start the app with
```shell
npm start
```

This should start the app, and we can see it by going to http://localhost:3001 in the browser.

To update the application, just change any of the code, save it, and the app should automatically update.
Just refresh the page to see the impact of your changes.

### Resetting the data
If you ever need to reset the database, then:
- stop the app
- delete the `dev.sqlite3` file.
- run `npm run migrate` and `npm run seed` again to re-make and re-populate the database.
