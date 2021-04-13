import React, { Component } from 'react';

class RegisterA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            firstName : '',
            lastName : '',
            email : '',
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
        const {firstName,lastName, email, password} = this.state;
        
        console.log(`First Name: ${firstName} Last Name ${lastName} email : ${email} p Password: ${password}`);
    }

    render() {
        const {firstName,lastName, email, password} = this.state
        return (
            <div>
            <h2 className='text-center mb-5'>  Register <span class="font-weight-bold text-light">ADMIN</span> </h2>
            <div className="card border-secondary bg container" style={{width: "75%"}}>
                <div className="card-header text-light">
                    Add Contact 
                </div>

                <form onSubmit= {this.addOne}>
                    <div className="mb-3 ml-3 mr-3">
                        <label htmlFor="firstName" className="form-label text-light">Name</label>
                        <input type="text" value= {firstName} name='firstName' onChange= {this.changeHandler} className="form-control" id="firstName" placeholder="FirstName..."/>
                    </div>
                    <div className="mb-3 ml-3 mr-3">
                        <label htmlFor="lastName" className="form-label text-light">Name</label>
                        <input type="text" value= {lastName} name='lastName' onChange= {this.changeHandler} className="form-control" id="lastName" placeholder="LastName..."/>
                    </div>
                    <div className="mb-3 ml-3 mr-3">
                        <label htmlFor="email" className="form-label text-light">Email address</label>
                        <input type="email" value= {email} name='email' onChange= {this.changeHandler} className="form-control" id="email" placeholder="Email..."/>
                    </div>
                    <div className="mb-3 ml-3 mr-3">
                        <label htmlFor="password" className="form-label text-light">Phone Number</label>
                        <input type="text" value= {password} name='password'  onChange= {this.changeHandler} className="form-control" id="password" placeholder="Password..."/>
                    </div>
                    <hr/>
                    
                    <button  className="btn btn-light float-right mb-3 mr-3">Add Contact</button>
                </form>

            </div>
            </div>
           
        );
    }
}

export default RegisterA;
