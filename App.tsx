import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import Routes from "./app/navigation/AppNavigation";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return <Routes />;
};

export default App;
