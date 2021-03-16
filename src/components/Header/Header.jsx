import React from "react";
import {NavLink} from "react-router-dom";
import '../Main/Main.scss';
import {getCookie} from "../../cookie_manager";

const Header = ()=>{

    const current_user = getCookie('current_user');

    return(
        <header>
            {current_user === null
                ? <React.Fragment>
                    <NavLink to="/login">
                        <span>Inicia sesión</span>
                    </NavLink>
                    <NavLink to="/register">
                        <span>Regístrate</span>
                    </NavLink>
                  </React.Fragment>
                : <NavLink to="/profile">
                    <span>Perfil</span>
                  </NavLink>
            }
        </header>
    )
}

export default Header;
