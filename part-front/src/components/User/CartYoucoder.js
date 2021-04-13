import React, { Component} from 'react';
import User from '../../images/user.png'

class CartYoucoder extends Component {

    constructor(props) {
        super(props)

        this.state = {
            file : null
        }
        this.myInput = React.createRef()
    }
    

chnageImage = (e) =>{
    // const changeSrc = this.myInput.current.value;
    console.log(e.target.files[0]);
    this.setState({
        file: URL.createObjectURL(e.target.files[0])
    })
    // this.setState({
    //    img : changeSrc
    // })
    // console.log(this.state.img);


}
    render() {
        const {file} = this.state

        const showImg = file ? (<img  src={file} alt="USER" />) : (<img  src={User} alt="USER" />) ;

        return (
            <div className="card p-3 border-secondary bg container " style={{width: "80%"}}>
                <div className="card-header text-center font-weight-bold text-light ">
                    YOUCODE 
                </div>
                {/* {img !== "" && <img src={img} />} */}
                <div className="row g-0">
                    <div className="col-md-4  register-img">
                        <input onChange={this.chnageImage} type="file" className="images" ref={this.myInput} />
                        {showImg}
                    </div>
                    <div className="col-md-8">
                        <div className='card-body text-center'>
                            <h5 className="card-title">
                                Card Student
                            </h5>
                            <br/><br/>
                            <p className="card-text text-start">
                                <span className= 'font-weight-bold '> first name :</span> 
                            </p>
                            <p className="card-text">
                                <span className= 'font-weight-bold'> last name : </span>
                            </p>
                            <p className="card-text">
                                <span  className= 'font-weight-bold'> Adress :</span>
                            </p>
                            <p className="card-text">
                                <span className= 'font-weight-bold'> Email :</span>
                            </p>
                            <p className="card-text">
                                <span className= 'font-weight-bold'> Phone Number : </span>
                            </p>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

export default CartYoucoder;
