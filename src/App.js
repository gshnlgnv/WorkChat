import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Form, Button} from "react-bootstrap";
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
            return <Form>
                <div className="logo__img">
                    <img alt="logo" src={logo} width={100} height={100}/>
                </div>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Логин</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Введите логин"
                        ref={this.loginRef}
                    />

                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Пароль</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Введите пароль"
                        ref={this.passwordRef}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="button"
                    onClick={() => {

                        console.log(" login + pw : ", this.loginRef.current.value, this.passwordRef.current.value);

                        this.props.gettingLoginAndPassword(this.loginRef.current.value, this.passwordRef.current.value)
                    }}>
                    Войти
                </Button>

                <Form.Text className="text-muted">
                    have a good day
                </Form.Text>

            </Form>;
        }
    }

    render() {
        console.log(this.props.auth);
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
