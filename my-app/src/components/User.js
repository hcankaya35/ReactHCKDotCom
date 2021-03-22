
import React, { Component } from 'react'
import PropTypes from "prop-types";
import UserConsumer from "../context";

class User extends Component {

    state = {
        isVisible : false
    }

    constructor(props)
    {
        super(props);
        //this.onClickEvent = this.onClickEvent.bind(this);

        /*this.state = {
            isVisible : false
        }*/
    }

    // non arrow function
    /*onClickEvent(e){
        console.log(this); // bu thisin user ı gösterir diye bekliyoruz ama hayır. render dan this gönderdiğim için user ı gösteriyor.
    }*/
    //arrow function
    onClickEvent = (number,e) => {
        /*console.log(this);
        console.log(number);*/
        
        this.setState({
            isVisible : !this.state.isVisible
        })
    }

    onDeleteUser = (dispatch,e) => {
        const {id} = this.props;
        dispatch({type : "DELETE_USER",payload:id});
    }

    render() {
        // Destructing
        const {name,department,salary} = this.props;
        const {isVisible} = this.state;
        return (

            <UserConsumer>
                {
                    value => {
                        const {dispatch} = value;
                        return (
                            <div className="col-md-8 mb-4">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between">
                                        <h4 className="d-inline" onClick = {this.onClickEvent.bind(this,90)}>
                                            {name}
                                        </h4>
                                        <i onClick = {this.onDeleteUser.bind(this,dispatch)} className="far fa-trash-alt" style={{cursor:"pointer"}}></i>
                                    </div>
                                    {
                                        isVisible 
                                        ?
                                            <div className="card-body">
                                                <p className="card-text">Maaş : {salary}</p>
                                                <p className="card-text">Departman : {department}</p>
                                            </div> 
                                        : null
                                    }
                                </div>
                            </div>
                        )
                    }
                }
            </UserConsumer>
        )
    }
}
User.propTypes = {
    name : PropTypes.string.isRequired,
    department : PropTypes.string.isRequired,
    salary : PropTypes.string.isRequired,
    id : PropTypes.number.isRequired
}

/*User.defaultProps = {
    name : "Bilgi yok",
    department : "Bilgi yok",
    salary : "Bilgi yok"
}*/

export default User;
