import axios from 'axios';

const url = 'http://localhost:8080/admins/dashboard';

export const fetchUsers = () => axios.get(url);
