import PropTypes from "prop-types"

function UserGreeting (props){
    const greeting = <h2 className="greeting">Welcome {props.username}</h2>
    const alert =<h2 className="alert">Please log in to continue</h2>

    return (props.isLoggedIn ? greeting : alert);
}

UserGreeting.proptypes ={
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}

export default UserGreeting

