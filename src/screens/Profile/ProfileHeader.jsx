import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../navigation/theme";

const ProfileHeader = ({
  userData,
  onEditPress,
  onDigitalIdPress,
  onSharePress,
  onCopyId,
  dutyStatus,
}) => {
  const initials = userData?.name
    ? userData.name
        .split(" ")
        .map((n) => n[0])
        .slice(0, 2)
        .join("")
    : "RJ";

  return (
    <View style={styles.container}>
      {/* Curved Blue Backdrop Banner */}
      <View style={styles.banner}>
        <View style={styles.bannerDecorCircle1} />
        <View style={styles.bannerDecorCircle2} />
      </View>

      {/* Main Profile Card Overlay */}
      <View style={styles.card}>
        {/* Avatar & Badges Row */}
        <View style={styles.avatarWrapper}>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.avatarText}>{initials}</Text>
            </View>

            {/* Online / Duty status dot */}
            <View
              style={[
                styles.dutyDot,
                { backgroundColor: dutyStatus ? "#10B981" : "#94A3B8" },
              ]}
            />

            {/* Camera / Edit icon badge */}
            <TouchableOpacity
              onPress={onEditPress}
              hitSlop={8}
              activeOpacity={0.8}
              style={styles.cameraBadge}
            >
              <Feather name="camera" size={13} color="#FFFFFF" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Identity Details */}
        <View style={styles.identityContainer}>
          <View style={styles.nameRow}>
            <Text style={styles.nameText}>{userData?.name || "Rohan Jadhav"}</Text>
            <MaterialCommunityIcons
              name="check-decagram"
              size={19}
              color="#2563EB"
              style={styles.verifiedIcon}
            />
          </View>

          <Text style={styles.roleText}>
            {userData?.role || "Front Office Executive"}
          </Text>

          {/* Company & Department Tag */}
          <View style={styles.companyRow}>
            <MaterialCommunityIcons
              name="office-building"
              size={15}
              color="#64748B"
              style={{ marginRight: 4 }}
            />
            <Text style={styles.companyText}>
              Xpress Hotel & Resorts • {userData?.department || "Front Desk"}
            </Text>
          </View>

          {/* Employee ID & Duty Status Pills */}
          <View style={styles.pillsRow}>
            <TouchableOpacity
              onPress={() => onCopyId(userData?.empId || "EMP-8492")}
              activeOpacity={0.7}
              style={styles.empIdPill}
            >
              <Feather name="tag" size={12} color="#2563EB" style={{ marginRight: 5 }} />
              <Text style={styles.empIdText}>{userData?.empId || "EMP-8492"}</Text>
              <Feather name="copy" size={11} color="#60A5FA" style={{ marginLeft: 5 }} />
            </TouchableOpacity>

            <View
              style={[
                styles.dutyPill,
                { backgroundColor: dutyStatus ? "#DCFCE7" : "#F1F5F9" },
              ]}
            >
              <View
                style={[
                  styles.dutyIndicator,
                  { backgroundColor: dutyStatus ? "#16A34A" : "#94A3B8" },
                ]}
              />
              <Text
                style={[
                  styles.dutyText,
                  { color: dutyStatus ? "#15803D" : "#64748B" },
                ]}
              >
                {dutyStatus ? "On Duty" : "Off Duty"}
              </Text>
            </View>
          </View>

          {/* Action Buttons Row */}
          <View style={styles.actionsRow}>
            <TouchableOpacity
              onPress={onEditPress}
              activeOpacity={0.8}
              style={styles.editBtn}
            >
              <Feather name="edit-3" size={15} color="#FFFFFF" style={{ marginRight: 6 }} />
              <Text style={styles.editBtnText}>Edit Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onDigitalIdPress}
              activeOpacity={0.8}
              style={styles.idPassBtn}
            >
              <MaterialCommunityIcons
                name="card-account-details-outline"
                size={17}
                color="#2563EB"
                style={{ marginRight: 6 }}
              />
              <Text style={styles.idPassBtnText}>Digital ID</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={onSharePress}
              activeOpacity={0.8}
              style={styles.shareIconBtn}
            >
              <Feather name="share-2" size={16} color="#475569" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProfileHeader;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    paddingHorizontal: 16,
    paddingTop: 8,
    marginBottom: 16,
  },
  banner: {
    height: 75,
    backgroundColor: COLORS.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    overflow: "hidden",
    position: "relative",
  },
  bannerDecorCircle1: {
    position: "absolute",
    right: -20,
    top: -20,
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: "rgba(255, 255, 255, 0.12)",
  },
  bannerDecorCircle2: {
    position: "absolute",
    left: 40,
    bottom: -30,
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "rgba(255, 255, 255, 0.08)",
  },
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 22,
    marginTop: -42,
    marginHorizontal: 4,
    paddingHorizontal: 16,
    paddingBottom: 18,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    shadowColor: "#0F172A",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
    elevation: 4,
    alignItems: "center",
  },
  avatarWrapper: {
    marginTop: -42,
    marginBottom: 8,
  },
  avatarContainer: {
    position: "relative",
  },
  avatar: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: "#1D4ED8",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 4,
    borderColor: "#FFFFFF",
    shadowColor: "#1D4ED8",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 6,
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    letterSpacing: 1,
  },
  dutyDot: {
    position: "absolute",
    top: 4,
    right: 4,
    width: 14,
    height: 14,
    borderRadius: 7,
    borderWidth: 2.5,
    borderColor: "#FFFFFF",
  },
  cameraBadge: {
    position: "absolute",
    bottom: 2,
    right: 0,
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: COLORS.primary,
    borderWidth: 2,
    borderColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
  identityContainer: {
    alignItems: "center",
    width: "100%",
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },
  nameText: {
    fontSize: 21,
    fontWeight: "800",
    color: "#0F172A",
  },
  verifiedIcon: {
    marginLeft: 6,
  },
  roleText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#475569",
    marginTop: 2,
  },
  companyRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  companyText: {
    fontSize: 12,
    color: "#64748B",
    fontWeight: "500",
  },
  pillsRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 12,
  },
  empIdPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#DBEAFE",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  empIdText: {
    fontSize: 12,
    fontWeight: "700",
    color: "#2563EB",
  },
  dutyPill: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  dutyIndicator: {
    width: 7,
    height: 7,
    borderRadius: 3.5,
    marginRight: 6,
  },
  dutyText: {
    fontSize: 12,
    fontWeight: "700",
  },
  actionsRow: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    gap: 8,
    marginTop: 16,
    paddingTop: 14,
    borderTopWidth: 1,
    borderTopColor: "#F1F5F9",
  },
  editBtn: {
    flex: 1.2,
    height: 42,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  editBtnText: {
    color: "#FFFFFF",
    fontSize: 13,
    fontWeight: "700",
  },
  idPassBtn: {
    flex: 1,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#EFF6FF",
    borderWidth: 1,
    borderColor: "#BFDBFE",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  idPassBtnText: {
    color: "#2563EB",
    fontSize: 13,
    fontWeight: "700",
  },
  shareIconBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: "#F8FAFC",
    borderWidth: 1,
    borderColor: "#E2E8F0",
    alignItems: "center",
    justifyContent: "center",
  },
});
