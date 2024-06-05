import {Image, Pressable, StyleSheet, Text} from 'react-native';
import {IPlayer} from '../types';
import {getPlayerWins} from '../../../utils';

const HEIGHT = 80;

const Player = ({
  player,
  onPressPlayer,
}: {
  player: IPlayer;
  onPressPlayer: (player: IPlayer) => void;
}) => {
  let playerWins = getPlayerWins(player.id);

  return (
    <Pressable onPress={() => onPressPlayer(player)} style={styles.player}>
      <Image source={{uri: player.icon}} style={styles.icon} />
      <Text style={styles.name}>{player.name}</Text>
      <Text style={{fontSize: 16, fontWeight: '700'}}>{playerWins}</Text>
    </Pressable>
  );
};

export default Player;

const styles = StyleSheet.create({
  player: {
    height: HEIGHT,
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    gap: 16,
  },
  icon: {
    height: 60,
    aspectRatio: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: '700',
    flexGrow: 1,
  },
});
