import {FlatList, StyleSheet, Text, View} from 'react-native';
import tournamentData from '../../data/StarWarsPlayers.json';
import Player from './components/Player';
import {ListSeprator} from '../../components/ListSeprator';
import {IPlayer} from './types';
import Header from '../../components/Header';
import {getPlayers} from '../../utils';

const Tournament = ({navigation}) => {
  const onPressPlayer = (player: IPlayer) => {
    navigation.push('Result', {player});
  };

  const players = getPlayers();

  return (
    <View style={{flex: 1}}>
      <Header title="Star Wars Blaster Tournament" />
      <Text style={styles.heading}>Points Table</Text>
      <FlatList
        data={players}
        keyExtractor={item => item.id.toString()}
        ItemSeparatorComponent={ListSeprator}
        renderItem={({item}) => (
          <Player player={item} onPressPlayer={onPressPlayer} />
        )}
      />
    </View>
  );
};

export default Tournament;

const styles = StyleSheet.create({
  heading: {
    paddingVertical: 20,
    fontSize: 16,
    fontWeight: '700',
    paddingLeft: 16,
  },
});
