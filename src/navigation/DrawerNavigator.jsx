import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import BottomTabNavigator from "./BottomTabNavigator";
import SettingsScreen from "../screens/Settings/SettingsScreen";
import HelpScreen from "../screens/Help/HelpScreen";
import CustomDrawerContent from "../components/navigation/CustomDrawerContent";
import Header from "../components/common/Header";
import FormsStackNavigator from "./MainStackNavigator/FormsStackNavigator";
import {
  ROUTE_FORMS,
  ROUTE_FORMS_HOME,
  ROUTE_HELP,
  ROUTE_HOME,
  ROUTE_MAIN_TABS,
  ROUTE_SETTINGS,
} from "./RoutePathConstant";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ROUTE_MAIN_TABS}
      backBehavior="firstRoute"
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        header: (props) => <Header {...props} />,
        drawerType: "front",
        drawerPosition: "left",
        swipeEnabled: true,
        overlayColor: "rgba(15,23,42,0.45)",
        drawerStyle: {
          width: "82%",
        },
      }}
    >
      <Drawer.Screen
        name={ROUTE_MAIN_TABS}
        component={BottomTabNavigator}
        // Header title follows the selected bottom tab
        options={({ route }) => ({
          title: getFocusedRouteNameFromRoute(route) ?? ROUTE_HOME,
        })}
      />

      <Drawer.Screen
        name={ROUTE_FORMS}
        component={FormsStackNavigator}
        options={({ route }) => {
          const focused = getFocusedRouteNameFromRoute(route) ?? ROUTE_FORMS_HOME;
          return {
            title: "Forms",
            // The forms stack renders its own header (with a back button on nested screens)
            headerShown: false,
            // Reopening Forms from the drawer always starts at the forms list
            popToTopOnBlur: true,
            // Avoid clashing with the swipe-back gesture on nested form screens
            swipeEnabled: focused === ROUTE_FORMS_HOME,
          };
        }}
      />

      <Drawer.Screen
        name={ROUTE_SETTINGS}
        component={SettingsScreen}
        options={{ title: "Settings" }}
      />

      <Drawer.Screen
        name={ROUTE_HELP}
        component={HelpScreen}
        options={{ title: "Help & Support" }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
