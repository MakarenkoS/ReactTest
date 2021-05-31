import React from "react";
import { useSelector } from "react-redux";
import { AppStateType } from "../../../Redux/store";
import classes from "./JsonPage.module.css";

type PropsType = {
  id: number;
  title: string;
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

export const JsonPageItem: React.FC<PropsType> = ({ id, title }) => {
  return (
    <p className={classes.item}>
      <label className={classes.checkbox}>
        <input type="checkbox" />
        <span>
          <strong>{id} </strong>
          <TitleRender title={title} />
        </span>
      </label>

      <button className="waves-effect waves-light btn">
        <i className="material-icons left">cloud</i>button
      </button>
    </p>
  );
};
