function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismack Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "Desagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  };
}

function numPointsScored(playerName) {
  let game = gameObject();
  if (playerName in game.home.players) {
    return game.home.players[playerName].points;
  } else if (playerName in game.away.players) {
    return game.away.players[playerName].points;
  } else {
    return "Player not found";
  }
}

function shoeSize(playerName) {
  let game = gameObject();
  if (playerName in game.home.players) {
    return game.home.players[playerName].shoe;
  } else if (playerName in game.away.players) {
    return game.away.players[playerName].shoe;
  } else {
    return "Player not found";
  }
}

function teamColors(teamName) {
  let game = gameObject();
  if (game.home.teamName === teamName) {
    return game.home.colors;
  } else if (game.away.teamName === teamName) {
    return game.away.colors;
  } else {
    return "Team not found";
  }
}

function teamNames() {
  return gameObject()[(game.home.teamName, game.away.teamName)];
}

function playerNumbers(teamName) {
  let game = gameObject();
  if (game.home.teamName === teamName) {
    return game.home.players.number;
  } else if (game.away.teamName === teamName) {
    return game.away.players.number;
  } else {
    return "Team not found";
  }
}

function playerStats(playerName) {
  let game = gameObject();
  if (playerName in game.home.players) {
    return game.home.players[playerName];
  } else if (playerName in game.away.players) {
    return game.home.players[playerName];
  } else {
    return "Player not found";
  }
}

function bigShoeRebounds() {
  let game = gameObject();
  let largestShoeSize = 0;
  let playerWithLargestShoe = null;
  for (let player in game.home.players) {
    if (game.home.players[player].shoe > largestShoeSize) {
      largestShoeSize = game.home.players[player].shoe;
      playerWithLargestShoe = game.home.players[player];
    }
  }
  for (let player in game.away.playes) {
    if (game.away.players[player].shoe > largestShoeSize) {
      largestShoeSize = game.away.players[player].shoe;
      playerWithLargestShoe = game.away.players[player];
    }
  }
  return playerWithLargestShoe.rebounds;
}

function mostPointsScored() {
  let game = gameObject();
  let mostPoints = 0;
  let playerWithMostPoints = null;
  for (let player in game.home.players) {
    if (game.home.players[player].points > mostPoints) {
      mostPoints = game.home.players[player].points;
      playerWithMostPoints = game.home.players[player];
    }
  }
  for (let player in game.away.players) {
    if (game.away.players[player].points > mostPoints) {
      mostPoints = game.away.players[player].points;
      playerWithMostPoints = game.away.players[player];
    }
  }
  return playerWithMostPoints.points;
}

function winningTeam() {
  let game = gameObject();
  let homeScores = 0;
  let awayScores = 0;
  for (let player in game.home.players) {
    homeScores += game.home.players[player].points;
  }
  for (let player in game.away.players) {
    awayScores += game.away.players[player].points;
  }
  if (homeScores > awayScores) {
    return game.home.teamName;
  } else if (awayScores > homeScores) {
    return game.away.teamName;
  } else {
    return "Game was a draw";
  }
}

function playerWithLongestName() {
  let game = gameObject();
  let longestName = "";
  for (let player in game.home.players) {
    if (player.length > longestName.length) {
      longestName = player;
    }
  }
  for (let player in game.away.playes) {
    if (player.length > longestName.length) {
      longestName = player;
    }
  }
  return longestName;
}

function doesLongNameStealATon() {
  let game = gameObject();
  let longestNamePlayer = playerWithLongestName();
  let mostStealsPlayer = null;
  for (let player in game.home.players) {
    if (
      !mostStealsPlayer ||
      game.home.players[player].steals >
        game.home.players[mostStealsPlayer].steals
    ) {
      mostStealsPlayer = player;
    }
  }
  for (let player in game.away.players) {
    if (
      !mostStealsPlayer ||
      game.away.players[player].steals >
        game.away.players[mostStealsPlayer].steals
    ) {
      mostStealsPlayer = player;
    }
  }

  return mostStealsPlayer === longestNamePlayer;
}
