import { CREATE_USER, FETCH_USER, START_LOADING, END_LOADING } from '../../helpers/constants';
import {State} from '../../types'
const initialState ={
	data: {},
	isAuth:true,
    isLoading: false,
    isError: false,
    success: false,
    errorMessage: '',
    successMessage: ''
}

const reducer = (state: State=initialState, action: any) => {
  switch (action.type) {
	case START_LOADING:
		return {...state, isLoading: true}
		case END_LOADING:
			return {...state, isLoading: false}
    case CREATE_USER:
      return{...state, data:action.payload};
    case FETCH_USER:
		return{...state, data:action.payload};
		default:
			return state
	
  }

};

export default reducer;
