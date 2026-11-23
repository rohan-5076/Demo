import React from "react";
import { View, Text, Switch, StyleSheet, Platform } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../navigation/theme";

const skills = [
  "Guest Relations",
  "Front Desk PMS",
  "POS Billing",
  "Room Allocations",
  "VIP Services",
  "First Aid Certified",
];

const ProfilePreferences = ({
  dutyStatus,
  onToggleDuty,
  notifications,
  onToggleNotifications,
  biometrics,
  onToggleBiometrics,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionHeader}>PREFERENCES & STATUS</Text>

      <View style={styles.card}>
        {/* Duty Status Toggle */}
        <View style={styles.toggleRow}>
          <View
            style={[
              styles.iconCircle,
              { backgroundColor: dutyStatus ? "#DCFCE7" : "#F1F5F9" },
            ]}
          >
            <Feather
              name="activity"
              size={17}
              color={dutyStatus ? "#16A34A" : "#64748B"}
            />
          </View>

          <View style={styles.toggleText}>
            <View style={styles.labelWithBadge}>
              <Text style={styles.title}>Duty Availability</Text>
              <View
                style={[
                  styles.statusBadge,
                  { backgroundColor: dutyStatus ? "#DCFCE7" : "#F1F5F9" },
                ]}
              >
                <Text
                  style={[
                    styles.statusBadgeText,
                    { color: dutyStatus ? "#15803D" : "#64748B" },
                  ]}
                >
                  {dutyStatus ? "ONLINE" : "OFFLINE"}
                </Text>
              </View>
            </View>
            <Text style={styles.subtitle}>
              Receive live guest requests & tasks
            </Text>
          </View>

          <Switch
            value={dutyStatus}
            onValueChange={onToggleDuty}
            trackColor={{ false: "#CBD5E1", true: "#93C5FD" }}
            thumbColor={dutyStatus ? COLORS.primary : "#F8FAFC"}
            style={Platform.OS === "ios" ? styles.iosSwitch : null}
          />
        </View>

        <View style={styles.divider} />

        {/* Notifications Toggle */}
        <View style={styles.toggleRow}>
          <View style={[styles.iconCircle, { backgroundColor: "#EFF6FF" }]}>
            <Feather name="bell" size={17} color="#2563EB" />
          </View>

          <View style={styles.toggleText}>
            <Text style={styles.title}>Shift Notifications</Text>
            <Text style={styles.subtitle}>Alerts for schedule updates & tasks</Text>
          </View>

          <Switch
            value={notifications}
            onValueChange={onToggleNotifications}
            trackColor={{ false: "#CBD5E1", true: "#93C5FD" }}
            thumbColor={notifications ? COLORS.primary : "#F8FAFC"}
            style={Platform.OS === "ios" ? styles.iosSwitch : null}
          />
        </View>

        <View style={styles.divider} />

        {/* Biometrics Toggle */}
        <View style={styles.toggleRow}>
          <View style={[styles.iconCircle, { backgroundColor: "#F5F3FF" }]}>
            <MaterialCommunityIcons
              name="fingerprint"
              size={19}
              color="#7C3AED"
            />
          </View>

          <View style={styles.toggleText}>
            <Text style={styles.title}>Biometric Unlock</Text>
            <Text style={styles.subtitle}>Quick login with Face ID / Fingerprint</Text>
          </View>

          <Switch
            value={biometrics}
            onValueChange={onToggleBiometrics}
            trackColor={{ false: "#CBD5E1", true: "#93C5FD" }}
            thumbColor={biometrics ? COLORS.primary : "#F8FAFC"}
            style={Platform.OS === "ios" ? styles.iosSwitch : null}
          />
        </View>
      </View>

      {/* Skills & Badges */}
      <View style={styles.skillsCard}>
        <View style={styles.skillsHeader}>
          <Feather name="award" size={15} color="#2563EB" style={{ marginRight: 6 }} />
          <Text style={styles.skillsTitle}>Verified Skills & Certifications</Text>
        </View>
        <View style={styles.chipsContainer}>
          {skills.map((skill, index) => (
            <View key={index} style={styles.chip}>
              <View style={styles.chipDot} />
              <Text style={styles.chipText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

export default ProfilePreferences;

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
    marginBottom: 12,
  },
  toggleRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 12,
  },
  iconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  toggleText: {
    flex: 1,
    marginRight: 8,
  },
  labelWithBadge: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
    color: "#0F172A",
  },
  statusBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 6,
    marginLeft: 6,
  },
  statusBadgeText: {
    fontSize: 9,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 11,
    color: "#64748B",
    marginTop: 2,
  },
  iosSwitch: {
    transform: [{ scaleX: 0.85 }, { scaleY: 0.85 }],
  },
  divider: {
    height: 1,
    backgroundColor: "#F1F5F9",
  },
  skillsCard: {
    backgroundColor: "#FFFFFF",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    padding: 14,
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.04,
    shadowRadius: 6,
    elevation: 2,
  },
  skillsHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  skillsTitle: {
    fontSize: 13,
    fontWeight: "700",
    color: "#1E293B",
  },
  chipsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 6,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  chipDot: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: COLORS.primary,
    marginRight: 6,
  },
  chipText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#334155",
  },
});
