import {FlatList, StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import {getPlayerMatchResult} from '../../utils';
import {ListSeprator} from '../../components/ListSeprator';
import Match from './components/Match';

const Result = ({navigation, route}) => {
  const {player} = route.params;
  const matchData = getPlayerMatchResult(player);

  return (
    <View>
      <Header title={player.name} canGoBack />
      <Text style={styles.heading}>Points Table</Text>
      <FlatList
        data={matchData}
        keyExtractor={item => item.match.toString()}
        ItemSeparatorComponent={ListSeprator}
        renderItem={({item}) => <Match match={item} currentPlayer={player} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    paddingVertical: 20,
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 16,
  },
});

export default Result;
