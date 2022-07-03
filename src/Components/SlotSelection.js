import React from 'react'

function SlotSelection() {
  const onCickBooking=(event)=>{
    event.preventDefault();
  }
  return (
    <div>
      SlotSelection
      <button onClick={onCickBooking}>Book an appointment</button>
    </div>
  )
}

export default SlotSelection