import React,{Component} from "react";

// Provider
// Consumer
const UserContext = React.createContext();
const reducer = (state,action) => {
    switch(action.type) {
        case "DELETE_USER" : 
            return {
                ...state,
                users: state.users.filter(user => action.payload !== user.id)
            }
        default : 
            return state
    }
}

export class UserProvider extends Component {

    state = {
        users : [
            {
            id: 1,
            name:"Haşim Can Kaya",
            salary : "5000",
            department : "Bilişim"
            },
            {
            id: 2,
            name:"Eyüp Sercan Akgül", 
            salary : "10000",
            department : "Security"
            },
            {
            id: 3,
            name:"N/A", 
            salary : "2500",
            department : "N/A"
            }
        ],
        dispatch : action=> {
            this.setState(state=>reducer(state,action))
        }
    }

    render(){
        return(
            <UserContext.Provider value={this.state}>
                {
                    this.props.children
                }
            </UserContext.Provider>
        )
    }
}

const UserConsumer = UserContext.Consumer;

export default UserConsumer;