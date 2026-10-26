import { DrawerActions } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

import { COLORS } from "../../navigation/theme";
import { ROUTE_MAIN_TABS, ROUTE_PROFILE } from "../../navigation/RoutePathConstant";


function Header({ navigation, route, options, back }) {
  const insets = useSafeAreaInsets();
  const title = options.title ?? route.name;

  const handleLeftPress = () => {
    if (back) {
      navigation.goBack();
    } else {
      navigation.dispatch(DrawerActions.toggleDrawer());
    }
  };

  const openProfile = () => {
    navigation.navigate(ROUTE_MAIN_TABS, { screen: ROUTE_PROFILE });
  };

  return (
    <View style={[style.header, { paddingTop: insets.top + 8 }]}>
      <Pressable
        onPress={handleLeftPress}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel={back ? "Go back" : "Open menu"}
        style={({ pressed }) => [style.iconButton, pressed && style.pressed]}
      >
        <Feather name={back ? "arrow-left" : "menu"} size={22} color={COLORS.white} />
      </Pressable>

      <Text numberOfLines={1} style={style.title}>
        {title}
      </Text>

      <Pressable
        onPress={openProfile}
        hitSlop={8}
        accessibilityRole="button"
        accessibilityLabel="Open profile"
        style={({ pressed }) => [style.avatar, pressed && style.pressed]}
      >
        <Feather name="user" size={20} color={COLORS.primary} />
      </Pressable>
    </View>
  );
}

export default Header;

const style = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingBottom: 14,
    backgroundColor: COLORS.primary,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.15)",
  },
  title: {
    flex: 1,
    marginHorizontal: 12,
    color: COLORS.white,
    fontSize: 20,
    fontWeight: "700",
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: COLORS.white,
  },
  pressed: {
    opacity: 0.7,
  },
});
