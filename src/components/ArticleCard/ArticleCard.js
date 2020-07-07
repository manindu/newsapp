import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import moment from 'moment';
import styles from './styles';

const ArticleCard = ({title, urlToImage, source, publishedAt, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress(source)} style={styles.container}>
      <Image source={{uri: urlToImage}} style={styles.card} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.bottomRow}>
        <View style={styles.sourceContainer}>
          <Text style={styles.timeAgo}>{source.name}</Text>
        </View>
        <Text style={styles.timeAgo}>{moment(publishedAt).fromNow()}</Text>
      </View>
    </TouchableOpacity>
  );
};

ArticleCard.propTypes = {
  title: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
  source: PropTypes.shape({}).isRequired,
  publishedAt: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default ArticleCard;
