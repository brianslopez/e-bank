// dependancies ================================>

const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");

// express =====================================>

const app = express();

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
