## Usage

```
• git clone <repo_name>
• cd functions/
• npm i
• npm run serve
```

You will see something like this in your console:

```
=== Serving from '/Volumes/OWC_300/node-graphQL-api'...

i  functions: Preparing to emulate functions.
Warning: You're using Node.js v11.9.0 but Google Cloud Functions only supports v6.11.5.
✔  functions: api: http://localhost:5000/offkey-1/us-central1/api`
```

```
• cms + click the api link or open in a browser
```

This will open GraphiQL in a browser window. add the following query:

```
{
  hello
}
```
This particular example is demonstrating how you can write an express api inside of a google cloud function utilising a graphQL data layer. Using graphQL is optional but essentially its a way to build out an API inside of a firebase environment as a stepping stone should an application need to be migrated over to another environment in the future.

All of your endpoints are written inside of the cloud function and so moving the code into a new enviroment would then require only a new root / port and the replacement of the database query functions if a different database is chosen in future.
