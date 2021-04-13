import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class Register extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName : '',
            lastName : '',
            adress : '',
            email : '',
            phone : '',
            password : ''
        }
    }
    


    changeHandler = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    addOne = (event) => {
        event.preventDefault()
        // console.log('test');
        const studentInfos = {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            adress : this.state.adress, 
            phone : this.state.phone,
            email : this.state.email,  
            password : this.state.password
        };

        axios.post('http://localhost:8080/users/addUser', studentInfos)
        .then(res => console.log(res.user));
        
        console.log(studentInfos);

        this.setState({ firstName: '', lastName: '', adress: '', email: '', phone: '', password: ''})

        this.props.history.push('/cartYoucoder')
    }



    render() {
        const {firstName,lastName,adress, phone, email,  password} = this.state
        return (
            <>
                <h2 className='text-center mb-5'>  Register <span class="font-weight-bold text-light">STUDENT</span> </h2>
                <div className="card border-secondary bg container" style={{width: "75%"}}>
                <div className="card-header text-light">
                    Add Contact 
                </div>

                <form onSubmit= {this.addOne}>
                    <div className="mb-3 ml-3 mr-3">
                        <label htmlFor="firstName" className="form-label text-light">First Name</label>
                        <input type="text" value= {firstName} name='firstName' onChange= {this.changeHandler} className="form-control" id="firstName" placeholder="FirstName..."/>
                    </div>
                    <div className="mb-3 ml-3 mr-3">
                        <label htmlFor="lastName" className="form-label text-light">Last Name</label>
                        <input type="text" value= {lastName} name='lastName' onChange= {this.changeHandler} className="form-control" id="lastName" placeholder="LastName..."/>
                    </div>
                    <div className="mb-3 ml-3 mr-3">
                        <label htmlFor="adress" className="form-label text-light">Adress</label>
                        <input type="text" value= {adress} name='adress' onChange= {this.changeHandler} className="form-control" id="adress" placeholder="Adress..."/>
                    </div>
                    <div className="mb-3 ml-3 mr-3">
                        <label htmlFor="email" className="form-label text-light">Email address</label>
                        <input type="email" value= {email} name='email' onChange= {this.changeHandler} className="form-control" id="email" placeholder="Email..."/>
                    </div>
                    <div className="mb-3 ml-3 mr-3">
                        <label htmlFor="phone" className="form-label text-light">Phone Number</label>
                        <input type="text" value= {phone} name='phone'  onChange= {this.changeHandler} className="form-control" id="phone" placeholder="Phone..."/>
                    </div>
                    <div className="mb-3 ml-3 mr-3">
                        <label htmlFor="password" className="form-label text-light">Phone Number</label>
                        <input type="text" value= {password} name='password'  onChange= {this.changeHandler} className="form-control" id="password" placeholder="Password..."/>
                    </div>
                    <hr/>
                    
                    <button  className="btn btn-light float-right mb-3 mr-3 ">
                     Add Contact </button>
                </form>

            </div>
            </>
            
           
        );
    }
}

export default Register;
