import React, {Component} from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {sendingMessage} from "../actions";

class WorkChat extends Component {
    msgRef = React.createRef();   // ref
    render() {
        console.log("wc props messages ", this.props.messages);
        return (
            <div>
                This is the WorkChat Component
                <div>
                    <ul>
                        {this.props.messages.map((item, i) => {
                            return <li key={i}>{item.text}</li>
                        })}
                    </ul>
                </div>
                <div>
                    <input
                        type="text"
                        ref={this.msgRef}
                        />
                    <button onClick={() => {
                        console.log("click msgref ", this.msgRef.current.value);
                        this.props.sendingMessage(this.msgRef.current.value);
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
    }
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({sendingMessage}, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkChat);