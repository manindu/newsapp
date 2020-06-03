import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View, Text, FlatList} from 'react-native';
import {ArticleCard} from '../../components';
import styles from './styles';
import {getArticles} from '../../state/news/news.actions';

const Home = ({getNewsArticles, articles}) => {
  useEffect(() => {
    getNewsArticles();
  }, [getNewsArticles]);

  const renderItem = ({item}) => (
    <ArticleCard article={item} onPress={() => {}} />
  );

  const keyExtractor = (item, index) => index.toString();

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={articles}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

const mapStateToProps = ({news}) => ({
  articles: news.articles,
});
export default connect(mapStateToProps, {getNewsArticles: getArticles})(Home);
