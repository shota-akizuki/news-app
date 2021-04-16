import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FontAwesome } from '@expo/vector-icons';

const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
});

export default ClipButton = ({ enabled, onPress }) => {
  const name = enabled ? 'bookmark' : 'bookmark-o';
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome name={name} size={40} color="gray" />
    </TouchableOpacity>
  );
};
