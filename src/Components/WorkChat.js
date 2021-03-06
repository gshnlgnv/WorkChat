import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendingMessage, deleteMessage} from "../actions";
import "../Styles/WorkChat.css";

class WorkChat extends Component {

    msgRef = React.createRef();

    clearInput = () => {
        this.msgRef.current.value = "";
    };

    handleKeyDown = (event) => {
        if (this.msgRef.current.value && event.key === "Enter") {
            this.props.sendingMessage(this.msgRef.current.value);
            this.clearInput();
        }
    };

    render() {
        return (
            <div className="wrapper">
                This is the WorkChat Component <b>[ logged as {this.props.login} ]</b>
                <div className="chatBox">
                    <ul>
                        {this.props.messages.map((item, i) => {
                            return <li key={i}> {this.props.login} says: {item.text}
                                <b className="deleteMsgPointer" onClick={() => {
                                    this.props.deleteMessage(item.id);

                                }}> x</b></li>
                        })}
                    </ul>
                </div>
                <div>
                    <input
                        className="userInput"
                        type="text"
                        ref={this.msgRef}
                        onKeyDown={this.handleKeyDown}
                    />
                    <button onClick={() => {
                        this.props.sendingMessage(this.msgRef.current.value);
                        this.clearInput();
                    }}>Отправить
                    </button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        messages: state.sendingMsgReducer.messages,
        login: state.loginReducer.login,
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({sendingMessage, deleteMessage}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkChat);