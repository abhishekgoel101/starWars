import {StyleSheet, Text, View} from 'react-native';
import {getPlayerName} from '../../../utils';

const HEIGHT = 80;

enum WinState {
  WIN = 1,
  LOSS = -1,
  DRAW = 0,
}

const Match = ({match, currentPlayer}) => {
  let player1 = getPlayerName(match.player1.id);
  let player2 = getPlayerName(match.player2.id);

  let isWinner = WinState.DRAW;
  if (match.player1.id === currentPlayer.id) {
    if (match.player1.score > match.player2.score) {
      isWinner = WinState.WIN;
    } else if (match.player1.score < match.player2.score) {
      isWinner = WinState.LOSS;
    }
  }
  if (match.player2.id === currentPlayer.id) {
    if (match.player2.score > match.player1.score) {
      isWinner = WinState.WIN;
    } else if (match.player2.score < match.player1.score) {
      isWinner = WinState.LOSS;
    }
  }

  return (
    <View
      style={[
        styles.match,
        isWinner === WinState.WIN && styles.win,
        isWinner === WinState.LOSS && styles.loss,
      ]}>
      <Text style={[styles.text, {flexGrow: 1}]}>{player1}</Text>
      <Text style={styles.text}>
        {match.player1.score} - {match.player2.score}
      </Text>
      <Text style={[styles.text, {flexGrow: 1, textAlign: 'right'}]}>
        {player2}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  match: {
    flexDirection: 'row',
    height: HEIGHT,
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  text: {
    color: 'black',
  },
  win: {
    backgroundColor: 'rgba(26, 120, 23, 0.5)',
  },
  loss: {
    backgroundColor: 'rgba(227, 18, 7, 0.5)',
  },
});

export default Match;
