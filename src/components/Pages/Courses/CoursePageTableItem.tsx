import React from "react";
import { ArrowIcon } from "../../common/utils";

type PropsType = {
  name: string;
  value: number;
  ticker: string;
  nominal: number;
  previousValue: number
};

export const CoursePageTableItem: React.FC<PropsType> = ({
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
      <td> {(previousValue - value).toFixed(2)}</td>
      <td><ArrowIcon diff={diff}/></td>
    </tr>
  )
}
