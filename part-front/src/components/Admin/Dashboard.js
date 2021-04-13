import React, { Component, useEffect } from 'react';
import axios from 'axios'
import {useDispatch, useSelector} from 'react-redux';
import { getUsers } from '../../redux/actions/actionAdmin'


class Dashboard extends Component {
    // const users = useSelector(state => state.users.users)
    // const dispatch = useDispatch();
    // useEffect(() => {
    //     dispatch(getUsers());
    // }, [dispatch]);

    // console.log(users);

    constructor(props) {
        super(props)
    
        this.state = {
            students: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/admins/dashboard')
        .then(res => {
          this.setState({
            students: res.data
          })
        })
        .catch((error) => {
          console.log(error);
        })  
    }
    render() {
        const {students} = this.state
        return (
            <div>
                    <h2 className="mb-5 text-center">List of all <span className="text-light font-weight-bold">Youcoders</span></h2>
                    <table className="table bg text-light">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Phone</th>
                                <th scope="col">Adress</th>
                                <th scope="col">Email</th>
                                <th scope="col">Edite</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>

                            {students.map((student, index) => {
                                return <tr key={index}>
                                <th  scope="row">{student.id}</th>
                                <td>{student.firstName}</td>
                                <td>{student.lastName}</td>
                                <td>{student.phone}</td>
                                <td>{student.adress}</td>
                                <td>{student.email}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-success">Success</button>
                                </td>
                                <td>
                                    <button type="button" className="btn btn-outline-danger">Danger</button>
                                </td>
                            </tr>
                            })}
    
                        {/* {users.map((user) => (
                              <tr>
                              <th key={user.id} scope="row">{user.id}</th>
                              <td>{user.firstName}</td>
                              <td>{user.lastName}</td>
                              <td>{user.phone}</td>
                              <td>{user.adress}</td>
                              <td>{user.email}</td>
                              <td>
                                  <button type="button" className="btn btn-outline-success">Success</button>
                              </td>
                              <td>
                                  <button type="button" className="btn btn-outline-danger">Danger</button>
                              </td>
                          </tr>
                        ))} */}
                          
                        </tbody>
                    </table>
            </div>
        )
    }

}

export default Dashboard; 