import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPosts } from '../../../../Redux/jsonPageReducer'
import { Paginator } from './../../../common/Paginator'
import { JsonPageItem } from './JsonPageItem'



export const JsonPage = React.memo(() => {

  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
 
 
  let posts = useSelector( state => state.jsonPage.posts)
  const portionSize = useSelector( state => state.jsonPage.portionSize)
  const portionCount = useSelector( state => state.jsonPage.portionCount)


  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
 
  if(posts.length === 0) {
    return (
      <div>Loading..</div>
    )
  }

  return (
    <div>
      <nav>
        <div className="nav-wrapper  grey lighten-1">
          <form>
            <div className="input-field">
              <input id="search" type="search" required></input>
              <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
              <i className="material-icons">close</i>
            </div>
          </form>
        </div>
      </nav>

      {posts
      .filter(p => (p.id <= currentPage * portionSize) && (p.id >= ((currentPage - 1) * portionSize) + 1 ))
      .map((p) => <JsonPageItem key={p.id} id={p.id} title={p.title} />)}

      <Paginator portionSize = {portionSize} 
                 portionCount = {portionCount} 
                 currentPage = {currentPage}  
                 setCurrentPage = {setCurrentPage}
                 />

     </div>
  )
})