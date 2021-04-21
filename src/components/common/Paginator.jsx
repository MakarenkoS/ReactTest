import React from 'react'

export const Paginator = (props) => {
  let cn
  const totalPageCount = Math.ceil(props.portionCount / props.portionSize)
  let pages = []

  for (let i = 1; i <= totalPageCount; i++) {
    pages.push(i)
  }

  function canPageLeft() {
    return props.currentPage > 1
  }

  function canPageRight() {
    return props.currentPage < totalPageCount
  }

  function onArrowClick(e) {
    switch (e.target.dataset.arrow) {
      case 'left':
        if (canPageLeft()) {
          props.setCurrentPage(props.currentPage - 1)
        }
        break
      case 'right':
        if (canPageRight()) {
          props.setCurrentPage(props.currentPage + 1)
        }
        break
      default:

    }

  }

  return (
    <ul className="pagination">

      <li className={canPageLeft() === true ? "waves-effect" : "disabled"}

      >
        <a href="#!" onClick={onArrowClick}><i data-arrow="left" className="material-icons">chevron_left</i></a>
      </li>

      {pages.map(p => {
        props.currentPage === p ? cn = "active" : cn = "waves-effect"
        return <li className={cn} key={p} onClick={() => props.setCurrentPage(p)}><a href="#!">{p}</a></li>
      })}

      <li className={canPageRight() === true ? "waves-effect" : "disabled"}>
        <a href="#!" onClick={onArrowClick}><i data-arrow="right" className="material-icons">chevron_right</i></a>
      </li>
    </ul>
  )
}