import React from "react";

type PropsType = {
  name: string;
  value: number;
  ticker: string;
  nominal: number;
  previousValue: number
};

const ArrowIcon: React.FC<{diff: number}> = ({ diff }) => {
  if(diff < 0) {
    return <>
       <i className="material-icons red-text">arrow_drop_up</i> 
    </>
  }
  return <>
  <i className="material-icons green-text">arrow_drop_down</i> 
  </>
}

export const CoursePageItem: React.FC<PropsType> = ({
  name,
  value,
  ticker,
  nominal,
  previousValue
}) => {
  const diff: number = +(previousValue - value).toFixed(2)

  return (
    <tr>
      <td> {ticker} </td>
      <td> {nominal} </td>
      <td> {name} </td>
      <td> <b> {(value).toFixed(2)} </b> </td>
      <td> {(value - previousValue).toFixed(2)}</td>
      <td><ArrowIcon diff={diff}/></td>
    </tr>
  )
}
