import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { onButtonCick } from '../Action/index'
import CalendarSelection from './CalendarSelection';

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
      <button onClick={onClickHandler} value="doctor 1">doctor 1</button>
      {buttonClickState ? <CalendarSelection></CalendarSelection> : ""}
    </div>
  )
}

export default DoctorSelection