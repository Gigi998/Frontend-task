import React from "react";

export const formatTime = (date) => {
  let newDate = new Date(Date.parse(date));
  let hoursMin = newDate.toLocaleString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  return hoursMin;
};
