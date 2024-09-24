import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {ScreenNames} from './screenNames';
import BottomTabNavigator from './bottomtabs';
import SplashScreen from '../screen/splashscreen';
import Home from '../screen/home';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import sign from '../screen/sign';
import Sign from '../screen/sign';
import {SafeAreaView} from 'react-native-safe-area-context';
import Forgot from '../screen/forgetPassword';
import ResetPassword from '../screen/resetpassword';
import Addphone from '../screen/addphone';
import VerifyOtp from '../screen/verifyOtp';
import TutorialScreen from '../screen/tutorial';

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          component={SplashScreen}
          name={ScreenNames.Splash}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Forgot}
          name={ScreenNames.Forgot}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={ResetPassword}
          name={ScreenNames.Reset}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Sign}
          name={ScreenNames.Sign}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={BottomTabNavigator}
          name={ScreenNames.BottomTab}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={Addphone}
          name={ScreenNames.AddPhone}
          options={{headerShown: false}}
        />
        <Stack.Screen
          component={VerifyOtp}
          name={ScreenNames.VerifyOtp}
          options={{headerShown: false}}
        />

        <Stack.Screen
          component={TutorialScreen}
          name={ScreenNames.Tutorial}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
