import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { onDateSelction } from '../Action/index'
import SlotSelection from './SlotSelection'
import styles from './CalendarSelection.module.css'

function CalendarSelection() {
  const dateSelectionState = useSelector((state) => {
    return state.buttonClickReducer.dateSelection
  })
  const dispatch = useDispatch();
  const onClickCalendar = (event) => {
    event.preventDefault();
    dispatch(onDateSelction());
  }

  return (
    <>
      <div className={styles["calendar-section"]}>
        <form>
          <input id="input" type="date" />
          <input type="button" onClick={onClickCalendar} value="Add Date"></input>
        </form>
      </div>
      {dateSelectionState ? <SlotSelection></SlotSelection> : ""}
    </>
  )
}

export default CalendarSelection

