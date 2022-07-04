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
      <Stack.Navigator initialRouteName='Welcome' screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="SliderMain" component={SliderMain} />
        <Stack.Screen name="Login1" component={Login1} />
        <Stack.Screen name="ReferralCode" component={ReferralCode} />
        <Stack.Screen name="CreateNewAcc" component={CreateNewAcc} />
        <Stack.Screen name="EmailSent" component={EmailSent} />
        <Stack.Screen name="LoginPhone" component={LoginPhone} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}