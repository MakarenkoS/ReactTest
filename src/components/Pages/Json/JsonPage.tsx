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
  // const setSearchFilter = dispatch(jsonPageActions.setFilter(filter))
  const [currentPage, setCurrentPage] = useState(1);
  let posts = useSelector((state: AppStateType) => state.jsonPage.jsonArray);
  const portionSize = useSelector(
    (state: AppStateType) => state.jsonPage.portionSize
  );
  const filterString = useSelector(
    (state: AppStateType) => state.jsonPage.filter
  );
  
  let count: number = 1;

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  useEffect( () => {
    setCurrentPage(1)
  }, [filterString])

  if (posts.length === 0) {
    return <Preloader />;
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
  console.log(newPosts)
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
          return { userId: p.id, id: count++, title: p.title };
        })
        .filter(
          (p) =>
            p.id <= currentPage * portionSize &&
            p.id >= (currentPage - 1) * portionSize + 1
        )
        .map((p) => (
          <JsonPageItem key={p.id} id={p.id} title={p.title} />
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