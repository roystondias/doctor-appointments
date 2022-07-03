const initialState = {
    buttonClick: false,
    dateSelection: false
}

const buttonClickReducer = (state = initialState, action) => {
    switch (action.type) {
        case "BUTTON_CLICK":
            return {
                buttonClick: true,
                dateSelection: false,
            }
        case "DATE_SELECTION":
            return {
                buttonClick: true,
                dateSelection: true,
            }
        default: return state;
    }
}

export default buttonClickReducer