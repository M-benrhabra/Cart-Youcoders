import { FETCH_ALL } from '../constante/actionType' 
import * as api from '../../api/api';

// export const fetchUsers = () => {
//     return {
//         type : FETCH_ALL
//     }
// }
export const getUsers = () => async (dispatch) => {
  try {
    const { data } = await api.fetchUsers();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};