import React from 'react';

const checkWeeks = (weeks, thisWeek) => {
  for(let i = 0; i < weeks.length; i++)
  {
    if (thisWeek === weeks[i]) return true;
  }
  return false;
}

const getMonthName = (date) => {
  const locale = "en-us";
  const month = date.toLocaleString(locale, { month: "long" });
  return month;
}

const weekday = (date) => {
  switch(date.getDay())
  {
    case 0: return "Sunday";
    case 1: return "Monday";
    case 2: return "Tuesday";
    case 3: return "Wednesday";
    case 4: return "Thursday";
    case 5: return "Friday";
    case 6: return "Saturday";
    default: return "Pirate day"
  }

}
const weekNo = (date) => {
  const today = date.getDate();
  if(today>28) return 5;
  else if(today>21) return 4;
  else if(today>14) return 3;
  else if(today>7) return 2;
  else return 1;
}

export { checkWeeks, getMonthName, weekday, weekNo };
