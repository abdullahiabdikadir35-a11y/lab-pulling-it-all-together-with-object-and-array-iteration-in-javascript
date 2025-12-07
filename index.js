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
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
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
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}

function allPlayers() {
  const g = gameObject();
  const out = {};

  for (const name in g.home.players) out[name] = g.home.players[name];
  for (const name in g.away.players) out[name] = g.away.players[name];

  return out;
}

function findTeam(name) {
  const g = gameObject();
  if (g.home.teamName === name) return g.home;
  if (g.away.teamName === name) return g.away;
  return null;
}

function numPointsScored(player) {
  return allPlayers()[player].points;
}

function shoeSize(player) {
  return allPlayers()[player].shoe;
}

function teamColors(team) {
  return findTeam(team).colors;
}

function teamNames() {
  const g = gameObject();
  return [g.home.teamName, g.away.teamName];
}

function playerNumbers(team) {
  const t = findTeam(team);
  const nums = [];
  for (const p in t.players) nums.push(t.players[p].number);
  return nums;
}

function playerStats(player) {
  return allPlayers()[player];
}

function bigShoeRebounds() {
  const players = allPlayers();
  let biggest = null;

  for (const name in players) {
    if (!biggest || players[name].shoe > players[biggest].shoe) {
      biggest = name;
    }
  }

  return players[biggest].rebounds;
}

function mostPointsScored() {
  const players = allPlayers();
  let top = null;

  for (const name in players) {
    if (!top || players[name].points > players[top].points) top = name;
  }

  return top;
}

function winningTeam() {
  const g = gameObject();

  function total(team) {
    let sum = 0;
    for (const p in team.players) sum += team.players[p].points;
    return sum;
  }

  const homeTotal = total(g.home);
  const awayTotal = total(g.away);

  return homeTotal > awayTotal ? g.home.teamName : g.away.teamName;
}

function playerWithLongestName() {
  const names = Object.keys(allPlayers());
  let longest = names[0];

  for (let i = 1; i < names.length; i++) {
    if (names[i].length > longest.length) longest = names[i];
  }

  return longest;
}

function doesLongNameStealATon() {
  const players = allPlayers();
  const longest = playerWithLongestName();
  let best = null;

  for (const name in players) {
    if (!best || players[name].steals > players[best].steals) best = name;
  }

  return longest === best;
}

module.exports = {
  numPointsScored,
  shoeSize,
  teamColors,
  teamNames,
  playerNumbers,
  playerStats,
  bigShoeRebounds,
  mostPointsScored,
  winningTeam,
  playerWithLongestName,
  doesLongNameStealATon
};

