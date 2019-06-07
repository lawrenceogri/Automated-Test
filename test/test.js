import { increment } from '../index';
import assert from 'assert';

describe('increment function', () => {

  it('increments a positive number', () => {
    const result = increment(1);
    assert.equal(result, 2);
  });

  it('increments a negative number', () => {
    const result = increment(-10);
    assert.equal(result, -9);
  });

  it('fails on strings', () => {
    assert.throws(() => {
      increment("purple");
    });
  });

});