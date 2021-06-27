import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsonPageActions } from "../../../Redux/actions";
import { getPosts } from "../../../Redux/jsonPageReducer";
import { AppStateType } from "../../../Redux/store";
import { Paginator } from "../../common/Paginator";
import { Preloader } from "../../common/Preloader";
import { JsonPageItem } from "./JsonPageItem";


type PropTypes = {};

export const JsonPage: React.FC<PropTypes> = React.memo(() => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  let posts = useSelector((state: AppStateType) => state.jsonPage.jsonArray);
  
  const portionSize = useSelector(
    (state: AppStateType) => state.jsonPage.portionSize
  );
  const filterString = useSelector(
    (state: AppStateType) => state.jsonPage.filter
  );

  const isFetching = useSelector(
    (state: AppStateType) => state.jsonPage.isFetching
  )

  let count:number = 0;

  useEffect(() => {
    dispatch(getPosts());
    count = posts.length

  }, [dispatch]);

  useEffect( () => {
    setCurrentPage(1)
    console.log(posts.length)
  }, [filterString, posts.length ])



  if (posts.length === 0) {
    if (isFetching) {
      return <Preloader />
    }
    return (
    <h3>No data</h3>
    )
  }

  const setFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(jsonPageActions.setFilter(e.currentTarget.value))
  }

  const clearFilter = () => {
    dispatch(jsonPageActions.clearFilter())
  }
  let newPosts =  posts.filter((p) => {
    return p.title.includes(filterString)
  }) 

  return (
    <div>
      <nav>
        <div className="nav-wrapper  grey lighten-1">
          <form>
            <div className="input-field">
              <input
                id="search"
                onChange={setFilterChange}
                value={filterString}
                type="search"
                required
              ></input>
              <label className="label-icon" htmlFor="search">
                <i className="material-icons">search</i>
              </label>
              <i className="material-icons" onClick = {clearFilter}>close</i>
            </div>
          </form>
        </div>
      </nav>
      
      {posts
        .filter((p) => {
          return p.title.includes(filterString)
        }) 
        .map((p) => {
          return { userId: p.id, id: ++count, title: p.title };
        })
        .filter(
          (p) =>
            p.id <= currentPage * portionSize &&
            p.id >= (currentPage - 1) * portionSize + 1
        )
        .map((p) => (
            <JsonPageItem key={p.id} id={p.userId} idNumber={p.id} title={p.title} />
        ))}

      <Paginator
        portionSize={portionSize}
        portionCount={count}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  )
})