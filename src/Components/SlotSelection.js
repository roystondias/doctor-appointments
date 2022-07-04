import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { infoGathering } from '../Action/index'

function SlotSelection() {
  let disableState = useSelector((state) => {
    return state.buttonClickReducer.data;
  })
  let dispatch = useDispatch();
  const onCickBooking = (event) => {
    event.preventDefault();
    // console.log(document.getElementById("selection").value);
    console.log(document.querySelector(".doctorName").value)
    dispatch(infoGathering({
      doctorName: {
        date: document.getElementById("input").value,
        slot: document.getElementById("selection").value,
        is_selected: 1,
      }
    }));
  }
  console.log(disableState);
  return (
    <div>
      <select id="selection">
        <option disabled={true}>select a slot</option>
        <option disabled={true}>1:00PM-2:00PM</option>
        <option disabled={true}>2:00PM-3:00PM</option>
        <option >3:00PM-4:00PM</option>
      </select>
      <button type="submit" onClick={onCickBooking}>Book an appointment</button>
    </div>
  )
}

export default SlotSelection