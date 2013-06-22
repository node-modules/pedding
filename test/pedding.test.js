var pedding = require('../');
var should = require('should');

describe('pedding.test.js', function () {
  it('should called once', function (done) {
    var fn = pedding(1, function () {});
    fn();
    (function () {
      fn();
    }).should.throw('Expect to call 1 times, but got 2');
    (function () {
      fn();
    }).should.throw('Expect to call 1 times, but got 3');
    done();
  });

  it('should called 100 times then done()', function (done) {
    done = pedding(100, done);
    for (var i = 0; i < 100; i++) {
      done();
    }
  });

  it('should called once when meet error', function () {
    var count = 0;
    var cb = function (err) {
      should.exist(err);
      err.message.should.equal('mock error');
      count++;
    };
    cb = pedding(2, cb);
    cb(new Error('mock error'));
    cb(new Error('mock error'));
    cb(new Error('mock error'));
    count.should.equal(1);
  });
});
