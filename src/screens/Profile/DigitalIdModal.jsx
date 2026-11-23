import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { COLORS } from "../../navigation/theme";

const DigitalIdModal = ({ visible, onClose, userData, onCopyId }) => {
  const empId = userData?.empId || "EMP-8492";

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={onClose}
          style={styles.backdrop}
        />

        <View style={styles.container}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.scrollContent}
          >
            {/* Modal Top Bar */}
            <View style={styles.topBar}>
              <View style={styles.badgeIndicator}>
                <Feather name="shield" size={14} color="#2563EB" />
                <Text style={styles.badgeIndicatorText}>VERIFIED CREDENTIAL</Text>
              </View>

              <TouchableOpacity
                onPress={onClose}
                hitSlop={8}
                style={styles.closeBtn}
              >
                <Feather name="x" size={18} color="#64748B" />
              </TouchableOpacity>
            </View>

            {/* The Badge Card */}
            <View style={styles.badgeCard}>
              {/* Lanyard Hole */}
              <View style={styles.lanyardHole} />

              {/* Badge Header */}
              <View style={styles.badgeHeader}>
                <View style={styles.brandRow}>
                  <View style={styles.brandLogo}>
                    <Text style={styles.brandLogoText}>XP</Text>
                  </View>
                  <View>
                    <Text style={styles.brandTitle}>XPRESS HOTEL & RESORTS</Text>
                    <Text style={styles.brandSubtitle}>OFFICIAL STAFF IDENTIFICATION</Text>
                  </View>
                </View>
                <MaterialCommunityIcons name="nfc" size={24} color="#93C5FD" />
              </View>

              {/* Hologram Ribbon */}
              <View style={styles.hologramRibbon}>
                <Text style={styles.hologramText}>AUTHENTIC PASS • SECURE CHIP ENABLED</Text>
              </View>

              {/* Avatar & Main Info */}
              <View style={styles.avatarSection}>
                <View style={styles.avatarBorder}>
                  <View style={styles.avatarInner}>
                    <Text style={styles.avatarText}>
                      {userData?.name
                        ? userData.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")
                        : "RJ"}
                    </Text>
                  </View>
                </View>

                <Text style={styles.empName}>{userData?.name || "Rohan Jadhav"}</Text>
                <Text style={styles.empRole}>{userData?.role || "Front Office Executive"}</Text>

                <View style={styles.statusPill}>
                  <View style={styles.statusDot} />
                  <Text style={styles.statusPillText}>ACTIVE EMPLOYEE</Text>
                </View>
              </View>

              {/* Details Grid */}
              <View style={styles.detailsGrid}>
                <View style={styles.detailBox}>
                  <Text style={styles.detailLabel}>EMPLOYEE ID</Text>
                  <Text style={styles.detailValueBold}>{empId}</Text>
                </View>

                <View style={styles.detailBox}>
                  <Text style={styles.detailLabel}>DEPARTMENT</Text>
                  <Text style={styles.detailValue}>
                    {userData?.department || "Front Desk"}
                  </Text>
                </View>

                <View style={styles.detailBox}>
                  <Text style={styles.detailLabel}>ISSUED DATE</Text>
                  <Text style={styles.detailValue}>15 OCT 2023</Text>
                </View>

                <View style={styles.detailBox}>
                  <Text style={styles.detailLabel}>VALID THRU</Text>
                  <Text style={styles.detailValue}>31 DEC 2027</Text>
                </View>
              </View>

              {/* QR Code and Barcode Visual Mockup */}
              <View style={styles.codeContainer}>
                {/* Simulated QR Code box */}
                <View style={styles.qrBox}>
                  <View style={styles.qrInner}>
                    <View style={styles.qrCornerTL} />
                    <View style={styles.qrCornerTR} />
                    <View style={styles.qrCornerBL} />
                    <View style={styles.qrPatternGrid}>
                      <View style={styles.qrBit} />
                      <View style={[styles.qrBit, { opacity: 0 }]} />
                      <View style={styles.qrBit} />
                      <View style={styles.qrBit} />
                      <View style={[styles.qrBit, { opacity: 0 }]} />
                      <View style={styles.qrBit} />
                      <View style={styles.qrBit} />
                      <View style={[styles.qrBit, { opacity: 0 }]} />
                      <View style={styles.qrBit} />
                    </View>
                  </View>
                </View>

                {/* Simulated Barcode */}
                <View style={styles.barcodeBox}>
                  <View style={styles.barcodeBars}>
                    {[3, 1, 4, 1, 2, 4, 1, 3, 2, 1, 4, 2, 1, 3, 2, 4, 1, 2].map((w, i) => (
                      <View
                        key={i}
                        style={{
                          width: w,
                          height: 38,
                          backgroundColor: "#1E293B",
                          marginRight: 2,
                        }}
                      />
                    ))}
                  </View>
                  <Text style={styles.barcodeText}>* {empId} *</Text>
                </View>
              </View>
            </View>

            {/* Actions */}
            <View style={styles.actionRow}>
              <TouchableOpacity
                onPress={() => onCopyId(empId)}
                activeOpacity={0.8}
                style={styles.copyBtn}
              >
                <Feather name="copy" size={17} color="#FFFFFF" style={{ marginRight: 8 }} />
                <Text style={styles.copyBtnText}>Copy ID Code</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default DigitalIdModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  backdrop: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(15, 23, 42, 0.7)",
  },
  container: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#FFFFFF",
    borderRadius: 24,
    padding: 18,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 20,
    elevation: 20,
    maxHeight: "92%",
  },
  scrollContent: {
    paddingBottom: 4,
  },
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 14,
  },
  badgeIndicator: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#EFF6FF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 12,
  },
  badgeIndicatorText: {
    fontSize: 11,
    fontWeight: "700",
    color: "#2563EB",
    marginLeft: 5,
    letterSpacing: 0.5,
  },
  closeBtn: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#F1F5F9",
    alignItems: "center",
    justifyContent: "center",
  },
  badgeCard: {
    backgroundColor: "#F8FAFC",
    borderRadius: 20,
    borderWidth: 1.5,
    borderColor: "#CBD5E1",
    overflow: "hidden",
    alignItems: "center",
    paddingBottom: 16,
  },
  lanyardHole: {
    width: 38,
    height: 9,
    borderRadius: 5,
    backgroundColor: "#CBD5E1",
    marginTop: 10,
    marginBottom: 8,
  },
  badgeHeader: {
    width: "100%",
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  brandRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  brandLogo: {
    width: 32,
    height: 32,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  brandLogoText: {
    color: COLORS.primary,
    fontWeight: "900",
    fontSize: 14,
  },
  brandTitle: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
  brandSubtitle: {
    color: "#BFDBFE",
    fontSize: 9,
    fontWeight: "600",
  },
  hologramRibbon: {
    width: "100%",
    backgroundColor: "#1E293B",
    paddingVertical: 4,
    alignItems: "center",
  },
  hologramText: {
    color: "#94A3B8",
    fontSize: 9,
    fontWeight: "700",
    letterSpacing: 1,
  },
  avatarSection: {
    alignItems: "center",
    marginTop: 16,
    paddingHorizontal: 16,
  },
  avatarBorder: {
    width: 84,
    height: 84,
    borderRadius: 42,
    borderWidth: 3,
    borderColor: COLORS.primary,
    padding: 3,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  avatarInner: {
    width: "100%",
    height: "100%",
    borderRadius: 40,
    backgroundColor: "#2563EB",
    alignItems: "center",
    justifyContent: "center",
  },
  avatarText: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
  },
  empName: {
    fontSize: 18,
    fontWeight: "800",
    color: "#0F172A",
    marginTop: 10,
  },
  empRole: {
    fontSize: 13,
    fontWeight: "600",
    color: "#475569",
    marginTop: 2,
  },
  statusPill: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DCFCE7",
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
    marginTop: 8,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#16A34A",
    marginRight: 6,
  },
  statusPillText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#15803D",
    letterSpacing: 0.5,
  },
  detailsGrid: {
    width: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    borderWidth: 1,
    borderColor: "#E2E8F0",
    marginTop: 16,
    padding: 10,
  },
  detailBox: {
    width: "50%",
    paddingVertical: 6,
    paddingHorizontal: 6,
  },
  detailLabel: {
    fontSize: 10,
    fontWeight: "700",
    color: "#64748B",
    marginBottom: 2,
    letterSpacing: 0.3,
  },
  detailValueBold: {
    fontSize: 13,
    fontWeight: "800",
    color: "#2563EB",
  },
  detailValue: {
    fontSize: 12,
    fontWeight: "600",
    color: "#0F172A",
  },
  codeContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
    marginTop: 16,
    paddingHorizontal: 16,
  },
  qrBox: {
    width: 60,
    height: 60,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#CBD5E1",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  qrInner: {
    width: "100%",
    height: "100%",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
  },
  qrCornerTL: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 14,
    height: 14,
    borderWidth: 2,
    borderColor: "#0F172A",
    backgroundColor: "#FFFFFF",
  },
  qrCornerTR: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 14,
    height: 14,
    borderWidth: 2,
    borderColor: "#0F172A",
    backgroundColor: "#FFFFFF",
  },
  qrCornerBL: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: 14,
    height: 14,
    borderWidth: 2,
    borderColor: "#0F172A",
    backgroundColor: "#FFFFFF",
  },
  qrPatternGrid: {
    width: 22,
    height: 22,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  qrBit: {
    width: 5,
    height: 5,
    backgroundColor: "#0F172A",
    borderRadius: 1,
  },
  barcodeBox: {
    alignItems: "center",
  },
  barcodeBars: {
    flexDirection: "row",
    alignItems: "center",
  },
  barcodeText: {
    fontSize: 10,
    fontWeight: "700",
    color: "#475569",
    marginTop: 3,
    letterSpacing: 2,
  },
  actionRow: {
    marginTop: 16,
  },
  copyBtn: {
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 13,
    borderRadius: 14,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 3,
  },
  copyBtnText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
});
