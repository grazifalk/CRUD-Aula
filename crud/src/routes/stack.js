import { Categories } from "../screens/Categories/index.js";
import { createStackNavigator } from "@react-navigation/stack";
import { CategoryRegister } from "../screens/CategoryRegister/index.js";
import { EditCategory } from "../screens/EditCategory/index.js";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Categories" component={Categories} />
      <Stack.Screen name="CategoryRegister" component={CategoryRegister} />
      <Stack.Screen name="EditCategory" component={EditCategory} />
    </Stack.Navigator>
  );
}
