export const onButtonCick =()=>{
    return {
        type: "BUTTON_CLICK",
    }
}

export const onDateSelction = ()=>{
    return {
        type: "DATE_SELECTION",
    }
}

export const infoGathering = (data)=>{
    return {
        type: "INFO_GATHERING",
        payload: data,
    }
}

export const disableDate =()=>{
    return {
        type: "DISABLE_DATE",
    }
}