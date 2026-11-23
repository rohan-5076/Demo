import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  ROUTE_NOTIFICATION_SETTINGS,
  ROUTE_PROFILE_SETTINGS,
  ROUTE_SECURITY_SETTINGS,
} from "../../navigation/RoutePathConstant";
import { useNavigation } from "@react-navigation/native";

const settingsItems = [
  {
    name: "Profile Settings",
    icon: "person-outline",
    desc: "Name, email, and account details",
    route: ROUTE_PROFILE_SETTINGS,
  },
  {
    name: "Notifications",
    icon: "notifications-outline",
    desc: "Manage app notifications",
    route: ROUTE_NOTIFICATION_SETTINGS,
  },
  {
    name: "Security",
    icon: "shield-checkmark-outline",
    desc: "Password and account security",
    route: ROUTE_SECURITY_SETTINGS,
  },
];

export default function SettingsScreen() {
  const Navigation = useNavigation();

  return (
    <View className="flex-1 bg-gray-50 px-5 py-6">
      <Text className="mb-6 text-3xl font-bold text-gray-900">Settings</Text>

      {settingsItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          className="mb-3 flex-row items-center rounded-xl border border-gray-200 bg-white p-5"
          onPress={() => Navigation.navigate(item.route)}
        >
          <Ionicons name={item.icon} size={24} color="#2563EB" />

          <View className="ml-4 flex-1">
            <Text className="text-lg font-semibold text-gray-900">
              {item.name}
            </Text>

            <Text className="mt-1 text-xs text-gray-500">{item.desc}</Text>
          </View>

          <Ionicons name="chevron-forward" size={18} color="#9CA3AF" />
        </TouchableOpacity>
      ))}
    </View>
  );
}
