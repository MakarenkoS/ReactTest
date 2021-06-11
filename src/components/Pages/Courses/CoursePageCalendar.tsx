import React from 'react';
import { dateOptions } from '../../../Redux/types';

type PropsType = {
  selectedDate: string,
  setSelectedDate: (selectedDate: string) => void,
  date: string
}

export const CoursePageCalendar:React.FC<PropsType> = ({selectedDate, setSelectedDate, date}) => {

  const formatDate: any = new Date(Date.parse(date)).toLocaleString(
    "ru",
    dateOptions
  )

  return (
    <div className="row">
          <div className="col s6">
            <p>
              На дату: <strong>{formatDate}</strong>
            </p>
          </div>
          <div className="input-field col s6">
            <p>Выберите дату: </p>
            <input
              placeholder=""
              id="dateStart"
              type="date"
              className="validate"
              name="dataStart"
              value={selectedDate}
              onChange={(e: any) => setSelectedDate(e.currentTarget.value)}
            />
            <label htmlFor="dateStart">Дата</label>
          </div>
        </div>
  )
}