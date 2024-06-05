import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Tournament from './features/Tournament';
import Result from './features/Result';

const Stack = createNativeStackNavigator();

const GLOBAL_SCREEN_OPTIONS = {
  headerShown: false,
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={GLOBAL_SCREEN_OPTIONS}>
        <Stack.Screen name="Tournament" component={Tournament} />
        <Stack.Screen name="Result" component={Result} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
