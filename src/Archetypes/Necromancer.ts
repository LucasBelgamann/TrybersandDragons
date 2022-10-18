import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  private _energyType: EnergyType;
  static counter = 0;
    
  constructor(name: string) {
    super(name);
    this._energyType = 'mana';
    Necromancer.counter += 1;
  }
    
  static createdArchetypeInstances(): number {
    return Necromancer.counter; 
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
} 