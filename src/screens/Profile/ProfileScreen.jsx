import React, { useState, useCallback } from "react";
import {
  ScrollView,
  RefreshControl,
  Share,
  StyleSheet,
  View,
} from "react-native";
import { showMessage } from "react-native-flash-message";

import ProfileHeader from "./ProfileHeader";
import ProfileStats from "./ProfileStats";
import ProfileInfoSection from "./ProfileInfoSection";
import ProfilePreferences from "./ProfilePreferences";
import ProfileQuickLinks from "./ProfileQuickLinks";
import EditProfileModal from "./EditProfileModal";
import DigitalIdModal from "./DigitalIdModal";
import { COLORS } from "../../navigation/theme";

const INITIAL_USER = {
  name: "Rohan Jadhav",
  role: "Front Office Executive",
  department: "Front Desk & Hospitality",
  empId: "EMP-8492",
  email: "rohan.jadhav@xpresshotel.com",
  phone: "+91 98765 43210",
  location: "Mumbai Central Hub • Floor 1",
};

function ProfileScreen() {
  const [userData, setUserData] = useState(INITIAL_USER);
  const [dutyStatus, setDutyStatus] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [biometrics, setBiometrics] = useState(true);

  const [refreshing, setRefreshing] = useState(false);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [isDigitalIdModalVisible, setIsDigitalIdModalVisible] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
      showMessage({
        message: "Profile Synced",
        description: "Your staff records and metrics are up to date.",
        type: "success",
        icon: "success",
        duration: 2500,
      });
    }, 1000);
  }, []);

  const handleCopy = (text, customLabel = "Copied to clipboard") => {
    showMessage({
      message: customLabel,
      description: text,
      type: "info",
      icon: "info",
      duration: 2000,
    });
  };

  const handleShare = async () => {
    try {
      await Share.share({
        message: `Xpress Staff Profile: ${userData.name} (${userData.empId})\nRole: ${userData.role}\nDepartment: ${userData.department}\nContact: ${userData.phone}`,
        title: `${userData.name} - Employee Profile`,
      });
    } catch (_error) {
      // User dismissed share dialog
    }
  };

  const handleSaveProfile = (updatedData) => {
    setUserData((prev) => ({
      ...prev,
      ...updatedData,
    }));
    setIsEditModalVisible(false);
    showMessage({
      message: "Profile Updated",
      description: "Changes have been successfully saved to your record.",
      type: "success",
      icon: "success",
      duration: 2500,
    });
  };

  const handleToggleDuty = (val) => {
    setDutyStatus(val);
    showMessage({
      message: val ? "Status: On Duty" : "Status: Off Duty",
      description: val
        ? "You are now active and available for guest requests."
        : "You are marked away from active shifts.",
      type: val ? "success" : "default",
      duration: 2200,
    });
  };

  const handleToggleNotifications = (val) => {
    setNotifications(val);
    showMessage({
      message: val ? "Notifications Enabled" : "Notifications Muted",
      type: "default",
      duration: 1800,
    });
  };

  const handleToggleBiometrics = (val) => {
    setBiometrics(val);
    showMessage({
      message: val ? "Biometric Login Activated" : "Biometric Login Deactivated",
      type: "default",
      duration: 1800,
    });
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={[COLORS.primary]}
            tintColor={COLORS.primary}
          />
        }
      >
        {/* Profile Header & Identity Card */}
        <ProfileHeader
          userData={userData}
          dutyStatus={dutyStatus}
          onEditPress={() => setIsEditModalVisible(true)}
          onDigitalIdPress={() => setIsDigitalIdModalVisible(true)}
          onSharePress={handleShare}
          onCopyId={(id) => handleCopy(id, "Employee ID Copied")}
        />

        {/* Quick Stats & Performance */}
        <ProfileStats />

        {/* Work & Contact Information */}
        <ProfileInfoSection
          userData={userData}
          onCopy={(text, label) => handleCopy(text, label)}
        />

        {/* Preferences, Availability & Badges */}
        <ProfilePreferences
          dutyStatus={dutyStatus}
          onToggleDuty={handleToggleDuty}
          notifications={notifications}
          onToggleNotifications={handleToggleNotifications}
          biometrics={biometrics}
          onToggleBiometrics={handleToggleBiometrics}
        />

        {/* Quick Links, Help & Logout */}
        <ProfileQuickLinks />
      </ScrollView>

      {/* Edit Profile Modal */}
      <EditProfileModal
        visible={isEditModalVisible}
        onClose={() => setIsEditModalVisible(false)}
        initialData={userData}
        onSave={handleSaveProfile}
      />

      {/* Digital ID Card Modal */}
      <DigitalIdModal
        visible={isDigitalIdModalVisible}
        onClose={() => setIsDigitalIdModalVisible(false)}
        userData={userData}
        onCopyId={(id) => handleCopy(id, "Employee ID Copied")}
      />
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  scrollContent: {
    paddingBottom: 24,
  },
});
