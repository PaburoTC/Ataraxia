import React, {useState} from "react";
import {getCookie} from "../../cookie_manager";
import './Main.scss'
import Login from "../Login/Login";
import Register from "../Register/Register";

const Main = props =>{

    const current_user = getCookie('current_user');
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    return(
        <React.Fragment>
            <header>
                {current_user === null
                    ? <React.Fragment>
                        <span onClick={()=>{
                            setRegister(false);
                            setLogin(!login);}}>Inicia sesión</span>
                        <span onClick={()=>{
                            setLogin(false);
                            setRegister(!register);}}>Regístrate</span>
                      </React.Fragment>
                    : <span>Perfil</span>
                }
            </header>
            { login && <Login/>}
            { register && <Register/>}
            ASDSADSDSADSAAADSADSDSAdd Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut nibh non tortor dignissim ultricies. Curabitur suscipit eu magna et fringilla. Suspendisse lobortis facilisis massa, rhoncus scelerisque nunc malesuada semper. Sed ut tellus sed eros convallis sagittis. Praesent lorem tellus, porta nec metus vitae, dignissim dictum nibh. Nam malesuada dapibus metus, et convallis ex consequat eu. Aenean tempus elit sed diam tincidunt sodales. Integer interdum libero nec tellus varius, ac efficitur quam facilisis. Quisque ullamcorper, sem non lobortis ornare, lectus turpis ornare urna, nec sagittis nisi nisi a est. Aenean iaculis, est in maximus porta, justo orci pharetra risus, sed dictum ipsum elit sit amet leo. Nullam non iaculis quam, id malesuada augue. Curabitur cursus id est id venenatis. Aenean tincidunt ullamcorper erat non vehicula. Donec vitae est in ipsum vestibulum suscipit ut quis ex. Nunc finibus felis lorem, ac fringilla ligula imperdiet ut. Quisque maximus ante vel ante convallis vehicula.

            Nulla facilisi. Nullam molestie fringilla tristique. Donec augue sapien, mattis id mauris et, elementum sodales erat. Aenean bibendum efficitur lectus sed mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce consectetur sem vel risus vulputate, sed auctor neque rutrum. Donec dictum et felis id euismod. Morbi pretium eget magna lacinia viverra. Donec gravida id diam ac gravida. Praesent ut lorem quis magna finibus tempor. Cras id convallis mi. Curabitur ac lectus consectetur, tempor metus id, aliquam libero. Nulla interdum ipsum nibh, sed egestas felis tincidunt ut. Etiam eu faucibus tortor. Proin pharetra leo et dui malesuada, nec consectetur ex convallis. Duis dictum vitae leo id tincidunt.

            Nam lorem massa, condimentum et sapien eu, porttitor bibendum risus. Sed tempus, felis non tristique luctus, arcu massa molestie est, quis commodo ex metus id est. Maecenas efficitur non neque eget iaculis. Morbi ac semper ex. Suspendisse placerat aliquam porta. Nulla sed dignissim augue, ut commodo ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas vulputate neque nec eros mollis, vitae eleifend enim gravida. Nunc tristique sem vitae augue convallis vehicula. Morbi egestas, arcu ac hendrerit lobortis, sapien urna vulputate risus, a mattis nisi ligula at odio. Proin nisl magna, convallis porttitor elit et, viverra pulvinar nibh. Aliquam arcu metus, elementum et consequat sed, condimentum in augue.

            Vivamus at nisi facilisis, feugiat nunc ut, mollis neque. Quisque enim neque, iaculis et tempus aliquet, scelerisque in leo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Cras euismod orci gravida porttitor commodo. Ut facilisis pellentesque ex, sit amet mollis neque mattis id. Pellentesque ultricies efficitur sapien, id elementum risus sagittis at. Cras gravida lobortis mollis. Proin scelerisque a tellus id accumsan. Vestibulum porttitor leo id diam commodo aliquet. Sed id metus ligula. Maecenas lobortis urna id cursus bibendum. Quisque sagittis efficitur velit ac blandit. In tincidunt auctor gravida. Suspendisse dignissim elit ac magna maximus, vitae accumsan neque volutpat. Aenean luctus dui orci, et vulputate libero suscipit at. Ut pharetra, lectus et bibendum sodales, nisi lectus sollicitudin erat, et malesuada ligula ipsum at diam.

            In hac habitasse platea dictumst. Pellentesque dui risus, condimentum suscipit efficitur sed, porta id ligula. In dapibus scelerisque pulvinar. Aliquam non felis rutrum, consequat libero eget, lacinia ipsum. Suspendisse leo magna, ultricies sed venenatis consequat, tempus sit amet libero. Nullam consectetur dapibus mi, non vehicula ex tincidunt laoreet. Maecenas id luctus orci. Maecenas risus purus, laoreet ac faucibus sit amet, tincidunt sit amet metus. Quisque pulvinar massa et diam pharetra iaculis eget in metus. Suspendisse in arcu quam. Praesent dignissim erat nec massa rhoncus interdum.
        </React.Fragment>
    )
}

export default Main;
