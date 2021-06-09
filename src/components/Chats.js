import React from 'react';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase';

const Chats  = () => {

    const history  = useHistory();
    
    const handleLogout = async () =>{
        await auth.signOut();
        history.push('/');
    }
    
    return (
        <div className = "chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    LetsChatApp
                </div>
                <div onClick = { handleLogout } className="logout-tab">
                    Logout
                </div>
            </div>

            <ChatEngine
                height = "calc(100vh - 66px)"
                projectId = "a84f17c0-da95-4df5-ac1d-8ae01b94f980"
                userName = "."
                userSecret = "."
            />
        </div>
    )
}

export default Chats;