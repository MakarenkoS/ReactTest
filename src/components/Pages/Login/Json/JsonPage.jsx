import React, { useEffect, useState } from 'react'
import classes from './JsonPage.module.css'
import { postApi } from '../../../../api/api'
import { JsonPageItem } from './JsonPageItem'
import {Paginator} from './../../../common/Paginator'



export const JsonPage = () => {

  const [posts, setPosts] = useState([{}])
  const [currentPage, setCurrentPage] = useState(1)
 
  const portionSize = 5
  const portionCount = 18
  

  useEffect(() => {
    async function fetchPosts() {
      const data = await postApi.getPosts(portionCount)
      setPosts(data)
    }
    fetchPosts()
  }, [])
  
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
}