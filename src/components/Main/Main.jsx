import React, {useState} from "react";
import {getCookie} from "../../cookie_manager";
import './Main.scss'
import Login from "../Login/Login";
import Register from "../Register/Register";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

const Main = props =>{

    const current_user = getCookie('current_user');


    return(
        <React.Fragment>
            { props.state.logIn    && <Login/>}
            { props.state.register && <Register/>}
            <p>
                Somos Ataraxia
            </p>
        </React.Fragment>
    )
}

//LEER EL ESTADO
const mapStateToProps = state => ({state:state})

//ESCRIBIR EN EL ESTADO
const mapDispatchToProps = (dispatch) => ({

})

const connectedApp = connect(mapStateToProps,mapDispatchToProps)(Main);

export default connectedApp;
