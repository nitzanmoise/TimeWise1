import {
  FETCH_SHIFTS_REQUEST,
  FETCH_SHIFTS_SUCCESS,
  FETCH_SHIFTS_FAILURE,
  POST_SHIFT_REQUEST,
  POST_SHIFT_SUCCESS,
  POST_SHIFT_FAILURE
} from "../actions/shiftTypes";

const initialState = {
  loading: false,
  shifts: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SHIFTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_SHIFTS_SUCCESS:
      return {
        loading: false,
        shifts: action.payload,
        error: "",
      };
    case FETCH_SHIFTS_FAILURE:
      return {
        loading: false,
        shifts: [],
        error: action.payload,
      };
    case POST_SHIFT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_SHIFT_SUCCESS:
      return {
        loading: false,
        users: action.payload,
        error: "",
      };
    case POST_SHIFT_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

export default reducer;
