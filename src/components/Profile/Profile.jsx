import React, { useState, useEffect } from "react";
import { getCookie } from "../../cookie_manager";
import axios from "axios";
import Project from "./Project/Project";
import './Profile.scss';

const Profile = props => {

    if (getCookie('current_user') === null) {
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

    const [addProject, setAddProject] = useState({})

    const [projects, setProjects] = useState([
        {
            name:'Burgoneta',
            description:'BREMEN LUL',
            link:'',
            likes: 100
        }
        ])
    const [editProfileDescription, setEditProfileDescription] = useState(false)

    useEffect(() => {
        axios.get('')
            .then(response => {
                setProfile(response.data.profile)
            })
    }, [])

    return (
        <div className="profile">
            <div className="profile-description">
                <img src={profile.img} alt="Imagen de perfil" />
                <h4>¿Quién soy?</h4>
                {editProfileDescription
                    ? <React.Fragment>
                        <textarea value={profile.description} onChange={event => setProfile({ ...profile, description: event.target.value })} />
                        <button className="ProfileButton" onClick={() => setEditProfileDescription(false)}>Guardar descripción</button>
                    </React.Fragment>
                    : <React.Fragment>
                        <div>{profile.description}</div>
                        <button className="ProfileButton" onClick={() => setEditProfileDescription(true)}>Editar descripción</button>
                    </React.Fragment>}

            </div>
            <div className="profile-projects">
                <h4>¡Añade tu último proyecto!</h4>
                <form className="profile-projects-add">
                    <label>Nombre</label>
                    <input type="text" value={addProject.name} onChange={event => setAddProject({...addProject, name:event.target.value})}/>

                    <labe>Descripción</labe>
                    <textarea value={addProject.description} onChange={event => setAddProject({...addProject, descripcion:event.target.value})}/>
                    
                    <label>Link</label>
                    <input type="text" value={addProject.link} onChange={event => setAddProject({...addProject, link:event.target.value})}/>
                </form>
                {projects.map(project =><Project name={project.name} description={project.description} likes={project.likes}/>)}
            </div>
        </div>
    )
}

export default Profile;
