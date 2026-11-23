import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Header from "../../components/common/Header";
import { ROUTE_TASK1, ROUTE_TASK2, ROUTE_TASK3, ROUTE_TASKS_HOME } from "../RoutePathConstant";
import Task1 from "../../screens/Tasks/Task1";
import TasksScreen from "../../screens/Tasks/TasksScreen";
import Task2 from "../../screens/Tasks/Task2";
import Task3 from "../../screens/Tasks/Task3";

const Stack = createNativeStackNavigator();
export const TaskStackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={ROUTE_TASKS_HOME}
      screenOptions={{
        header: (props) => <Header {...props} />,
        animation: "slide_from_right",
      }}
    >
      <Stack.Screen
        name={ROUTE_TASKS_HOME}
        component={TasksScreen}
        options={{ title: "Tasks" }}
      />
      <Stack.Screen
        name={ROUTE_TASK1}
        component={Task1}
        options={{ title: "Task 1" }}
      />
      <Stack.Screen
        name={ROUTE_TASK2}
        component={Task2}
        options={{ title: "Task 2" }}
      />
      <Stack.Screen 
      name={ROUTE_TASK3}
      component={Task3}
      options={{title:"Task 3"}}
      />
    </Stack.Navigator>
  );
};
