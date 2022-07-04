let array = [];
const initialState = {
    buttonClick: false,
    dateSelection: false,
    data: array,
}


const buttonClickReducer = (state = initialState, action) => {
    console.log(action.payload);
    console.log(array);
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

        case "INFO_GATHERING":
            array = [...array, action.payload];
            return {
                buttonClick: true,
                dateSelection: true,
                data: array,
            }
        default: return state;
    }
}

console.log(array);

export default buttonClickReducer