import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  ROUTE_DOCUMENTS,
  ROUTE_HELP,
  ROUTE_SETTINGS,
} from "../../navigation/RoutePathConstant";

const ProfileQuickLinks = () => {
  const navigation = useNavigation();

  const handleLogout = () => {
    Alert.alert(
      "Log Out",
      "Are you sure you want to log out of your employee account?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Log Out",
          style: "destructive",
          onPress: () => {
            // Can be expanded to auth store clearing
          },
        },
      ]
    );
  };

  const menuItems = [
    {
      id: "settings",
      icon: <Ionicons name="settings-outline" size={19} color="#2563EB" />,
      label: "Account & App Settings",
      sub: "Security, notifications & preferences",
      onPress: () => navigation.navigate(ROUTE_SETTINGS),
    },
    {
      id: "docs",
      icon: <Feather name="file-text" size={18} color="#059669" />,
      label: "My Documents & Contracts",
      sub: "ID proofs, offer letters & certificates",
      onPress: () => navigation.navigate(ROUTE_DOCUMENTS),
    },
    {
      id: "help",
      icon: <Feather name="help-circle" size={18} color="#D97706" />,
      label: "Help & Support Center",
      sub: "FAQs, HR contact & shift desk",
      onPress: () => navigation.navigate(ROUTE_HELP),
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>QUICK SHORTCUTS</Text>

      <View style={styles.card}>
        {menuItems.map((item, index) => {
          const isLast = index === menuItems.length - 1;
          return (
            <View key={item.id}>
              <TouchableOpacity
                onPress={item.onPress}
                activeOpacity={0.7}
                style={styles.menuRow}
              >
                <View style={styles.iconCircle}>{item.icon}</View>

                <View style={styles.textContainer}>
                  <Text style={styles.title}>{item.label}</Text>
                  <Text style={styles.sub}>{item.sub}</Text>
                </View>

                <Feather name="chevron-right" size={18} color="#94A3B8" />
              </TouchableOpacity>

              {!isLast && <View style={styles.divider} />}
            </View>
          );
        })}
      </View>

      {/* Logout button */}
      <TouchableOpacity
        onPress={handleLogout}
        activeOpacity={0.75}
        style={styles.logoutBtn}
      >
        <View style={styles.logoutIcon}>
          <MaterialCommunityIcons name="logout-variant" size={18} color="#EF4444" />
        </View>
        <Text style={styles.logoutText}>Log Out Account</Text>
      </TouchableOpacity>

      {/* App Version Info */}
      <View style={styles.versionContainer}>
        <Text style={styles.versionText}>Xpress Mobile App • Version 1.0.0 (Build 58)</Text>
        <Text style={styles.encryptedText}>
          <Feather name="lock" size={11} color="#94A3B8" /> End-to-end encrypted staff portal
        </Text>
      </View>
    </View>
  );
};

export default ProfileQuickLinks;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 32,
  },
  sectionHeader: {
    fontSize: 11,
    fontWeight: "700",
    color: "#94A3B8",
    letterSpacing: 0.8,
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 16,
    paddingVertical: 4,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 8,
    elevation: 2,
    marginBottom: 14,
  },
  menuRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 13,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    marginRight: 8,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },
  sub: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 2,
  },
  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
  },
  logoutBtn: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FEF2F2",
    borderWidth: 1,
    borderColor: "#FEE2E2",
    borderRadius: 16,
    paddingVertical: 13,
    marginBottom: 18,
  },
  logoutIcon: {
    marginRight: 8,
  },
  logoutText: {
    fontSize: 14,
    fontWeight: "700",
    color: "#EF4444",
  },
  versionContainer: {
    alignItems: "center",
    paddingBottom: 8,
  },
  versionText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#64748B",
  },
  encryptedText: {
    fontSize: 11,
    color: "#94A3B8",
    marginTop: 3,
  },
});
