// imports ======================================>

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

// application =================================>

mongoose.connect(
  "mongodb+srv://root:rootpass@cluster0.ftecf.mongodb.net/e-bank?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.listen(3001, () => {
  console.log("now listening for requests on port 3001");
});
