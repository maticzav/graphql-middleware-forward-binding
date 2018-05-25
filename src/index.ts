import { IMiddleware } from 'graphql-middleware'
import { forwardTo } from 'graphql-binding'

export const forward = (database: string): IMiddleware => {
  if (!database) {
    throw new Error(`Missing database name.`)
  }

  return async function(resolve, parent, args, ctx, info) {
    return forwardTo(database)(parent, args, ctx, info)
  }
}
