const team = {
    _players:[
      {
        firstName: 'pablo',
        lastName: 'Sanchez',
        age: 11
      }
    ],
    _games:[{
      opponent: 'Broncos',
      teamPoints: 42,
      opponentPoints: 27
    }],
    get player(){
      return this._player
    },
    get games(){
      return this._games;
    },
    addplayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      };
      this.player.push(player);
    },
    
    addGame(opp, myPts, oppPts){
      const game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
      this.games.push(game);
    }
  };
  team.addplayer('Step', 'Curry', 28);
  team.addplayer('Lisa', 'Leslie', 44);
  team.addplayer('Bugs', 'Bunny', 76);
  t