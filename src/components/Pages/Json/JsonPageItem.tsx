import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { jsonPageActions } from "../../../Redux/actions";
import { AppStateType } from "../../../Redux/store";
import classes from "./JsonPage.module.css";


type PropsType = {
  id: number
  idNumber: number
  title: string
};

let highlightStyle = {
  color: "red",
  background: "yellow",
}

const TitleRender: React.FC<{ title: string }> = ({ title }): any => {
  const filterString = useSelector(
    (state: AppStateType) => state.jsonPage.filter
  );

  if (!!filterString) {
    let highlightedString = title;
    const highlightedStringStart = title.indexOf(filterString);
    const highlightedStringEnd = highlightedStringStart + filterString.length;

    return (
      <>
        {highlightedString.slice(0, highlightedStringStart)}
        <span style={highlightStyle}>
          {highlightedString.slice(
            highlightedStringStart,
            highlightedStringEnd
          )}
        </span>
        {highlightedString.slice(highlightedStringEnd)}
      </>
    );
  }

  return <>{title}</>;
};

export const JsonPageItem: React.FC<PropsType> = ({ id, idNumber, title }) => {

  const dispatch = useDispatch();

  const deleteJsonItem = (id: number) => {
    dispatch(jsonPageActions.deleteItem(id))
  }

  return (
    <p className={classes.item}>
      <label className={classes.checkbox}>
        <input type="checkbox" />
        <span>
          <strong>{idNumber} </strong>
          <TitleRender title={title} />
        </span>
      </label>

      <button className="waves-effect waves-light blue-grey darken-2 btn" onClick={() => deleteJsonItem(id)}>
        <i className="material-icons">clear</i>
      </button>
    </p>
  );
};
