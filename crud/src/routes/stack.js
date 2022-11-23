import { Categories } from "../screens/Categories/index.js";
import { createStackNavigator } from "@react-navigation/stack";
import { CategoryRegister } from "../screens/CategoryRegister/index.js";
import { EditCategory } from "../screens/EditCategory/index.js";
import { createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import colors from "../themes/colors.js";
import { Ionicons } from "@expo/vector-icons";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: {
        backgroundColor: `${colors.secondary}`,
        padding: 5,
      }
    }}
    tabBarOptions={{
      activeTintColor: `${colors.primary}`,
      inactiveTintColor: `${colors.buttomColor}`,
    }}
    >
      <Tab.Screen 
      name="Categories" 
      component={Categories} 
      options={{
        tabBarLabel: "home",
        tabBarIcon: () => (
          <Ionicons name="arrow-back" size={35} color={colors.primary} />
        )
      }}
      />
      
    </Tab.Navigator>
  )
}

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Categories" component={TabRoutes} />
      <Stack.Screen name="CategoryRegister" component={CategoryRegister} />
      <Stack.Screen name="EditCategory" component={EditCategory} />
    </Stack.Navigator>
  );
}
