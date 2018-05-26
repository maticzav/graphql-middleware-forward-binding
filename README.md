# graphql-middleware-forward-binding

[![CircleCI](https://circleci.com/gh/maticzav/graphql-middleware-forward-binding.svg?style=shield)](https://circleci.com/gh/maticzav/graphql-middleware-forward-binding)
[![npm version](https://badge.fury.io/js/graphql-middleware-forward-binding.svg)](https://badge.fury.io/js/graphql-middleware-forward-binding)

> GraphQL Middleware plugin for forwarding request to GraphQL Bindings.

## Usage

> With GraphQL Yoga and Prisma

```ts
import { GraphQLServer } from 'graphql-yoga'
import { forward } from 'graphql-middleware-forward-binding'
import { Prisma } from 'prisma-binding'

const bindingForwardMiddleware = forward('Query', 'Mutation')('db')

const server = GraphQLServer({
  typeDefs: 'generated-schema.graphql',
  resolvers: {},
  middlewares: [bindingForwardMiddleware],
  context: req => ({
    ...req,
    db: new Prisma({
      endpoint: 'https://eu1.prisma.sh/public-saberbow/prisma-yoga/dev',
      debug: true,
    }),
  }),
})

serve.start(() => `Server running on http://localhost:4000`)
```

## API

```ts
function forward(types: string[])(database: string): IMiddleware
```

## License

MIT @ Matic Zavadlal
