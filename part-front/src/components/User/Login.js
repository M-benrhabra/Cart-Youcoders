import React, { Component } from 'react'

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
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
        const { email, password} = this.state;
        
        console.log(` email : ${email} p Password: ${password}`);
    }
    render() {
        const { email, password} = this.state;
        return (
            <div>
                <h2 className='text-center mb-5'>   <span class="font-weight-bold text-light">LOGIN</span> </h2>
                <div className="card border-secondary bg container " style={{width: "75%"}}>
                    <div className="card-header text-light">
                        Add Contact 
                    </div>

                    <form onSubmit= {this.addOne}>
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
        )
    }
}

export default Login;