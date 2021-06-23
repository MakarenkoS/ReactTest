import React from 'react'

type PropsType = {
  portionCount: number
  portionSize: number
  currentPage: number
  setCurrentPage: (page: number) => void
}

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
}


export const Paginator: React.FC<PropsType> = ({ portionCount, portionSize, currentPage, setCurrentPage }) => {
  let cn
  const totalPageCount = Math.ceil(portionCount / portionSize)
  let pages = []
  console.log('portion count', portionCount)
  console.log('portion size', portionSize)
  console.log('total page', totalPageCount)
  

  for (let i = 1; i <= totalPageCount; i++) {
    pages.push(i)
  }

  function canPageLeft() {
    return currentPage > 1
  }

  function canPageRight() {
    return currentPage < totalPageCount
  }


  function onArrowClick(e: HTMLElementEvent<HTMLButtonElement> & React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    switch (e.target.dataset.arrrow) {
      case 'left':
        if (canPageLeft()) {
          setCurrentPage(currentPage - 1)
        }
        break
      case 'right':
        if (canPageRight()) {
          setCurrentPage(currentPage + 1)
        }
        break
      default:
    }
  }

  return (
    <ul className="pagination">

      <li className={canPageLeft() === true ? "waves-effect" : "disabled"}>
        <a href="#!" onClick={onArrowClick}><i data-arrow="left" className="material-icons">chevron_left</i></a>
      </li>

      {pages.map(p => {
        currentPage === p ? cn = "active" : cn = "waves-effect"
        return <li className={cn} key={p} onClick={() => setCurrentPage(p)}><a href="#!">{p}</a></li>
      })}

      <li className={canPageRight() === true ? "waves-effect" : "disabled"}>
        <a href="#!" onClick={onArrowClick}><i data-arrow="right" className="material-icons">chevron_right</i></a>
      </li>
    </ul>
  )
}