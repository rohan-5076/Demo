import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "../../components/common/Header";
import SettingsScreen from "../../screens/Settings/SettingsScreen";
import ProfileSettings from "../../screens/Settings/ProfileSettings";
import {
  ROUTE_NOTIFICATION_SETTINGS,
  ROUTE_PROFILE_SETTINGS,
  ROUTE_SECURITY_SETTINGS,
  ROUTE_SETTINGS_HOME,
} from "../RoutePathConstant";
import NotificationSettings from "../../screens/Settings/NotificationSettings";
import SecuritySettings from "../../screens/Settings/SecuritySettings";

const Stack = createNativeStackNavigator();

export default function SettingsStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE_SETTINGS_HOME}
      screenOptions={{
        header: (props) => <Header {...props} />,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name={ROUTE_SETTINGS_HOME}
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />

      <Stack.Screen
        name={ROUTE_PROFILE_SETTINGS}
        component={ProfileSettings}
        options={{ title: "Profile Settings" }}
      />
      <Stack.Screen
        name={ROUTE_NOTIFICATION_SETTINGS}
        component={NotificationSettings}
        options={{ title: "Notification Settings" }}
      />
      <Stack.Screen
        name={ROUTE_SECURITY_SETTINGS}
        component={SecuritySettings}
        options={{ title: "Security Settings" }}
      />
    </Stack.Navigator>
  );
}
