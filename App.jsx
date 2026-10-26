import "./global.css";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AppRoutes from './src/navigation/AppRoutes';

export default function App() {
  return (
     <SafeAreaProvider>
      {/* Light icons to sit on the blue app header */}
      <StatusBar style="light" />
      <AppRoutes />
    </SafeAreaProvider>
  );
}
