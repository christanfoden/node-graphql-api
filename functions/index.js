import * as functions from "firebase-functions";
const admin = require("firebase-admin");
admin.initializeApp(functions.config().firebase);
export const db = admin.firestore();

const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const { schema } = require("./schema");

const app = express();

app.use(cors({ origin: true }));
app.use(
  "/",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

exports.api = functions.https.onRequest(app);
