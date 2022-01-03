import { FontAwesome } from '@expo/vector-icons';
import * as React from 'react';
import { Pressable } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootTabScreenProps, MainTabParamList } from '../types';
import { Fontisto } from '@expo/vector-icons';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

function TabBarIcon(props: {
  naeme: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}

export function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName='Chats'
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].background,
        tabBarStyle: { backgroundColor: Colors[colorScheme].tint },
        tabBarIndicatorStyle: {
          backgroundColor: Colors[colorScheme].background,
          height: 4
        },
        tabBarLabelStyle: {
          fontWeight: 'bold'
        }
      }}
    >
      <MainTab.Screen
        name='Camera'
        component={TabOneScreen}
        options={{
          tabBarIcon: (props) => (
            <Fontisto name='camera' color={props.color} size={18} />
          ),
          tabBarLabel: () => null
        }}
      />
      <MainTab.Screen
        name='Chats'
        component={TabTwoScreen}
        options={{
          title: 'chats'
        }}
      />
      <MainTab.Screen
        name='Status'
        component={TabTwoScreen}
        options={{
          title: 'Status'
        }}
      />
      <MainTab.Screen
        name='Calls'
        component={TabTwoScreen}
        options={{
          title: 'calls'
        }}
      />
    </MainTab.Navigator>
  );
}
