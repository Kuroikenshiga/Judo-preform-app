import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import Home from "./layouts/screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import { Text, PlatformPressable } from "@react-navigation/elements"
import BottomTabNav from "./layouts/navigation_layout/BottomTabNavigation"

const BottomTab = createBottomTabNavigator();

export default function App() {
  return (<NavigationContainer>
    <BottomTab.Navigator
      initialRouteName="home"
      screenOptions={({ route }) => {
        tabBarIcon: (focused, color, size) => {
          let iconName;
          let rn = route.name;

          if (rn === "home") {
            iconName = focused ? "home" : "home-out-line"
          }

        }
      }}
      tabBar={(props)=> <BottomTabNav {...props}/>}
    >
      <BottomTab.Screen name="home" component={Home} />
    </BottomTab.Navigator>
  </NavigationContainer>)
}


