import Fighter from '../Fighter';
import Battle from './Battle';

export default class PVP extends Battle {
  private _firstCharacter: Fighter;
  private _secondCharacter: Fighter;
  
  constructor(firstCharacter: Fighter, secondCharacter: Fighter) {
    super(firstCharacter);
    this._firstCharacter = firstCharacter;
    this._secondCharacter = secondCharacter;
  }
}