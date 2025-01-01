import { strict as assert } from 'node:assert';
import { pending, pedding } from '../src/index.js';

describe('test/pedding.test.ts', () => {
  it('should called once', done => {
    const fn = pending(1, function() {});
    fn();
    assert.throws(() => {
      fn();
    }, /ExecuteTooManyTimesError: Expected to execute 1 times, but got 2 times/);
    done();
  });

  it('should called 100 times then done()', done => {
    done = pedding(100, done);
    for (let i = 0; i < 100; i++) {
      done();
    }
  });

  it('should called pedding(done, 100) then done()', done => {
    done = pedding(done, 100);
    for (let i = 0; i < 100; i++) {
      done();
    }
  });

  it('should called once when meet error', () => {
    let count = 0;
    let cb = function(err?: Error) {
      assert(err);
      assert.strictEqual(err.message, 'mock error');
      count++;
    };
    cb = pedding(2, cb);
    cb(new Error('mock error'));
    cb(new Error('mock error'));
    cb(new Error('mock error'));
    assert.strictEqual(count, 1);
  });

  it('should contain stack from caller', done => {
    const cb = pending(1, function() {});
    cb();
    setTimeout(() => {
      try {
        cb();
        throw new Error('should not run');
      } catch (e: any) {
        assert.match(e.stack, /\s+CallStack\s+at pending /gm);
        done();
      }
    }, 0);
  });
});
