import React, { useState, useEffect } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import { ListItem } from '../components/ListItem';
import Constants from 'expo-constants';
import axios from 'axios';
import Loading from '../components/Loading';

const url = `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${Constants.manifest.extra.newsApiKey}`;

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

export default HomeScreen = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetchArticles();
  }, []);

  const [loading, setLoading] = useState(false);
  const fetchArticles = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);
      setArticles(response.data.articles);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={articles}
        renderItem={({ item }) => (
          <ListItem
            imageUrl={item.urlToImage}
            title={item.title}
            author={item.author}
            onPress={() => navigation.navigate('Article', { article: item })}
          />
        )}
        keyExtractor={(item) => item.title}
      />
      {loading && <Loading />}
    </SafeAreaView>
  );
};
