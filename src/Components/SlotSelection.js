import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { infoGathering,disableDate } from '../Action/index'

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
    // console.log(document.getElementById("selection").value);
    // console.log(document.querySelector(".doctorName").value)
    dispatch(infoGathering({
      date: document.getElementById("input").value,
      slot: document.getElementById("selection").value,
      is_selected: 1,
    }));
  }
  //if date is selected then diasble that slot 
  if (dataState !== undefined) {
    console.log(dataState[0]);
    if (dataState[0].date === '2022-07-06' && dataState[0].slot === '2:00PM-3:00PM') {
      console.log("I am inside the if");
      dispatch(disableDate());
    } 
  }
  console.log(disableDateState);  
  return (
    <div>
      <select id="selection">
        <option >select a slot</option>
        <option disabled={disableDateState}>1:00PM-2:00PM</option>
        <option disabled={disableDateState}>2:00PM-3:00PM</option>
        <option disabled={disableDateState}>3:00PM-4:00PM</option>
      </select>
      <button type="submit" onClick={onCickBooking}>Book an appointment</button>
    </div>
  )
}

export default SlotSelection