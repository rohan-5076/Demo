import {Text, View} from 'react-native';

export default function HelpScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-gray-50 px-6">
      <Text className="text-3xl font-bold text-gray-900">Help &amp; Support</Text>
      <Text className="mt-2 text-center text-base text-gray-600">
        Support information will appear here.
      </Text>
    </View>
  );
}
