import React, { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import ReduxStore from "./app/sauce/redux/Store";
import Routes from "./app/navigation/AppNavigation";

const App = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Provider store={ReduxStore.store}>
      <PersistGate loading={null} persistor={ReduxStore.persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  );
};

export default App;
