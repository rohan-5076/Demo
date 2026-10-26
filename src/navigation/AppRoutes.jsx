import {NavigationContainer} from '@react-navigation/native';

import MainNavigator from './MainNavigator';
import {navigationTheme} from './theme';

export default function AppRoutes() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <MainNavigator />
    </NavigationContainer>
  );
}
