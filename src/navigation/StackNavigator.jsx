import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator } from "@react-navigation/stack";
import { ROUTE_LOGIN_FORM } from "./RoutePathConstant";
import LoginForm from "../screens/Forms/LoginForm";

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShadowVisible: false }}>
      <Stack.Screen
        options={{
          headerShown: true,
          headerTitle: "Login Form",
        }}
        name={ROUTE_LOGIN_FORM}
        component={LoginForm}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
