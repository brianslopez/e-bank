// dependancies ================================>

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

// express =====================================>

const app = express();

mongoose.connect(
  "mongodb+srv://root:rootpass@cluster0.ftecf.mongodb.net/e-bank?retryWrites=true&w=majority"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// server ======================================>

app.listen(3001, () => {
  console.log("now listening for requests on port 3001");
});
