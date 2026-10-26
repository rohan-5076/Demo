import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Header from "../../components/common/Header";
import FormsScreen from "../../screens/Forms/FormsScreen";
import LoginForm from "../../screens/Forms/LoginForm";
import { ROUTE_EMPLOYEE_DETAILS_FORM, ROUTE_FORMS_HOME, ROUTE_HOTEL_FORM, ROUTE_LOGIN_FORM, ROUTE_REGISTRATION_FORM } from "../RoutePathConstant";
import RegisterForm from "../../screens/Forms/RegistrationForm";
import HotelBookingForm from "../../screens/Forms/HotelBookingForm";
import EmployeeDetailsForm from "../../screens/Forms/EmployeeDetailsForm";

const Stack = createNativeStackNavigator();

export default function FormsStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE_FORMS_HOME}
      screenOptions={{
        header: (props) => <Header {...props} />,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name={ROUTE_FORMS_HOME}
        component={FormsScreen}
        options={{ title: "Forms" }}
      />

      <Stack.Screen
        name={ROUTE_LOGIN_FORM}
        component={LoginForm}
        options={{ title: "Login Form" }}
      />
      <Stack.Screen
        name={ROUTE_REGISTRATION_FORM}
        component={RegisterForm}
        options={{ title: "Registration Form" }}
      />
      <Stack.Screen
        name={ROUTE_HOTEL_FORM}
        component={HotelBookingForm}
        options={{ title: "Hotel Form" }}
      />
      <Stack.Screen
        name={ROUTE_EMPLOYEE_DETAILS_FORM}
        component={EmployeeDetailsForm}
        options={{ title: "Employee Details Form" }}
      />
    </Stack.Navigator>
  );
}
