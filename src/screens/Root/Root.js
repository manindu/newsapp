import React from 'react';
import {connect} from 'react-redux';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Feathericons from 'react-native-vector-icons/Feather';
import {Home, Bookmarks, SignIn, SignUp} from '..';

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const Root = ({currentUser}) => {
  return currentUser ? (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'Bookmarks') {
            iconName = 'bookmark';
          }

          return <Feathericons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookmarks" component={Bookmarks} />
    </Tab.Navigator>
  ) : (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

const mapStateToProps = ({user}) => ({
  currentUser: user.currentUser,
});

export default connect(mapStateToProps)(Root);
