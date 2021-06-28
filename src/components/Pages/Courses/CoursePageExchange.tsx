import React, { useEffect, useState } from "react";
import { Valutes } from "../../../Redux/types";

type PropsType = {
  valutes: Valutes,
  valuteKeys: Array<string>,
  selectedDate: string
};

export const CoursePageExchange: React.FC<PropsType> = ({
  valutes,
  valuteKeys,
  selectedDate
}) => {
  const [rublesAmount, setRublesAmount] = useState(""); // кол-во рублей
  const [valutesAmount, setValutesAmount] = useState(""); // кол-во валюты
  const [selectedValute, setSelectedValute] = useState(""); // выбор валюты
  const [valutesCourse, setValutesCourse] = useState({ course: 0, nominal: 1 });

  const onSelectValuteChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValute(e.target.value);
    const key: string | undefined = valuteKeys.find((i) => valutes[i].Name === e.target.value);
    if (key) {
      setValutesCourse({
        course: valutes[key].Value,
        nominal: valutes[key].Nominal,
      });
    }
  };

  const onRublesUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRublesAmount(e.target.value);
  };

  const calulateRublesAmount = (
    rubles: number,
    valute: { course: number; nominal: number }
  ) => {
    return ((rubles / valute.course) * valute.nominal).toFixed(2);
  };

  useEffect( () => {
    setRublesAmount('')
    setValutesAmount('')
    setSelectedValute('')
  }, [selectedDate])

  useEffect(() => {
    if (rublesAmount && selectedValute) {
      setValutesAmount(
        calulateRublesAmount(Number(rublesAmount), valutesCourse)
      );
    }
  }, [rublesAmount, selectedValute, valutesCourse, valutes]);

  return (
    <div className="row">
      <input
        placeholder="Кол-во рублей"
        value={rublesAmount}
        onChange={onRublesUpdate}
        className="col s12 m3 offset-m1 l3 offset-l1"
      />
      <select
        value={selectedValute}
        onChange={onSelectValuteChange}
        className="browser-default col s12 m4 l4"
      >
        <option>Выберите валюту</option>
        {valuteKeys.map((i) => {
          const valuteName = valutes[i].Name;
          return (
            <option key={i} value={valuteName}>
              {valuteName}
            </option>
          );
        })}
      </select>
      <input placeholder="" value={valutesAmount} readOnly className="col s12 l3 m3" />
    </div>
  );
};
