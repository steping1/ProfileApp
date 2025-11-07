import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProfileCard from './components/ProfileCard';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>My Profile App</Text>

        <View style={styles.section}>
          <ProfileCard
            name="Ada Lovelace"
            role="Mathematician"
            imageSource={require('./assets/ada.png')}
          />
          <ProfileCard
            name="Grace Hopper"
            role="Computer Scientist"
            imageSource={require('./assets/grace.png')}
          />
          <ProfileCard
            name="Hedy Lamarr"
            role="Inventor & Actress"
            imageSource={require('./assets/hedy.png')}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f2f5',
  },
  scrollContent: {
    padding: 20,
    paddingBottom: 40,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12,
  },
  section: {
    // sadece gruplama amaçlı; istersen kaldırabilirsin
  },
});
