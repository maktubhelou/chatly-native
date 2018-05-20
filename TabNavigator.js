import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Login!</Text>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }
}

class ChatScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Chat!</Text>
      </View>
    );
  }
}

class UserScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Users!</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Settings: SettingsScreen,
    Chat: ChatScreen,
    Users: UserScreen,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        } else if (routeName === 'Settings') {
          iconName = `ios-options${focused ? '' : '-outline'}`;
        } else if (routeName === 'Chat') {
          iconName = `ios-text${focused ? '' : '-outline'}`;
        } else if (routeName === 'Users') {
          iconName = `ios-people${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#0101af',
      inactiveTintColor: 'grey',
    },
  }
);

export default TabNavigator;