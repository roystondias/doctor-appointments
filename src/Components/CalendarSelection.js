import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { onDateSelction } from '../Action/index'
import SlotSelection from './SlotSelection'

function CalendarSelection() {
  const dateSelectionState = useSelector((state) => {
    return state.buttonClickReducer.dateSelection
  })
  const dispatch = useDispatch();
  const onClickCalendar = (event) => {
    event.preventDefault();
    // console.log(document.getElementById("input").value);
    dispatch(onDateSelction());
  }
  console.log(dateSelectionState);
  return (
    <div>
      <form>
        <input id="input" type="date" />
        <input type="submit" onClick={onClickCalendar}></input>
        {dateSelectionState ? <SlotSelection></SlotSelection> : ""}
      </form>
    </div>
  )
}

export default CalendarSelection