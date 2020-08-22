import React, {Component} from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";
import WorkChat from "./WorkChat.js";
import FloodChat from "./FloodChat.js";

class Chats extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div>
                        <b>Chats List:</b>
                    </div>
                    <div>
                        <Link to={{ pathname: "/workchat", }}>WorkChat</Link>
                        <Link to="/floodchat">FloodChat</Link>
                    </div>
                    <Route path="/workchat" component={WorkChat}/>
                    <Route path="/floodchat" component={FloodChat}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Chats;