import { StyleSheet } from 'react-native-unistyles';

export const styles = StyleSheet.create((theme) => ({
  actions: {
    gap: theme.spacing.md,
  },
  card: {
    gap: {
      phone: theme.spacing.xl,
      tablet: theme.spacing.xxl,
      desktop: theme.spacing.xxl,
    },
    borderRadius: theme.borderRadius.xl,
  },
  content: {
    alignSelf: 'center',
    gap: theme.spacing.xl,
    justifyContent: 'center',
    maxWidth: theme.sizes.contentMaxWidth,
    width: '100%',
  },
  form: {
    gap: theme.spacing.lg,
  },
  header: {
    gap: theme.spacing.sm,
  },
  registerButton: {
    minHeight: theme.sizes.minTouchTarget,
    paddingHorizontal: theme.spacing.sm,
  },
  registerPrompt: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.xxs,
    justifyContent: 'center',
  },
  successMessage: {
    alignItems: 'flex-start',
    backgroundColor: theme.colors.surfaceMuted,
    borderRadius: theme.borderRadius.md,
    flexDirection: 'row',
    gap: theme.spacing.sm,
    padding: theme.spacing.md,
  },
  successText: {
    flex: 1,
  },
}));
