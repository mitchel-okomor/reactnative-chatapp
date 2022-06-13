import {getData} from './fetchData'
export const createUser =async():Promise<any>=>{
	return getData('posts');
}