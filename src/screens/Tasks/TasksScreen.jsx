import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { ROUTE_TASK1, ROUTE_TASK2, ROUTE_TASK3 } from "../../navigation/RoutePathConstant";
import { useNavigation } from "@react-navigation/native";

const TasksScreen = () => {

      const Navigation = useNavigation();
    
  const TasksList = [
    {
      name: "Task 1",
      icon: "person-outline",
      desc: "Name, email, and account details",
      route: ROUTE_TASK1,
  
    },
    {
      name: "Task 2",
        route: ROUTE_TASK2,
    },
    {
        name: "Task 3",
        route: ROUTE_TASK3,
    }
  ];

  return (
    <>
      <View className='m-5 '>
        <ScrollView>

        {TasksList.map((task, index) => (
            <TouchableOpacity
            className="mb-3 flex-row items-center rounded-xl border border-gray-200 bg-white p-5"
            onPress={() => Navigation.navigate(task.route)}
            key={index}
            >
            <Text>
              {index + 1} . {task.name}
            </Text>
          </TouchableOpacity>
        ))}
        </ScrollView>
      </View>
    </>
  );
};
export default TasksScreen;
