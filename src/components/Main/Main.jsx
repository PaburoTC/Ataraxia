import React from "react";
import './Main.scss'
import Login from "../Login/Login";
import Register from "../Register/Register";
import {connect} from "react-redux";
import Ola from './img/ola.webp';

const Main = props =>{


    return(
        <React.Fragment>
            { props.state.logIn    && <Login/>}
            { props.state.register && <Register/>}
            <div id="main">
                <section>
                    <h1>Ataraxia</h1>
                    <h2>talento joven con <span>futuro</span></h2>
                    <p>Apuesta por <span>ti</span>, apuesta por el <span>planeta</span></p>
                </section>
            </div>
            <img id="ola" src={Ola} alt="Ola"/>
        </React.Fragment>
    )
}

//LEER EL ESTADO
const mapStateToProps = state => ({state:state})

const connectedApp = connect(mapStateToProps,()=>{})(Main);

export default connectedApp;
