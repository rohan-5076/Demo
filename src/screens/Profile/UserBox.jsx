import { Text, View, StyleSheet } from "react-native";
import iconSet from "@expo/vector-icons/build/Fontisto";
import { Feather } from "@expo/vector-icons";

const Card = () => {
  return (
    <View>
      <Text>Card</Text>
    </View>
  );
};

const UserBox = () => {
  return (
    <>
      <View className="p-5 flex-row gap-8 ">
        <Text className="text-white" style={styles.symbol}>
          <Feather name="user" size={24} color="black" />
        </Text>
        <View className="justify-center">
          <Text className="text-xl font-bold">Rohan Jadhav</Text>
          <Text className="text-sm">Front Office Executive</Text>
          <Text className="font-bold">Xpress Hotel</Text>
        </View>
      </View>
      <View className="flex-row gap-5 p-4 bg-blue-100">
        <View className="flex-1 items-center rounded-xl bg-blue-50 p-4">
          <Feather name="user" size={24} color="black" />
          <Text>User ID</Text>
          <Text>RH001</Text>
        </View>
        <View className="flex-1 items-center rounded-xl bg-blue-50 p-4">
          <Feather name="user" size={24} color="black" />
          <Text>User ID</Text>
          <Text>RH001</Text>
        </View>
        <View className="flex-1 items-center rounded-xl bg-blue-50 p-4">
          <Feather name="user" size={24} color="black" />
          <Text>User ID</Text>
          <Text>RH001</Text>
        </View>
      </View>

      <View>
        <Card />

      </View>
    </>
  );
};

export default UserBox;

const styles = StyleSheet.create({
  symbol: {
    fontWeight: "bold",
    backgroundColor: "lightblue",
    padding: 10,
    fontSize: 20,
    height: 85,
    width: 85,
    borderRadius: 50,
    textAlignVertical: "center",
    textAlign: "center",
  },
  infoCard: {
    backgroundColor: "lightgreen",
  },
});
