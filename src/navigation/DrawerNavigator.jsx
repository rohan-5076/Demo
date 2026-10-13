import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import BottomTabNavigator from "./BottomTabNavigator";
import NotificationsScreen from "../screens/Notifications/NotificationsScreen";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import HelpScreen from "../screens/Help/HelpScreen";
import CustomDrawerContent from "../components/navigation/CustomDrawerContent";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerType: "slide",
        drawerPosition: "left",
        swipeEnabled: true,
        overlayColor: "rgba(0,0,0,0.35)",
        drawerStyle: {
          width: "82%",
        },
      }}
    >
      <Drawer.Screen name="MainTabs" component={BottomTabNavigator} />

      <Drawer.Screen name="Notifications" component={NotificationsScreen} />

      <Drawer.Screen name="Settings" component={SettingsScreen} />

      <Drawer.Screen name="Help" component={HelpScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
