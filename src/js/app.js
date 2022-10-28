// TODO: write your code here
import sum from './basic';
import Game, { GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame } from './game.js'; 

console.log('Yes, it works!');

console.log(sum([1, 4]));

const game = new Game();
game.start();
