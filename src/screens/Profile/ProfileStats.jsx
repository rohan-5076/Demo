import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

const stats = [
  {
    id: "tasks",
    label: "Completed",
    sub: "Tasks & Shifts",
    value: "148",
    icon: (
      <MaterialCommunityIcons
        name="clipboard-check-outline"
        size={20}
        color="#2563EB"
      />
    ),
    bgColor: "#EFF6FF",
    borderColor: "#DBEAFE",
  },
  {
    id: "rating",
    label: "Rating",
    sub: "Guest Score",
    value: "4.92 ★",
    icon: <Ionicons name="star" size={18} color="#D97706" />,
    bgColor: "#FEF3C7",
    borderColor: "#FDE68A",
  },
  {
    id: "attendance",
    label: "Attendance",
    sub: "On-time rate",
    value: "99.4%",
    icon: <Feather name="trending-up" size={18} color="#059669" />,
    bgColor: "#D1FAE5",
    borderColor: "#A7F3D0",
  },
  {
    id: "tenure",
    label: "Experience",
    sub: "At Xpress",
    value: "2.5 Yrs",
    icon: <Feather name="award" size={18} color="#7C3AED" />,
    bgColor: "#EDE9FE",
    borderColor: "#DDD6FE",
  },
];

const ProfileStats = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>PERFORMANCE & METRICS</Text>
      <View style={styles.grid}>
        {stats.map((item) => (
          <View
            key={item.id}
            style={[
              styles.card,
              { backgroundColor: "#FFFFFF", borderColor: item.borderColor },
            ]}
          >
            <View style={[styles.iconWrap, { backgroundColor: item.bgColor }]}>
              {item.icon}
            </View>
            <Text style={styles.valueText}>{item.value}</Text>
            <Text style={styles.labelText}>{item.label}</Text>
            <Text style={styles.subText}>{item.sub}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ProfileStats;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: "700",
    color: "#94A3B8",
    letterSpacing: 0.8,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  card: {
    flex: 1,
    minWidth: "47%",
    padding: 14,
    borderRadius: 16,
    borderWidth: 1,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  iconWrap: {
    width: 36,
    height: 36,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  valueText: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
  },
  labelText: {
    fontSize: 13,
    fontWeight: "700",
    color: "#334155",
    marginTop: 2,
  },
  subText: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 1,
  },
});
