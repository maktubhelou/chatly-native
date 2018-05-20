import React from 'react';
import { Text, View, Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import TabNavigator from './TabNavigator';

class App extends React.Component {
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