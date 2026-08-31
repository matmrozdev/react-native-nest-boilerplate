import { View } from 'react-native';

import { useAuth } from '@/providers/AuthProvider';
import { Card } from '@/ui/components/Card';
import { Screen } from '@/ui/components/Screen';
import { Text } from '@/ui/components/Text';

import { styles } from './HomeScreen.styles';

export const HomeScreen = () => {
  const { user } = useAuth();

  return (
    <Screen contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text variant="heading">Welcome</Text>
        <Text tone="muted">Your authenticated application is ready.</Text>
      </View>
      <Card padding="large" style={styles.card} variant="elevated">
        <Text variant="title">Starter screen</Text>
        <Text tone="muted">
          Replace this feature with your product domain while keeping the
          authentication, API, theme, and component foundations.
        </Text>
        {user ? <Text variant="label">Signed in as {user.email}</Text> : null}
      </Card>
    </Screen>
  );
};
