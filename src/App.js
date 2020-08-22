import React, {Component} from 'react';
import './Styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button} from "react-bootstrap";
import logo from './logo_workchat.png';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {gettingLoginAndPassword} from './actions';
import Chats from '../src/Components/Chats.js';

class App extends Component {

    passwordRef = React.createRef();
    loginRef = React.createRef();

    renderChats() {

        if (this.props.auth) {
            return <Chats/>;
        } else {
            return <div className="parent">
                <div className="logo__img children">
                    <img alt="logo" src={logo} width={100} height={100}/>
                </div>

                <div>
                    <h5>Логин</h5>
                    <input type="text" placeholder="Введите логин" ref={this.loginRef}/>
                </div>

                <div>
                    <h5>Пароль</h5>
                    <input type="password" placeholder="Введите пароль" ref={this.passwordRef}/>
                </div>

                <div >
                    <Button
                        className="button"
                        variant="primary"
                        type="button"
                        onClick={() => {
                            this.props.gettingLoginAndPassword(this.loginRef.current.value, this.passwordRef.current.value)
                        }}>
                        Войти
                    </Button>
                </div>
            </div>



            ;
        }
    }

    render() {
        return (
            <div>
                {this.renderChats()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.loginReducer.auth,
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({gettingLoginAndPassword}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
