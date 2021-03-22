import React from "react";
import './Header.scss';
import {connect} from "react-redux";
import Logo from "./img/logo.svg";
import Name from "./img/name.svg";

const Header = () =>{

    return(
            <header>
                <div>
                    <img id="logo" src={Logo} alt="Logo"/>
                    <img id="name" src={Name} alt="Name"/>
                </div>

                <div>
                    <span>Historia</span>
                    <span>Contacto</span>
                    <span>Proyectos</span>
                    <div id="header-menu">
                        <div/>
                        <div/>
                        <div/>
                    </div>
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

