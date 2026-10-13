import {Text, View} from 'react-native';

export default function ProfileScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50 px-6">
      <Text className="text-3xl font-bold text-gray-900">Profile</Text>
      <Text className="mt-2 text-center text-base text-gray-600">
        Your profile will appear here.
      </Text>
    </View>
  );
}