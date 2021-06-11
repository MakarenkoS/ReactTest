  //Преобразование строки для запроса
  export const buildDateString = (date: string): string => {
    return "/archive/" + date.split("-").join("/");
  }

  //Рисование стрелок
  export const ArrowIcon: React.FC<{diff: number}> = ({ diff }) => {
    if(diff < 0) {
      return <>
         <i className="material-icons red-text">arrow_drop_down</i> 
      </>
    }
    return <>
    <i className="material-icons green-text">arrow_drop_up</i> 
    </>
  }