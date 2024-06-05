import tournamentData from '../data/StarWarsPlayers.json';
import matchData from '../data/StarWarsMatches.json';
import {IPlayer} from '../features/Tournament/types';

export const playerWins: Map<
  number,
  {
    wins: number;
    totalScore: number;
  }
> = new Map();

export const getPlayerMatchResult = (player: IPlayer) => {
  return matchData.filter(
    match => match.player1.id === player.id || match.player2.id === player.id,
  );
};

export const getPlayerName = (id: number) => {
  let player = tournamentData.find(data => data.id === id);
  return player?.name || '';
};

const getWinner = (p1: IPlayer, p2: IPlayer) => {
  let p1Wins = playerWins.get(p1.id)?.wins || 0;
  let p2Wins = playerWins.get(p2.id)?.wins || 0;

  if (p1Wins > p2Wins) {
    return -1;
  } else if (p1Wins < p2Wins) {
    return 1;
  }

  let p1Score = playerWins.get(p1.id)?.totalScore || 0;
  let p2Score = playerWins.get(p2.id)?.totalScore || 0;

  if (p1Score > p2Score) {
    return -1;
  } else if (p1Score < p2Score) {
    return 1;
  }

  return 0;
};

const setPlayersWins = () => {
  matchData.forEach(match => {
    let isp1Winner = 0;
    let isp2Winner = 0;

    if (match.player1.score > match.player2.score) {
      isp1Winner = 1;
    } else if (match.player1.score < match.player2.score) {
      isp2Winner = 1;
    }

    playerWins.set(match.player1.id, {
      wins: (playerWins.get(match.player1.id)?.wins || 0) + isp1Winner,
      totalScore:
        (playerWins.get(match.player1.id)?.totalScore || 0) +
        match.player1.score,
    });
    playerWins.set(match.player2.id, {
      wins: (playerWins.get(match.player2.id)?.wins || 0) + isp2Winner,
      totalScore:
        (playerWins.get(match.player2.id)?.totalScore || 0) +
        match.player2.score,
    });
  });
};

export const getPlayerWins = (id: number) => {
  return playerWins.get(id)?.wins || 0;
};

export const getPlayers = () => {
  setPlayersWins();
  return tournamentData.sort((p1, p2) => getWinner(p1, p2));
};
