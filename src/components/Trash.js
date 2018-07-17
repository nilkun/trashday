import React from 'react';
import { checkWeeks, getMonthName, weekday, weekNo } from './DateHelpers.js';
const Trash = () => {
  const date = new Date();
  const today = date.getDay();

/* Create trash array */
  let TrashDayArray = [];
  const createTrashDay = (type, contents, day, weeks) => {
    TrashDayArray.push({"type": type, "contents": contents, "day": day, "weeks": weeks});
  }

  createTrashDay("combustibles", "everything that burns", 1, [1,2,3,4,5]);
  createTrashDay("pet bottles", "no pets!", 5, [2]);
  createTrashDay("plastics", "plastics duh!", 3, [1,2,3,4]);

  const getTrash = () => {
    for (let i = 0; i < TrashDayArray.length; ++i) {
      if(today===TrashDayArray[i].day
          && checkWeeks(TrashDayArray[i].weeks, weekNo(date)))
      {
        return TrashDayArray[i].type;
      }
    }
    return "none";
  }
/* ------------------*/

  return (
    <div>
      {getMonthName(date)} {date.getDate()} {1900+date.getYear()}<br/>
      {weekday(date)}
      <br/><br/>
      Today's trash<br/>
      -------------<br/>
      {getTrash()}
      <br/><br/>
    </div>
  )
}

export default Trash;
