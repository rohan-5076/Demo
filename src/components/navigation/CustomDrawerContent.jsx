import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Text, TouchableOpacity, View , Alert} from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import DrawerItem from "./DrawerItem";

const DRAWER_ITEMS = [
  {
    label: "Home",
    icon: "home-outline",
    route: "MainTabs",
  },
  {
    label: "Notifications",
    icon: "bell-outline",
    route: "Notifications",
    badge: 5,
  },
  {
    label: "Settings",
    icon: "cog-outline",
    route: "Settings",
  },
  {
    label: "Help & Support",
    icon: "help-circle-outline",
    route: "Help",
    badge: 1,
  },
];

const CustomDrawerContent = (props) => {
  const { navigation, state } = props;

  const activeRoute = state.routeNames[state.index];

  const handleNavigation = (route) => {
    navigation.navigate(route);
  };

  const handleLogout = () => {
    Alert.alert("Hello", "This is an alert message");
    console.log("Logout pressed");
  };

  return (
    <View className="flex-1 bg-white">
      {/* ================= HEADER ================= */}
      <View className="bg-blue-600 px-5 pt-14 pb-6 rounded-br-3xl">
        {/* Profile Row */}
        <View className="flex-row items-center">
          {/* Avatar */}
          <View className="w-14 h-14 rounded-full bg-white items-center justify-center">
            <Text className="text-lg font-bold text-blue-600">RH</Text>
          </View>

          {/* User Info */}
          <View className="flex-1 ml-3">
            <Text className="text-lg font-bold text-white">Rohan</Text>

            <Text numberOfLines={1} className="text-sm text-blue-100 mt-0.5">
              rohan@example.com
            </Text>
          </View>

          {/* Close Drawer */}
          <TouchableOpacity
            onPress={() => navigation.closeDrawer()}
            activeOpacity={0.7}
            className="w-9 h-9 rounded-full bg-white/15 items-center justify-center"
          >
            <Icon name="close" size={21} color="#FFFFFF" />
          </TouchableOpacity>
        </View>

        {/* Property / Company */}
        <View className="flex-row items-center mt-5">
          <View className="w-2 h-2 rounded-full bg-green-400 mr-2" />

          <Text className="text-sm font-medium text-blue-100">
            Company Name
          </Text>
        </View>
      </View>

      {/* ================= MENU ================= */}
      <DrawerContentScrollView
        {...props}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: 12,
          paddingBottom: 20,
        }}
      >
        <Text className="text-xs font-bold text-gray-400 uppercase px-6 mb-2">
          Menu
        </Text>

        {DRAWER_ITEMS.map((item) => (
          <DrawerItem
            key={item.route}
            label={item.label}
            icon={item.icon}
            badge={item.badge}
            active={activeRoute === item.route}
            onPress={() => handleNavigation(item.route)}
          />
        ))}
      </DrawerContentScrollView>

      {/* ================= FOOTER ================= */}
      <View className="border-t border-gray-100 px-3 pt-3 pb-5">
        <TouchableOpacity
          onPress={handleLogout}
          activeOpacity={0.75}
          className="flex-row items-center mx-3 px-4 py-3.5 rounded-xl"
        >
          <View className="w-10 h-10 rounded-xl bg-red-50 items-center justify-center">
            <Icon name="logout" size={21} color="#EF4444" />
          </View>

          <Text className="ml-3 text-[15px] font-semibold text-red-500">
            Logout
          </Text>
        </TouchableOpacity>

        {/* Version */}
        <Text className="text-center text-xs text-gray-400 mt-3">
          Version 1.0.0
        </Text>
      </View>
    </View>
  );
};

export default CustomDrawerContent;
