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
            { (props.state.logIn || props.state.register) &&
                <div id="login-background"
                    onClick={()=>props.AuthPopups(false,false)}
                />
            }
            <div id="greenBackground"/>
            <div id="main">
                <section id="main-intro">
                    <h2>Talento joven con <span>futuro</span></h2>
                    <p>Apuesta por <span>ti</span>, apuesta por el <span>planeta</span></p>
                    <button
                        onClick={()=>props.AuthPopups(!props.state.logIn, props.state.register)}
                    >¡Empezar ya!</button>
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
            <section id="main-values">
                <article>
                    <h3>¿Que queremos promover?</h3>
                    <p>A través de Ataraxia, impulsamos a jóvenes con ilusiones...</p>
                </article>
            </section>
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

const connectedApp = connect(mapStateToProps,mapDispatchToProps)(Main);

export default connectedApp;
