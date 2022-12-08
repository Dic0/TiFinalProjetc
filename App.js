import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
// import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Slider from "./app/components/slider";
import NoteScreen from "./app/screens/NoteScreen";
import NoteDetail from "./app/components/NoteDetail";
import NoteProvider from "./app/contexts/NoteProvider";
import Intro from "./app/screens/Intro";
import Orientacao from "./app/screens/Orientacao";
import Report from "./app/screens/Report";
import Myth from "./app/screens/Myth";
// import { Provider } from "react-redux";
// import store from "./app/store";

const Stack = createStackNavigator();

function App() {
  const [user, setUser] = useState({});
  const [isAppFirstTimeOpen, setIsAppFirstTimeOpen] = useState(false);
  const [isAppFirstSliderTimeOpen, setIsAppFirstSliderTimeOpen] =
    useState(false);

  const [slider, setSlider] = useState({});

  const findUser = async () => {
    const result = await AsyncStorage.getItem("user");

    if (result === null) return setIsAppFirstTimeOpen(true);

    setUser(JSON.parse(result));
    setIsAppFirstTimeOpen(false);
  };

  const findSlider = async () => {
    const result = await AsyncStorage.getItem("Slider");
    if (result === null) return setIsAppFirstSliderTimeOpen(true);

    setSlider(JSON.parse(result));
    setIsAppFirstSliderTimeOpen(false);
  };

  useEffect(() => {
    findSlider();
    findUser();
  }, []);

  const renderNoteScreen = (props) => <NoteScreen {...props} user={user} />;

  if (isAppFirstSliderTimeOpen) return <Slider onFinish={findSlider} />;
  if (isAppFirstTimeOpen) return <Intro onFinish={findUser} />;
  return (
    <NavigationContainer>
      <NoteProvider>
        <Stack.Navigator
          screenOptions={{ headerTitle: "", headerTransparent: true }}
        >
          <Stack.Screen component={renderNoteScreen} name="NoteScreen" />
          <Stack.Screen component={Orientacao} name="Orientacao" />
          <Stack.Screen component={Report} name="Report" />
          <Stack.Screen component={Myth} name="Myth" />
          <Stack.Screen component={NoteDetail} name="NoteDetail" />
        </Stack.Navigator>
      </NoteProvider>
    </NavigationContainer>
  );
}

export default App;
