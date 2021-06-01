import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../../Redux/coursesPageReducer";
import { AppStateType } from "../../../Redux/store";
import { Valutes } from '../../../Redux/types';
import { CoursePageItem } from './CoursePageItem';


export const Courses = () => {

  const dispatch = useDispatch()

  async function  getCurrentCourses() {
    dispatch(getCourses())
  }

  const valutes: Valutes = useSelector( (state:AppStateType) => state.coursesPage.valutes)
  const date: string = useSelector ( (state:AppStateType) => state.coursesPage.date)


  useEffect( () => {
    console.log(valutes)
  }, [valutes])
  
  const keys = Object.keys(valutes)

  return (
    <>
      <h4>Курс валют</h4>
      <p>На дату: <strong>{date}</strong></p>

      <ul>
          {keys.map( (i) => {
          // return <li> {valutes[i].Name}  {valutes[i].Value} key={Date.now()}</li>
          return <CoursePageItem
           name={valutes[i].Name}
           value={valutes[i].Value}
           ticker={valutes[i].CharCode}
           nominal={valutes[i].Nominal}
           
           key={valutes[i].ID}

          />
        })}
      </ul>
      
      <button className="btn" onClick = {getCurrentCourses}>Get Courses</button>
    </>
  );
};
