import {NavigationContainer} from '@react-navigation/native';

import MainNavigator from './MainNavigator';

export default function AppRoutes() {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}