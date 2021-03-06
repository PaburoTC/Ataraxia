import React, {useState} from "react";
import './Login.scss'
import axios from "axios";
import {setCookie, getCookie} from "../../../cookie_manager";
import {GoogleLogin} from 'react-google-login';
import {connect} from "react-redux";

axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.xsrfCookieName = "csrftoken";


const Login = props =>{

    const [email, setEmail]         = useState('')
    const [password, setPassword]   = useState('')
    const [formError, setFormError] = useState('')

    const clientID = process.env.REACT_APP_GOOGLE_CLIENT_ID;

    const handleSubmit = event =>{
        event.preventDefault();
        setFormError('');

        axios.post('https://ataraxia.live/api/auth/login',
            {
                username: email,
                email: email,
                password: password
            },
            {
                headers:{'X-CSRFToken': getCookie('csrftoken')},
                withCredentials: true
            }
        ).then(response => {
            if(response.data.success){
                setCookie('current_user', response.data.user, 1)
                props.history.push('/');
            }else{
                setFormError(response.data.message)
            }
        }, error => {
            console.log(error)
        });
    }

    const googleLogin = response =>{
        axios.post('https://jobot.es/api/auth/googleLogin',
            {
                token: response.tokenId
            },
            {
                headers:{'X-CSRFToken': getCookie('csrftoken')},
                withCredentials: true
            }).then(response =>{
                console.log(response)
                if (response.data.success){
                    setCookie('current_user', response.data.user, 1)
                    props.history.push('/');
                }
            })
    }

    return(
            <form className="login-form" onSubmit={handleSubmit}>
                <br/>
                <div className="login-form-input">
                    <label>Email o Usuario</label>
                    <input type="text" value={email} onChange={event => setEmail(event.target.value)}/>
                </div>

                <div className="login-form-input">
                    <label>Contraseña</label>
                    <input type="password" value={password} onChange={event => setPassword(event.target.value)}/>
                </div>

                <div className="form-error">{formError}</div>
                <button type="submit">Login</button>
                <div>¿No tienes cuenta?</div>
                <GoogleLogin
                    clientId={clientID}
                    buttonText="Inicia sesión con Google"
                    onSuccess={response => googleLogin(response)}
                    onFailure={response => console.log('FAILURE: ', response.profileObj)}
                    cookiePolicy={'single_host_origin'}
                />
                <button
                    onClick={()=>props.AuthPopups(false, true)}
                >Registrarse</button>
            </form>
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

const connectedApp = connect(mapStateToProps,mapDispatchToProps)(Login);

export default connectedApp;

