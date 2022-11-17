import { Categories } from "../screens/Categories";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export function StackRoutes() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShow: false,
      }}
    >
      <Stack.Screen name="Categories" component={Categories} />
    </Stack.Navigator>
  );
}
