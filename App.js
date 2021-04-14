import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, View } from 'react-native';
import { ListItem } from './components/ListItem';
import articles from './dummies/articles.json';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //flexDirectionに指定した垂直方向に要素を並べる（この場合はrow）
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
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
          />
        )}
        keyExtractor={(item) => item.title}
      />
    </SafeAreaView>
  );
}
