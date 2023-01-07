import {Image, Pressable, Text, View} from 'react-native';
import React from 'react';
import styles from './styles';

type Props = {
  name: string;
  url: string;
  onPress?: () => void;
};

export default function PokemonCard({name, url, onPress}: Props) {
  return (
    <Pressable onPress={onPress} style={styles.list}>
      <View style={styles.imageContainer}>
        <Image source={{uri: url}} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </Pressable>
  );
}
