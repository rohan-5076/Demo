import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import DocumentScreen from "../screens/Document/DocumentScreen";
import HomeScreen from "../screens/Home/HomeScreen";
import ProfileScreen from "../screens/Profile/ProfileScreen";
import { ROUTE_DOCUMENTS, ROUTE_HOME, ROUTE_PROFILE } from "./RoutePathConstant";
import { COLORS } from "./theme";

const Tab = createBottomTabNavigator();

const TAB_CONFIG = [
  {
    name: ROUTE_HOME,
    component: HomeScreen,
    icon: "home-outline",
    activeIcon: "home",
  },
  {
    name: ROUTE_DOCUMENTS,
    component: DocumentScreen,
    icon: "file-document-outline",
    activeIcon: "file-document",
  },
  {
    name: ROUTE_PROFILE,
    component: ProfileScreen,
    icon: "account-outline",
    activeIcon: "account",
  },
];

const BottomTabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      initialRouteName={ROUTE_HOME}
      backBehavior="firstRoute"
      screenOptions={({ route }) => {
        const tab = TAB_CONFIG.find((item) => item.name === route.name);
        return {
          // The drawer header above the tabs already shows the active tab title
          headerShown: false,

          tabBarActiveTintColor: COLORS.primary,
          tabBarInactiveTintColor: COLORS.textMuted,

          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
          },

          tabBarStyle: {
            height: 60 + insets.bottom,
            paddingTop: 6,
            paddingBottom: insets.bottom,

            borderTopWidth: 1,
            borderTopColor: COLORS.border,

            backgroundColor: COLORS.card,

            elevation: 8,

            shadowOpacity: 0.08,
            shadowRadius: 8,
            shadowOffset: {
              width: 0,
              height: -2,
            },
          },

          tabBarIcon: ({ focused, color }) => (
            <Icon
              name={focused ? (tab?.activeIcon ?? tab?.icon) : tab?.icon}
              size={focused ? 25 : 23}
              color={color}
            />
          ),
        };
      }}
    >
      {TAB_CONFIG.map((tab) => (
        <Tab.Screen key={tab.name} name={tab.name} component={tab.component} />
      ))}
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
