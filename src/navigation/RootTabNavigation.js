import * as React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/Home';

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const HomeIcon = ({ focused, color, size }) => (
  <Ionicons name='ios-home' color={color} size={size} />
);

const FavouriteIcon = ({ focused, color, size }) => (
  <Ionicons name='ios-heart' size={size} color={color} />
);

const ProfileIcon = ({ focused, color, size }) => (
  <Ionicons name='ios-person' size={size} color={color} />
);

export default function RootTabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: '#049FFF',
        inactiveTintColor: '#8F92A1',
        // labelStyle: {
        //   margin: 0,
        // },
      }}
    >
      <Tab.Screen
        name='Home'
        component={HomeScreen}
        options={{
          tabBarIcon: HomeIcon,
        }}
      />
      <Tab.Screen
        name='Settings'
        component={SettingsScreen}
        options={{ tabBarIcon: FavouriteIcon }}
      />
      <Tab.Screen
        name='Profile'
        component={SettingsScreen}
        options={{ tabBarIcon: ProfileIcon }}
      />
    </Tab.Navigator>
  );
}
