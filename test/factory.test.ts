import { expect } from 'chai';
import ConditionalAction from '../src/index';

const intToTextConditionalAction: ConditionalAction<number, string> = new ConditionalAction(
  {
    condition: (x: number): boolean => x === 1,
    action: (): string => 'one'
  },
  {
    condition: (x: number): boolean => x === 2,
    action: (): string => 'two'
  },
  {
    condition: (x: number): boolean => x === 3,
    action: (): string => 'three'
  }
);

describe('ConditionalActionFactory play functionality', (): void => {
  it('should return "one"', (): void => {
    const intToTextResult: string = intToTextConditionalAction.play(1);
    expect(intToTextResult).to.equal('one');
  });

  it('should return "two"', (): void => {
    const intToTextResult: string = intToTextConditionalAction.play(2);
    expect(intToTextResult).to.equal('two');
  });

  it('should return "three"', (): void => {
    const intToTextResult: string = intToTextConditionalAction.play(3);
    expect(intToTextResult).to.equal('three');
  });
});
