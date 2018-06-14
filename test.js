import test from 'ava'
import { forwardTo } from 'graphql-binding'
import { forward } from './dist'

test('Constructs tree correctly', async t => {
  const tree = forward('Query', 'Mutation.foo', 'Mutation.bar')('db')

  t.deepEqual(Object.keys(tree), ['Query', 'Mutation'])
  t.is(typeof tree.Query, 'function')
  t.deepEqual(Object.keys(tree.Mutation), ['foo', 'bar'])
})
