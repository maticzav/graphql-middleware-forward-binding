import { IMiddleware } from 'graphql-middleware'
import { forwardTo } from 'graphql-binding'
import { set } from 'dot-prop'

export const forward = (...types: string[]) => (
  database: string,
): IMiddleware => {
  if (!database) {
    throw new Error(`Missing database name.`)
  }

  if (!types) {
    throw new Error(`Missing forwarded types list.`)
  }

  const fn = async function(resolve, parent, args, ctx, info) {
    return forwardTo(database)(parent, args, ctx, info)
  }

  const middleware = types.reduce((_types, type) => set(_types, type, fn), {})

  return middleware
}
