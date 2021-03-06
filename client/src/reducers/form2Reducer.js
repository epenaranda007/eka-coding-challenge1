const initialState = {
  firstname: '',
  lastname: '',
  telephonenumber: ''
};

const form2Reducer = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_FORM2_FULFILLED':
      state = {
        ...state,
        ...action.payload
      };
      break;
    case 'RESET_FORM2':
      state = {
        ...state,
        ...action.payload
      };
      break;
  }
  return state;
};

export default form2Reducer;