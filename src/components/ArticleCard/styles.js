import {StyleSheet} from 'react-native';
import {COLORS} from '../../utils/constants';

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  card: {
    flex: 1,
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 5,
  },
  image: {
    borderRadius: 5,
  },
  title: {
    color: COLORS.black,
    fontSize: 18,
    marginVertical: 10,
    fontWeight: 'bold',
  },
  bottomRow: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timeAgo: {
    color: COLORS.darkerGrey,
  },
  logo: {
    width: 20,
    height: 20,
    borderRadius: 40,
    marginRight: 5,
  },
  sourceContainer: {
    width: '50%',
    flexDirection: 'row',
  },
});

export default styles;
