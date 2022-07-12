import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { onButtonCick } from '../Action/index'
import CalendarSelection from './CalendarSelection';
import styles from './DoctorSelection.module.css'

function DoctorSelection() {
  let buttonClickState = useSelector((state) => {
    return state.buttonClickReducer.buttonClick;
  })
  let dispatch = useDispatch();
  const onClickHandler = (event) => {
    event.preventDefault();
    dispatch(onButtonCick());
  }
  return (
    <div>
      <div className={styles["doctor-selection"]}>
        <div onClick={onClickHandler} value="doctor 1">Doctor 1</div>
        <div onClick={onClickHandler} value="doctor 2">Doctor 2</div>
        <div onClick={onClickHandler} value="doctor 3">Doctor 3</div>
      </div>
      {buttonClickState ? <CalendarSelection></CalendarSelection> : ""}
    </div>
  )
}

export default DoctorSelection