import React from 'react';
import { SafeAreaView, Text, StyleSheet } from 'react-native';
import WebView from 'react-native-webview';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //flexDirectionに指定した垂直方向に要素を並べる（この場合はrow）
  },
});

export default ArticleScreen = ({ route }) => {
  const { article } = route.params;
  console.log(article);
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: article.url }} />
    </SafeAreaView>
  );
};
