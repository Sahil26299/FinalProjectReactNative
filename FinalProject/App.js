import React, {useState} from 'react'
import Welcome from './Screens/LoginScreens/Welcome';
import SliderMain from './Screens/LoginScreens/SliderMain';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login1 from './Screens/LoginScreens/Login1';
import ReferralCode from './Screens/LoginScreens/ReferralCode';
import CreateNewAcc from './Screens/LoginScreens/CreateNewAcc';
import EmailSent from './Screens/LoginScreens/EmailSent';
import LoginPhone from './Screens/LoginScreens/LoginPhone';
import SignUpOTP from './Screens/LoginScreens/SignUpOTP';
import PhoneVerified from './Screens/LoginScreens/PhoneVerified';
import ThanksForJoin from './Screens/LoginScreens/ThanksForJoin';
import MainLogin from './Screens/LoginScreens/MainLogin';

const Stack = createNativeStackNavigator();
export default function App() {
  const [screen, setScreen] = useState(0);
  // var initialScreen = 'Welcome';
  // setTimeout(() => {
  //   initialScreen = 'SlideScreens1'
  //   App();
  // }, 3000);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='SignUpOTP' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SliderMain" component={SliderMain} />
        <Stack.Screen name="Login1" component={Login1} />
        <Stack.Screen name="ReferralCode" component={ReferralCode} />
        <Stack.Screen name="CreateNewAcc" component={CreateNewAcc} />
        <Stack.Screen name="EmailSent" component={EmailSent} />
        <Stack.Screen name="LoginPhone" component={LoginPhone} />
        <Stack.Screen name="SignUpOTP" component={SignUpOTP} />
        <Stack.Screen name="PhoneVerified" component={PhoneVerified} />
        <Stack.Screen name="ThanksForJoin" component={ThanksForJoin} />
        <Stack.Screen name="MainLogin" component={MainLogin} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}