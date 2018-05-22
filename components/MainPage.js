import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import SocketIO from 'react-native-socket.io-client';
import TabNavigator from './TabNavigator';
window.navigator.userAgent = "react-native";
let io = require('react-native-socket.io-client/socket.io');
let socketio = new SocketIO('localhost:3000');

class App extends React.Component {

  componentWillMount(){
    console.log("===CONNECTING SOCKET====");
    socket = io('http://127.0.0.1:3000', {jsonp: false});
    
    socketio.emit('hello can you hear me?');
    // userList = io.sockets.emit("update-people", {people: people, count: sizePeople});
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Welcome to Chatly!</Text>
        <Button onPress={() => this.props.navigation.navigate("NavScreen")} title="Login" />
      </View>
    );
  }
}

export default createStackNavigator(
  {
    Home: {screen: App},
    NavScreen: {screen: TabNavigator},
  },
  {
  initialRouteName: 'Home',
  }
);