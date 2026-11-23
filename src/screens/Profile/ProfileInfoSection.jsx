import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Linking } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

const ProfileInfoSection = ({ userData, onCopy }) => {
  const handleEmailPress = () => {
    if (userData?.email) {
      Linking.openURL(`mailto:${userData.email}`).catch(() => {});
    }
  };

  const handlePhonePress = () => {
    if (userData?.phone) {
      Linking.openURL(`tel:${userData.phone.replace(/[^0-9+]/g, "")}`).catch(() => {});
    }
  };

  const infoItems = [
    {
      id: "email",
      icon: <Feather name="mail" size={17} color="#2563EB" />,
      label: "Work Email",
      value: userData?.email || "rohan.jadhav@xpresshotel.com",
      actionIcon: "copy",
      onAction: () => onCopy(userData?.email || "rohan.jadhav@xpresshotel.com", "Email copied"),
      onPress: handleEmailPress,
    },
    {
      id: "phone",
      icon: <Feather name="phone" size={17} color="#059669" />,
      label: "Mobile Number",
      value: userData?.phone || "+91 98765 43210",
      actionIcon: "copy",
      onAction: () => onCopy(userData?.phone || "+91 98765 43210", "Phone copied"),
      onPress: handlePhonePress,
    },
    {
      id: "dept",
      icon: <Feather name="layers" size={17} color="#7C3AED" />,
      label: "Department & Team",
      value: userData?.department || "Front Desk Operations",
      actionIcon: null,
    },
    {
      id: "manager",
      icon: <MaterialCommunityIcons name="account-tie-outline" size={19} color="#D97706" />,
      label: "Reporting Manager",
      value: "Anjali Sharma (General Manager)",
      actionIcon: null,
    },
    {
      id: "location",
      icon: <Feather name="map-pin" size={17} color="#E11D48" />,
      label: "Assigned Work Location",
      value: userData?.location || "Mumbai Central Hub • Floor 1",
      actionIcon: null,
    },
    {
      id: "joined",
      icon: <Feather name="calendar" size={17} color="#475569" />,
      label: "Date of Joining",
      value: "15 October 2023 (2.5 years)",
      actionIcon: null,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>WORK & CONTACT DETAILS</Text>

      <View style={styles.card}>
        {infoItems.map((item, index) => {
          const isLast = index === infoItems.length - 1;
          return (
            <View key={item.id}>
              <TouchableOpacity
                onPress={item.onPress}
                disabled={!item.onPress}
                activeOpacity={item.onPress ? 0.7 : 1}
                style={styles.itemRow}
              >
                <View style={styles.iconCircle}>{item.icon}</View>

                <View style={styles.textContainer}>
                  <Text style={styles.label}>{item.label}</Text>
                  <Text style={styles.value} numberOfLines={1}>
                    {item.value}
                  </Text>
                </View>

                {item.actionIcon && (
                  <TouchableOpacity
                    onPress={item.onAction}
                    hitSlop={8}
                    style={styles.actionBtn}
                  >
                    <Feather name={item.actionIcon} size={15} color="#94A3B8" />
                  </TouchableOpacity>
                )}
              </TouchableOpacity>

              {!isLast && <View style={styles.divider} />}
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default ProfileInfoSection;

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
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
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
  },
  label: {
    fontSize: 11,
    fontWeight: "600",
    color: "#64748B",
    marginBottom: 2,
  },
  value: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },
  actionBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F8FAFC",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 8,
  },
  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
  },
});
