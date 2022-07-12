import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { infoGathering,disableDate } from '../Action/index'
import styles from './SlotSelection.module.css'

function SlotSelection() {
  let dataState = useSelector((state) => {
    return state.buttonClickReducer.data;
  })
  let disableDateState = useSelector( (state) =>{
    return state.buttonClickReducer.disableDate;
  })
  let dispatch = useDispatch();
  const onCickBooking = (event) => {
    event.preventDefault();
    dispatch(infoGathering({
      date: document.getElementById("input").value,
      slot: document.getElementById("selection").value,
      is_selected: true,
    }));
  }

  if (dataState !== undefined) {
    console.log(dataState[0]);
    if (dataState[0].date === '2022-07-06' && dataState[0].slot === '2:00PM-3:00PM') {
      dispatch(disableDate());
    } 
  }
  console.log(disableDateState);  
  return (
    <div className={styles["slot-section"]}>
      <select id="selection">
        <option>select a slot</option>
        <option>1:00PM-2:00PM</option>
        <option>2:00PM-3:00PM</option>
        <option>3:00PM-4:00PM</option>
      </select><br />
      <button type="submit" onClick={onCickBooking}>Book an appointment</button>
    </div>
  )
}

export default SlotSelection
