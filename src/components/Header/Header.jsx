import React, {useEffect} from "react";
import './Header.scss';
import {connect} from "react-redux";
import Logo from "./img/logo.svg";
import Name from "./img/name.svg";

const Header = props =>{

    useEffect(()=>{
        window.addEventListener('scroll', props.headerScroll)
    }, [])

    return(
            <header>
                <div id="header-menu" className={props.state.headerScroll ? 'header-scroll':'header-normal'}>
                    <div>
                        <img id="logo" src={Logo} alt="Logo"/>
                        <img id="name" src={Name} alt="Name"/>
                    </div>
                    <div>
                        <span>Historia</span>
                        <span>Contacto</span>
                        <span>Proyectos</span>
                        <div id="header-dropdown-button" onClick={()=>props.headerDropdown()}>
                            <div/>
                            <div/>
                            <div/>
                        </div>
                    </div>
                </div>
                <div className={props.state.headerDropdown ? 'header-dropdown-active':'header-dropdown-inactive'} id="header-dropdown">
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                </div>
            </header>
    )
}

const mapStateToProps = state => ({state:state})

const mapDispatchToProps = (dispatch) => ({
    headerDropdown: ()=>{
        dispatch({
            type: 'HEADER_DROPDOWN'
        })
    },
    headerScroll: ()=>{
        dispatch({
            type: 'HEADER_SCROLL',
            payload: window.pageYOffset >= window.innerHeight * 0.9
        })
    }
})

const connectedApp = connect(mapStateToProps,mapDispatchToProps)(Header);

export default connectedApp;

