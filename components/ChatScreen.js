import React from 'react';
import { GiftedChat } from 'react-native-gifted-chat'
import { View, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
window.navigator.userAgent = "react-native";
let io = require('react-native-socket.io-client/socket.io');

messages = require("../data/messages.js");

class ChatScreen extends React.Component {
  constructor(props) {
    super(props);
    this.socket = io('http://localhost:3000');
  }

  state = {
    messages: [],
  }

  componentWillMount() {
    this.setState({
      messages: messages
    })
  }

  onSend(messages = []) {
    socket.emit(messages);
    console.log(messages);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        user={{
          _id: 1,
          name: 'User Name',
        
        }}
      />
    )
  }
}

export default ChatScreen;