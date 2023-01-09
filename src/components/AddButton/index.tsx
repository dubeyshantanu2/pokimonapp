import {Pressable, Text} from 'react-native';
import React from 'react';
import styles from './styles';
type Props = {
  label: string;
  onPress: () => void;
};

function AddButton(props: Props) {
  const {label, onPress} = props;
  return (
    <Pressable onPress={onPress} testID="add-button">
      <Text style={styles.container}>{label}</Text>
    </Pressable>
  );
}

export default AddButton;
