import React from 'react';
import { Valutes } from '../../../Redux/types';
import { CoursePageTableItem } from './CoursePageTableItem';

type PropTypes = {
  valuteKeys: Array<string>,
  valutes: Valutes
}

export const CoursePageTable:React.FC<PropTypes> = ({valuteKeys, valutes}) => {
  return (
    <table className="striped">
          <thead>
            <tr>
              <th>Тикер</th>
              <th>Номинал</th>
              <th>Наименование</th>
              <th>Рублей</th>
            </tr>
          </thead>

          <tbody>
            {valuteKeys.map((i) => {
              return (
                <CoursePageTableItem
                  name={valutes[i].Name}
                  value={valutes[i].Value}
                  ticker={valutes[i].CharCode}
                  nominal={valutes[i].Nominal}
                  previousValue={valutes[i].Previous}
                  key={valutes[i].ID}
                />
              );
            })}
          </tbody>
        </table>
  )
}

