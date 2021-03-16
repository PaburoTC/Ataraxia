import React, {useState, useEffect} from "react";
import {getCookie} from "../../cookie_manager";
import axios from "axios";
import './Profile.scss';

const Profile = props =>{

    if(getCookie('current_user') === null){
        props.history.replace('/')
    }

    const [profile, setProfile] = useState(
        {
            username: 'Paburo',
            img: 'https://ichef.bbci.co.uk/news/640/cpsprodpb/8536/production/_103520143_gettyimages-908714708.jpg',
            description: 'Estudiante de informática',
            instagram: '@patoo301',
            linkedin: ''
        }
    )

    const [editProfileDescription, setEditProfileDescription] = useState(false)

    useEffect(()=>{
        axios.get('')
            .then(response => {
                setProfile(response.data.profile)
            })
    },[])

    return(
        <React.Fragment>
            <div className="profile">
                <img src={profile.img} alt="Imagen de perfil"/>
                <h4>¿Quién soy?</h4>
                {editProfileDescription
                ?   <React.Fragment>
                        <textarea value={profile.description} onChange={event=>setProfile({...profile, description: event.target.value})}/>
                        <button onClick={()=>setEditProfileDescription(false)}>Guardar descripción</button>
                    </React.Fragment>
                :   <React.Fragment>
                        <div>{profile.description}</div>
                        <button onClick={()=>setEditProfileDescription(true)}>Editar descripción</button>
                    </React.Fragment>}

            </div>
            <div className="profile-projects">

            </div>
        </React.Fragment>
    )
}

export default Profile;
