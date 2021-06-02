import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../../Redux/coursesPageReducer";
import { AppStateType } from "../../../Redux/store";
import { Valutes } from "../../../Redux/types";
import { CoursePageItem } from "./CoursePageItem";

export const Courses = () => {
  const dispatch = useDispatch();

  async function getCurrentCourses() {
    dispatch(getCourses());
  }

  const valutes: Valutes = useSelector(
    (state: AppStateType) => state.coursesPage.valutes
  );
  const date: string = useSelector(
    (state: AppStateType) => state.coursesPage.date
  );

  useEffect(() => {
    console.log(valutes);
  }, [valutes]);


  
const dateOptions:any = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC+3',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

  const keys = Object.keys(valutes);
  const formatDate:any = new Date(Date.parse(date)).toLocaleString("ru", dateOptions)
   
  if (keys.length > 0) {
    return (
      <>
        <h4>Курс валют</h4>
        <p>
          На дату: <strong>{formatDate}</strong>
      
        </p>
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
            {keys.map((i) => {
              // return <li> {valutes[i].Name}  {valutes[i].Value} key={Date.now()}</li>
              return (
                <CoursePageItem
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

        <button className="btn" onClick={getCurrentCourses}>
          Get Courses
        </button>
      </>
    );
  } else
    return (
      <>
        <h4>Курс валют</h4>
        <button className="btn" onClick={getCurrentCourses}>
          Get Courses
        </button>
      </>
    );
};
