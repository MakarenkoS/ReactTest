import { jsonPageActions } from './actions'
import { jsonPageReducer } from './jsonPageReducer'
import { JsonDataType } from './types'

let state = {
  jsonArray: [] as Array<JsonDataType>,
  portionSize: 5,
  portionCount: 15,
  filter: ''
}

test('new data array item should be added', () => {
  let action =  jsonPageActions.setData([{id: 1, title: 'test' }])
  let newState = jsonPageReducer(state, action)

  expect(newState.jsonArray.length).toBe(1)
})


it('new data array item should be the same', () => {
  let action =  jsonPageActions.setData([{id: 1, title: 'test' }])
  let newState = jsonPageReducer(state, action)

  expect(newState.jsonArray[0].title).toBe('test')
})


it('Adding data array should be correct', () => {
  let action =  jsonPageActions.setData([{id: 1, title: 'test' }, {id: 2, title: 'test2'}, {id: 3, title: 'test3'} ])
  let newState = jsonPageReducer(state, action)

  expect(newState.jsonArray.length).toBe(3)
  expect(newState.jsonArray[2].title).toBe('test3')
})


