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
