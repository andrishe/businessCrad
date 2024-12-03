import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Button,
  Linking,
} from 'react-native';
import { FontAwesome6 } from '@expo/vector-icons';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { ProjectCard } from './ProjectCard';

export default function App() {
  const links = {
    github: 'andrishe',
    linkedin: 'Simacreation',
    email: 'simacreation@gmail.com',
  };

  console.log(links);
  const onContactMe = () => {
    Linking.openURL('mailto:simacreationweb@gmail.com');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['bottom']}>
        <ScrollView>
          <View style={styles.container}>
            <Image
              source={require('./assets/amico.png')}
              style={{
                width: '100%',
                height: 200,
              }}
              resizeMode="cover"
            />

            <Image
              source={require('./assets/sima.png')}
              style={{
                width: 150,
                height: 150,
                borderRadius: 150,
                borderWidth: 5,
                borderColor: '#cb61c8',
                backgroundColor: 'white',
                marginTop: -75,
              }}
            />
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>
              Sima Mobile{' '}
            </Text>
            <Text>Founder of Sima Creation Mobile</Text>
            <View style={styles.icons}>
              {links.github && (
                <FontAwesome6 name="github" size={24} color="black" />
              )}
              {links.linkedin && (
                <FontAwesome6 name="linkedin" size={24} color="black" />
              )}
              {links.email && (
                <FontAwesome6 name="at" size={24} color="black" />
              )}
            </View>

            <Button title="Contact Me" onPress={onContactMe} />
            <Text style={{ padding: 10, fontSize: 16 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginTop: 20 }}>
              Projects
            </Text>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ gap: 10, padding: 10 }}
            >
              <ProjectCard
                name="Apple Crad"
                image={require('./assets/projects/project1.jpeg')}
              />
              <ProjectCard
                name="Trello"
                image={require('./assets/projects/project2.jpeg')}
              />
              <ProjectCard
                name="Flappy bird"
                image={require('./assets/projects/project3.jpeg')}
              />
              <ProjectCard
                name="Todo app"
                image={require('./assets/projects/project4.jpeg')}
              />
            </ScrollView>

            <StatusBar style="black" />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icons: {
    flexDirection: 'row',
    marginVertical: 10,
    gap: 10,
  },
});
