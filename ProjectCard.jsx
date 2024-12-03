import { Text, View, Image, StyleSheet } from 'react-native';

export const ProjectCard = ({ name, image }) => {
  return (
    <View>
      <Image source={image} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 150,
    aspectRatio: 16 / 9,
    borderRadius: 10,
  },

  name: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'dimgray',
    marginTop: 10,
  },
});
