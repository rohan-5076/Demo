import { useNavigation } from "@react-navigation/native";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import {
  ROUTE_EMPLOYEE_DETAILS_FORM,
  ROUTE_HOTEL_FORM,
  ROUTE_REGISTRATION_FORM,
} from "../../navigation/RoutePathConstant";

export default function FormsScreen() {
  const Navigation = useNavigation();

  const handleForm = () => {
    Navigation.navigate("LoginForm");
  };

  return (
    <View className="flex-row h-100 flex-wrap bg-gray-200 px-6">
      <View className="w-1/2  p-2 rounded-lg">
        <TouchableOpacity onPress={handleForm}>
          <Text className="bg-white py-10 text-center p-4">Login Form</Text>
        </TouchableOpacity>
      </View>

      <View className="w-1/2 p-2 rounded-lg">
        <TouchableOpacity
          onPress={() => Navigation.navigate(ROUTE_REGISTRATION_FORM)}
        >
          <Text className="bg-white py-10 text-center p-4">
            Registration Form
          </Text>
        </TouchableOpacity>
      </View>

      <View className="w-1/2 p-2 rounded-lg">
        <TouchableOpacity onPress={() => Navigation.navigate(ROUTE_HOTEL_FORM)}>
          <Text className="bg-white py-10 text-center p-4">
            Hotel Booking Form
          </Text>
        </TouchableOpacity>
      </View>

      <View className="w-1/2 p-2 rounded-lg">
        <TouchableOpacity
          onPress={() => Navigation.navigate(ROUTE_EMPLOYEE_DETAILS_FORM)}
        >
          <Text className="bg-white py-10 text-center p-4">
            Employee Details Form
          </Text>
        </TouchableOpacity>
      </View>

      <View className="w-1/2 p-2 rounded-lg">
        <TouchableOpacity onPress={() => Alert.alert("Press 5")}>
          <Text className="bg-white py-10 text-center p-4">
            Expense Entry Form
          </Text>
        </TouchableOpacity>
      </View>

      <View className="w-1/2 p-2 rounded-lg">
        <TouchableOpacity onPress={() => Alert.alert("Press 6")}>
          <Text className="bg-white py-10 text-center p-4">
            Add New Room Form
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
