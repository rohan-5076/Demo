import "./global.css";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import AppRoutes from './src/navigation/AppRoutes';

export default function App() {
  return (
     <SafeAreaProvider>
      <StatusBar style="dark" />
      <AppRoutes />
    </SafeAreaProvider>
  );
}
