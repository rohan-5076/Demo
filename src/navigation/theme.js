import { DefaultTheme } from "@react-navigation/native";

export const COLORS = {
  primary: "#2563EB",
  primaryDark: "#1D4ED8",
  background: "#F8FAFC",
  card: "#FFFFFF",
  text: "#0F172A",
  textMuted: "#94A3B8",
  border: "#E2E8F0",
  danger: "#EF4444",
  white: "#FFFFFF",
};

export const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    background: COLORS.background,
    card: COLORS.card,
    text: COLORS.text,
    border: COLORS.border,
    notification: COLORS.danger,
  },
};
