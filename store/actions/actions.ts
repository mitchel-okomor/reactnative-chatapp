import {CREATE_USER, START_LOADING, END_LOADING } from '../../helpers/constants';
import * as api from '../../utils/api';


//action creators
export const signUpUser = ()=> async (dispatch:any)=>{
	try {
		dispatch({type:START_LOADING })
		const {data} = await api.createUser();
		dispatch({type:END_LOADING })
		dispatch({type:CREATE_USER, payload: data })
	} catch (error) {
		console.log(error);
	}
}