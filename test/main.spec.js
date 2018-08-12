import { expect } from 'chai';
import { intervalCalculator, alias } from '../src/scaleIntervals';

describe('Musical chromatic scale calculator', () => {
  it('should return G# when initial note is G and notes quantity is 1', () => {
    expect(intervalCalculator('G', 1)).to.be.equal('G#');
  });

  it('should return A# when initial note is F and notes quantity is 5', () => {
    expect(intervalCalculator('F', 5)).to.be.equal('A#');
  });

  it('should return C when initial note is C and notes quantity is 12', () => {
    expect(intervalCalculator('C', 12)).to.be.equal('C');
  });

  it('should return C when initial note is C and notes quantity is 24', () => {
    expect(intervalCalculator('C', 24)).to.be.equal('C');
  });

  context('Alias of the note', () => {
    it('Should return Db when the alias requested is C#', () => {
      expect(alias('C#')).to.be.equal('Db');
    });

    it('Should return Gb when the alias requested is F#', () => {
      expect(alias('F#')).to.be.equal('Gb');
    });
  });
});
