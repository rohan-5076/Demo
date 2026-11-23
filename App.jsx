import "./global.css";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppRoutes from "./src/navigation/AppRoutes";
import FlashMessage from "react-native-flash-message";

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <AppRoutes />
      <FlashMessage
        position="top"
        statusBarHeight={0}
        style={{ paddingTop: 50 }}
      />
    </SafeAreaProvider>
  );
}
