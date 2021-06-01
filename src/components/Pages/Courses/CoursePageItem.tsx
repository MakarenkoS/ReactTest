import React from 'react'

type PropsType = {
  name: string
  value: number
  ticker: string
  nominal: number
}

export const CoursePageItem: React.FC<PropsType> = ({name, value, ticker, nominal}) => {
  return <>
    <div>
      <span> {nominal} {name}
       
      {(nominal>1) ? " равны " : " равен "}
      <strong> {value} </strong> рублям </span>   
    </div>
  </>
}