import React, {useEffect} from "react";
import {Link, animateScroll as scroll} from 'react-scroll';
import './Header.scss';
import {connect} from "react-redux";
import LogoWhite from "./img/logo_white.svg";
import LogoGreen from "./img/logo_green.svg";
import NameWhite from "./img/name_white.svg";
import NameGreen from "./img/name_green.svg";

const Header = props =>{

    useEffect(()=>{
        window.addEventListener('scroll', props.headerScroll)
    }, [])

    return(
            <header>
                <div id="header-menu" className={props.state.headerScroll ? 'header-scroll':'header-normal'}>
                    <div onClick={()=> scroll.scrollToTop()}>
                        <img id="logo" src={props.state.headerScroll ?  LogoGreen:LogoWhite} alt="Logo"/>
                        <img id="name" src={props.state.headerScroll ?  NameGreen:NameWhite} alt="Name"/>
                    </div>
                    <div>
                        <Link>Historia</Link>
                        <Link>Contacto</Link>
                        <Link
                            to="main-values"
                            smooth={true}
                            duration={500}
                        >Proyectos</Link>
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

