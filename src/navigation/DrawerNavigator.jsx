import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

import BottomTabNavigator from "./BottomTabNavigator";
import HelpScreen from "../screens/Help/HelpScreen";
import CustomDrawerContent from "../components/navigation/CustomDrawerContent";
import Header from "../components/common/Header";
import FormsStackNavigator from "./MainStackNavigator/FormsStackNavigator";
import SettingsStackNavigator from "./MainStackNavigator/SettingsStackNavigator";
import {
  ROUTE_FORMS,
  ROUTE_FORMS_HOME,
  ROUTE_HELP,
  ROUTE_HOME,
  ROUTE_MAIN_TABS,
  ROUTE_SETTINGS,
  ROUTE_SETTINGS_HOME,
  ROUTE_TASKS,
  ROUTE_TASKS_HOME,
} from "./RoutePathConstant";
import TasksScreen from "../screens/Tasks/TasksScreen";
import { TaskStackNavigator } from "./MainStackNavigator/TasksStackNavigator";

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
            headerShown: false,
            popToTopOnBlur: true,
            swipeEnabled: focused === ROUTE_FORMS_HOME,
          };
        }}
      />



      <Drawer.Screen
        name={ROUTE_TASKS}
        component={TaskStackNavigator}
        options={({ route }) => {
          const focused = getFocusedRouteNameFromRoute(route) ?? ROUTE_TASKS_HOME;
          return {
            title: "Tasks",
            headerShown: false,
            popToTopOnBlur: true,
            swipeEnabled: focused === ROUTE_TASKS_HOME,
          };
        }}
      />
      <Drawer.Screen
        name={ROUTE_SETTINGS}
        component={SettingsStackNavigator}
        options={({ route }) => {
          const focused = getFocusedRouteNameFromRoute(route) ?? ROUTE_SETTINGS_HOME;
          return {
            title: "Setting",
            headerShown: false,
            popToTopOnBlur: true,
            swipeEnabled: focused === ROUTE_SETTINGS_HOME,
          };
        }}
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
