const express = require('express')
const expressPlayground = require('./graphql-playground-middleware-express/dist/index').default

const PORT = 4000;
const ENDPOINT = process.env.GRAPHQL_ENDPOINT || 'http://localhost:8080/graphql';

const app = express();

app.get(
  '/playground',
  expressPlayground({
    endpoint: ENDPOINT,
  }),
);
app.listen(PORT);

console.log(
  `Serving the GraphQL Playground on http://localhost:${PORT}/playground`,
);
