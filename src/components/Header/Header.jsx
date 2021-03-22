import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import './Header.scss';
import {getCookie} from "../../cookie_manager";
import {connect} from "react-redux";
import Logo from "./img/ataraxia_2.svg";
import Name from "./img/ataraxia.svg";

const Header = props =>{

    console.log(JSON.stringify(props, null,2))

    const current_user = getCookie('current_user');
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);


    return(
        <header>
            <div>
                <img id="logo" src={Logo} alt="Logo"/>
                <img id="name" src={Name} alt="Name"/>
            </div>

            <div>
                {current_user === null
                    ?   <React.Fragment>
                        <span onClick={()=>props.logInPopup()}>Inicia sesión</span>
                        <span onClick={()=>props.registerPopup()}>Regístrate</span>
                    </React.Fragment>
                    :   <NavLink to="/profile">
                        <span>Perfil</span>
                    </NavLink>
                }
            </div>
        </header>
    )
}

//LEER EL ESTADO
const mapStateToProps = state => ({state:state})

//ESCRIBIR EN EL ESTADO
const mapDispatchToProps = (dispatch) => ({
    logInPopup: ()=>{
        dispatch({
            type: 'LOGIN_POPUP'
        })
    },
    registerPopup: ()=>{
        dispatch({
            type: 'REGISTER_POPUP'
        })
    }
})

const connectedApp = connect(mapStateToProps,mapDispatchToProps)(Header);

export default connectedApp;

