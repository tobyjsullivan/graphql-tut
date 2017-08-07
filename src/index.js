const express = require('express');
const bodyParser = require('body-parser');
const {graphqlExpress} = require('apollo-server-express');

const schema = require('./schema');

let app = express();
app.use('/graphql', bodyParser.json(), graphqlExpress({schema}));

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Hackernews GraphQL server running on port ${PORT}.`);
});

