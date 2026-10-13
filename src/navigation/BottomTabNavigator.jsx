import React from 'react';
import {Platform} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import DocumentScreen from '../screens/Document/DocumentScreen';
import HomeScreen from '../screens/Home/HomeScreen';
import ProfileScreen from '../screens/Profile/ProfileScreen';

const Tab = createBottomTabNavigator();

const TAB_CONFIG = [
  {
    name: 'Home',
    component: HomeScreen,
    icon: 'home-outline',
    activeIcon: 'home',
  },
  {
    name: 'Documents',
    component: DocumentScreen,
    icon: 'account-outline',
    activeIcon: 'account',
  },
  {
    name: 'Profile',
    component: ProfileScreen,
    icon: 'account-outline',
    activeIcon: 'account',
  },
];

const BottomTabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={({route}) => {
        const tab = TAB_CONFIG.find(item => item.name === route.name);

        return {
          headerShown: false,

          tabBarActiveTintColor: '#2563EB',
          tabBarInactiveTintColor: '#94A3B8',

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: '600',
          },

          tabBarStyle: {
            height: 60 + insets.bottom,
            paddingTop: 6,
            paddingBottom: insets.bottom,

            borderTopWidth: 1,
            borderTopColor: '#E2E8F0',

            backgroundColor: '#FFFFFF',

            elevation: 8,

            shadowOpacity: 0.08,
            shadowRadius: 8,
            shadowOffset: {
              width: 0,
              height: -2,
            },
          },

          tabBarIcon: ({focused, color}) => (
            <Icon
              name={
                focused
                  ? tab?.activeIcon ?? tab?.icon
                  : tab?.icon
              }
              size={focused ? 25 : 23}
              color={color}
            />
          ),
        };
      }}>
      {TAB_CONFIG.map(tab => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
        />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;