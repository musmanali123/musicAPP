import React, { useEffect, useState } from 'react';
import AnimatedSplashScreen from './src/components/AnimatedSplashScreen';
import AuthStack from './src/routes/routes';
import WelcomeScreen from './src/screens/Authentication/Welcome';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  const [isVisibleSplash, setIsVisibleSplash] = useState(false);

  useEffect(() => {
    getInitialData();
    setTimeout(() => {
      setIsVisibleSplash(false)
    }, 6000)
  }, []);

  // All initial tasks will call here........ 
  const getInitialData = () => {
    setIsVisibleSplash(true)
  }

  return (
    <NavigationContainer>
      {isVisibleSplash ?
        <AnimatedSplashScreen />
        :
        <AuthStack />
      }
    </NavigationContainer>
  )
}


export default App;