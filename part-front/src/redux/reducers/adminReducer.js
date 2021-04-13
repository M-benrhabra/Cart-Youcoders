import { FETCH_ALL } from '../constante/actionType'

 const users = (users = [], action) => {
    switch (action.type) {
        case FETCH_ALL :
            return action.payload;
    
        default:
            return users;
    }
}

export default users;