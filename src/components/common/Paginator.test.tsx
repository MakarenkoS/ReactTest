import { create } from 'react-test-renderer';
import { Paginator } from './Paginator';

test('Expected li`s count should be equal to pages count (4 pages)', () => {
  const component = create(<Paginator portionCount={17} portionSize={5} currentPage={1} setCurrentPage={()=>{}} />)
  const root = component.root
  
  let liCount = root.findAllByType("li")
  expect(liCount.length - 2).toBe(4)
} )

test('Expected li`s count should be equal to pages count (3 pages)', () => {
  const component = create(<Paginator portionCount={14} portionSize={5} currentPage={1} setCurrentPage={()=>{}} />)
  const root = component.root
  
  let liCount = root.findAllByType("li")
  expect(liCount.length - 2).toBe(3)
} )