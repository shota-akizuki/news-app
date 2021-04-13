import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //flexDirectionに指定した垂直方向に要素を並べる（この場合はrow）
    alignItems: 'center',
    //flexDirectionに指定した同じ軸方向に要素を並べる（この場合はcolumn）
    justifyContent: 'center',
  },
  itemContainer: {
    height: 100,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    flexDirection: 'row',
  },
  leftContainer: {
    width: 100,
  },
  rightContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  text: {
    fontSize: 16,
  },
  subText: { fontSize: 12, color: 'gray' },
});

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <View style={styles.leftContainer}>
          <Image
            style={styles.tinyLogo}
            source={{
              uri: 'https://picsum.photos/id/10/200/200',
            }}
          />
        </View>
        <View style={styles.rightContainer}>
          <Text numberOfLines={3} style={styles.text}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in v oluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Text>
          <Text style={styles.subText}>ReactNews</Text>
        </View>
      </View>
    </View>
  );
}
