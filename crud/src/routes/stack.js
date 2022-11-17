import { Categories } from "../screens/Categories/index.js";
import { createStackNavigator } from "@react-navigation/stack";
import { CategoryRegister } from "../screens/CategoryRegister/index.js";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShow: false,
      }}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="CategoryRegister" component={CategoryRegister} />
    </Stack.Navigator>
  );
}
