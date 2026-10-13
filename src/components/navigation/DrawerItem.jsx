import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const DrawerItem = ({ label, icon, active = false, onPress, badge }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.75}
      accessibilityRole="button"
      accessibilityLabel={label}
      className={`mx-3 mb-1 rounded-xl ${
        active ? "bg-blue-50" : "bg-transparent"
      }`}
    >
      <View className="flex-row items-center px-4 py-3.5">
        {/* Icon */}
        <View
          className={`w-10 h-10 rounded-xl items-center justify-center ${
            active ? "bg-blue-100" : "bg-gray-50"
          }`}
        >
          <Icon name={icon} size={21} color={active ? "#2563EB" : "#64748B"} />
        </View>

        {/* Label */}
        <Text
          className={`flex-1 ml-3 text-[15px] ${
            active ? "font-bold text-blue-600" : "font-medium text-slate-600"
          }`}
        >
          {label}
        </Text>

        {/* Badge */}
        {badge !== undefined && badge !== null && (
          <View className="min-w-6 h-6 px-1.5 rounded-full bg-red-500 items-center justify-center">
            <Text className="text-xs font-bold text-white">{badge}</Text>
          </View>
        )}

        {/* Active indicator */}
        {active && <View className="w-1 h-6 rounded-full bg-blue-600 ml-2" />}
      </View>
    </TouchableOpacity>
  );
};

export default DrawerItem;
