import React from "react";
import './Main.scss'
import Login from "../Login/Login";
import Register from "../Register/Register";
import {connect} from "react-redux";
import Ola from './img/ola.webp';
import Insta from './img/Insta.svg';
import LinkedIn from './img/LinkedIn.svg';
import Tablet from './img/tablet.webp';

const Main = props =>{


    return(
        <React.Fragment>
            { props.state.logIn    && <Login/>}
            { props.state.register && <Register/>}
            <div id="main">
                <section id="main-intro">
                    <h1>Ataraxia</h1>
                    <h2>talento joven con <span>futuro</span></h2>
                    <p>Apuesta por <span>ti</span>, apuesta por el <span>planeta</span></p>
                    <button>¡Empezar ya!</button>
                </section>
                <img id="main-ola" src={Ola} alt="Ola"/>
                <img id="main-tablet" src={Tablet} alt="Tablet"/>
                <section id="main-socials">
                    <div>
                        <div>
                            <img src={LinkedIn} alt="LinkedIn"/>
                            <a>LinkedIn</a>
                        </div>
                        <div>
                            <img src={Insta} alt="LinkedIn"/>
                            <a>Instagram</a>
                        </div>
                    </div>
                    <div/>
                </section>
            </div>

        </React.Fragment>
    )
}

//LEER EL ESTADO
const mapStateToProps = state => ({state:state})

const connectedApp = connect(mapStateToProps,()=>{return{}})(Main);

export default connectedApp;
