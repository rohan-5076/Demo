import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Alert, Pressable, Text, TextInput, TouchableOpacity, View } from "react-native";
import { showMessage } from "react-native-flash-message";
import {  ROUTE_REGISTRATION_FORM } from "../../navigation/RoutePathConstant";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigation = useNavigation();
  const handleLogin = () => {
    username.trim() === "" || password.trim() === ""
      ? showMessage({
          message: "Warning",
          description: "Please enter username and password",
          type: "warning",
          duration: 3000,
        })
      : username === "admin" && password === "123"
        ? (showMessage({
            message: "Success",
            description: "Login successful",
            type: "success",
            duration: 3000,
          }),
          setUsername(""),
          setPassword(""))
        : showMessage({
            message: "Login Failed",
            description: "Invalid username or password",
            type: "danger",
            duration: 3000,
          });
  };
  return (
    <View className="flex-1 items-center bg-gray-50 p-6">
      <View className="w-full h-[300px] rounded-xl bg-gray-800 justify-center items-center bg-gray-50 p-6">
        <Text className="font-bold text-xl text-white mb-8">Login Form</Text>
        <TextInput
          className="w-full border mb-5 border-gray-300 text-white"
          placeholder="Enter Email"
          placeholderTextColor="#ffffff"
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
          className="w-full border mb-5 border-gray-300 text-white"
          placeholder="Enter Password"
          placeholderTextColor="#ffffff"
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={handleLogin}>
          <Text className="bg-blue-400 text-white rounded-3xl px-5 py-2">
            Login
          </Text>
        </Pressable>
        <TouchableOpacity
        onPress={() => Navigation.navigate(ROUTE_REGISTRATION_FORM)}
        ><Text className='text-blue-200 text-xs m-2' >Register</Text></TouchableOpacity>
      </View>
      <Text className="text-xs text-left">username : admin</Text>
      <Text className="text-xs text-left">password : 123</Text>
    </View>
  );
};

export default LoginForm;
