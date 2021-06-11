import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCourses } from "../../../Redux/coursesPageReducer";
import { AppStateType } from "../../../Redux/store";
import { Valutes } from "../../../Redux/types";
import { Preloader } from "../../common/Preloader";
import { buildDateString } from "../../common/utils";
import { CoursePageCalendar } from "./CoursePageCalendar";
import { CoursePageExchange } from "./CoursePageExchange";
import { CoursePageTable } from "./CoursePageTable";
import styles from "./CoursesPage.module.css";

export const Courses = () => {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(""); // выбранная дата
  const valutes: Valutes = useSelector(
    (state: AppStateType) => state.coursesPage.valutes
  );
  const date: string = useSelector(
    (state: AppStateType) => state.coursesPage.date
  );

  const isFetching = useSelector(
    (state: AppStateType) => state.coursesPage.isFetching
  );

  //Получение данных с сервера с заданной датой
  const getCurrentCourses = () => {
    selectedDate !== ""
      ? dispatch(getCourses(buildDateString(selectedDate)))
      : dispatch(getCourses());
  }

  useEffect(() => {
    getCurrentCourses();
  }, [selectedDate]);

  const valuteKeys = Object.keys(valutes);

  let renderView;
  if (isFetching) {
    renderView = <Preloader />

  } else if (valuteKeys.length > 0) {
    renderView = 
      <>
        <CoursePageCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          date={date}
        />
        <CoursePageExchange
          valutes={valutes}
          valuteKeys={valuteKeys}
          selectedDate={selectedDate}
        />
        <CoursePageTable valuteKeys={valuteKeys} valutes={valutes} />
      </>
    
  } else {
    renderView = 
      <>
        <CoursePageCalendar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          date={date}
        />

        <div className={styles.nodataText}>На выбранную дату нет данных</div>
      </>
    
  }
  return (
    <>
      <h4>Курс валют</h4>
      {renderView}
    </>
  );
};
