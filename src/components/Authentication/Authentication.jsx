import React from "react";
import Login from "./Login/Login";
import Register from "./Register/Register";
import {connect} from "react-redux";
import './Authentication.scss'

const Auth = props =>{
    return(
        <React.Fragment>
            { props.state.logIn    && <Login/>}
            { props.state.register && <Register/>}
            { (props.state.logIn || props.state.register) &&
                <div id="login-background"
                    onClick={()=>props.AuthPopups(false,false)}
                />
            }
        </React.Fragment>
    )
}

const mapStateToProps = state => ({state:state})

const mapDispatchToProps = (dispatch) => ({
    AuthPopups: (login, register)=>{
        dispatch({
            type: 'AUTH_POPUP',
            payload: {
                logIn: login,
                register: register
            }
        })
    }
})

const connectedApp = connect(mapStateToProps,mapDispatchToProps)(Auth);

export default connectedApp;
